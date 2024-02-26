import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between w-full items-center">
        <div className="">
          {/* <Image src={"/"} alt="logo image" width={60} height={60} /> */}
          <h1 className="text-[32px] font-bold text-white">THE BEST</h1>
        </div>
        <Link href={"/create-team"} target="_blanc">
          <button className="btn lg">سجل فريق جديد</button>
        </Link>
      </div>
    </header>
  );
}
