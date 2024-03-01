"use client";
import { AdminSideBar } from "@/app/_components/UI/AdminSideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-[85vh] p-4 gap-10">
      <AdminSideBar />
      <div className="flex-1 rounded-[20px] bg-[#181818] p-4 lg:p-10 w-full">
        {children}
      </div>
    </main>
  );
}
