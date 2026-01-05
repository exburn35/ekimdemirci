import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

// TODO: Implement actual authentication check
// For now, this is a placeholder
async function checkAuth() {
  // This should check for admin role
  // const session = await getServerSession();
  // if (!session || session.user.role !== 'ADMIN') {
  //   redirect('/');
  // }
  return true;
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthorized = await checkAuth();
  
  if (!isAuthorized) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex pt-16">
        <AdminSidebar />
        <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-[280px] transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}

