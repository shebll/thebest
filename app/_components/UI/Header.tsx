"use client";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const paths = ["/", "/create-team", "/admin"];

  const pathName = usePathname();
  const { toggle, setToggle } = useToggle((state) => state);
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          {!paths.includes(pathName) && (
            <div
              onClick={() => setToggle(true)}
              className=" block lg:hidden  cursor-pointer"
            >
              <Image
                src={"/menu.png"}
                alt="menu image"
                width={26}
                height={26}
              />
            </div>
          )}

          <Link href={"/"}>
            <h1 className="text-[28px] lg:text-[32px] font-bold text-white">
              THE BEST
            </h1>
          </Link>
        </div>
        <Link href={"/create-team"} target="_blanc">
          <button className="btn lg ">سجل فريق جديد</button>
        </Link>
      </div>
    </header>
  );
}
