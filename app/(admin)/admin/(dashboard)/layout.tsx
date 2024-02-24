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
      <div className="flex-1 bg-white p-6 rounded-[20px]">{children}</div>
    </main>
  );
}
