import { NextRequest } from "next/server";

function getSecretKey(): string {
  return (
    process.env.ADMIN_SECRET ||
    process.env.ADMIN_PASSWORD ||
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
    "ekmdmrci-super-secure-admin-secret-key-2026"
  );
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlToBytes(str: string): Uint8Array {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) {
    b64 += "=";
  }
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function getCryptoKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(getSecretKey()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/**
 * Creates a cryptographically signed HMAC-SHA256 session token for the admin.
 */
export async function createAdminToken(email: string): Promise<string> {
  const enc = new TextEncoder();
  const payload = JSON.stringify({
    email,
    role: "ADMIN",
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days expiration
  });

  const payloadB64 = bytesToBase64Url(enc.encode(payload));
  const key = await getCryptoKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    enc.encode(payloadB64)
  );
  const signatureB64 = bytesToBase64Url(new Uint8Array(signature));

  return `${payloadB64}.${signatureB64}`;
}

/**
 * Verifies a token's HMAC signature and checks expiration.
 */
export async function verifyAdminToken(token: string | null | undefined): Promise<boolean> {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return false;
  }

  try {
    const [payloadB64, signatureB64] = token.split(".");
    if (!payloadB64 || !signatureB64) return false;

    const key = await getCryptoKey();
    const enc = new TextEncoder();
    const sigBytes = base64UrlToBytes(signatureB64);

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes as unknown as BufferSource,
      enc.encode(payloadB64) as unknown as BufferSource
    );

    if (!isValid) return false;

    const payloadRaw = new TextDecoder().decode(base64UrlToBytes(payloadB64));
    const payload = JSON.parse(payloadRaw);

    if (payload.role !== "ADMIN" || !payload.exp || Date.now() > payload.exp) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Helper to verify an incoming NextRequest's cookie or Authorization header.
 */
export async function verifyAdminRequest(request: NextRequest): Promise<boolean> {
  const token =
    request.cookies.get("admin_session")?.value ||
    request.cookies.get("admin_token")?.value ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  return verifyAdminToken(token);
}
