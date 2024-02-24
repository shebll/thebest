import Link from "next/link";
import { SideBar } from "../_components/UI/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-[85vh] p-4 gap-10">
      <SideBar />
      <div className="flex-1 bg-white p-6 rounded-[20px]">{children}</div>
    </main>
  );
}
