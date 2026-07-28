export const INDEXNOW_KEY = "f8c27fb5416d4792b6b49eedc81557c9";
export const SITE_HOST = "ekimdemirci.com";
export const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
  submittedUrls?: string[];
}

/**
 * Pings IndexNow API with a list of updated or newly created URLs.
 * @param urls Array of URLs or single URL (relative paths like '/blog/foo' or absolute URLs)
 */
export async function pingIndexNow(urls: string | string[]): Promise<IndexNowResponse> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  if (urlList.length === 0) {
    return { success: false, status: 400, message: "No URLs provided for IndexNow submission." };
  }

  // Ensure absolute URLs
  const fullUrls = urlList.map((u) => {
    if (u.startsWith("http://") || u.startsWith("https://")) return u;
    const cleanPath = u.startsWith("/") ? u : `/${u}`;
    return `https://${SITE_HOST}${cleanPath}`;
  });

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: fullUrls,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      return {
        success: true,
        status: res.status,
        message: `Successfully submitted ${fullUrls.length} URL(s) to IndexNow.`,
        submittedUrls: fullUrls,
      };
    } else {
      const text = await res.text();
      return {
        success: false,
        status: res.status,
        message: `IndexNow API returned status ${res.status}: ${text}`,
        submittedUrls: fullUrls,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      status: 500,
      message: `Failed to ping IndexNow: ${error?.message || error}`,
      submittedUrls: fullUrls,
    };
  }
}
