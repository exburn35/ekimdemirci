// This layout ensures the login page is not wrapped by the admin layout
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

