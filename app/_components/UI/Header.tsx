"use client";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { toggle, setToggle } = useToggle((state) => state);
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between w-full items-center">
        <div className="flex gap-2">
          <div
            onClick={() => setToggle(true)}
            className=" block lg:hidden  cursor-pointer"
          >
            <Image src={"/menu.png"} alt="menu image" width={20} height={20} />
          </div>
          <h1 className="text-[18px] lg:text-[32px] font-bold text-white">
            THE BEST
          </h1>
        </div>
        <Link href={"/create-team"} target="_blanc">
          <button className="btn lg ">سجل فريق جديد</button>
        </Link>
      </div>
    </header>
  );
}
