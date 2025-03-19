import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./sidebar";
import Navbar from "@/components/navbar";
import Container from "@/components/global/container";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <SidebarProvider>
    <AdminSidebar />
    <main className="w-full">
      <Container className='py-6'>
        <h2 className="text-2xl pl-4">Admin Dashboard</h2>
        <Separator className="mt-2" />
            {children}
        </Container>
    </main>
   </SidebarProvider>
  );
}