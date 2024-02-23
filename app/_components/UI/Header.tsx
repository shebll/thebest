import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="m-2 bg-gray-300 p-2 rounded-[20px] shadow-lg">
      <div className="container mx-auto flex justify-between w-full items-center">
        <div className="">
          {/* <Image src={"/"} alt="logo image" width={60} height={60} /> */}
          <h1 className="text-[32px] font-bold">THE BEST</h1>
        </div>
        <Link href={"/create-team"} target="_blanc">
          <button className="px-8 py-3 rounded-[20px] bg-[#39299B] text-white font-bold shadow-md">
            سجل فريق جديد
          </button>
        </Link>
      </div>
    </header>
  );
}
