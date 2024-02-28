import { SideBar } from "../_components/UI/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto flex gap-10 min-h-[84vh] p-4 lg:p-0">
      <SideBar />
      <div className="rounded-[20px] bg-[#181818] flex-1 flex flex-col gap-10 w-full">
        {children}
      </div>
    </main>
  );
}
