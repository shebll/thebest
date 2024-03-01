"use client";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function AdminSideBar() {
  const { toggle, setToggle } = useToggle((state) => state);

  const pathName = usePathname();

  return (
    <div
      className={` ${
        toggle ? "flex" : "hidden"
      } absolute top-0 left-0 lg:relative lg:flex  w-screen lg:w-[350px] z-20 rounded-[0px] p-10 lg:rounded-[20px] bg-[#181818] flex-col gap-10`}
    >
      <div className="flex lg:hidden justify-between">
        <Link href={"/"}>
          <h1 className="text-[28px] lg:text-[32px] font-bold text-white">
            THE BEST
          </h1>
        </Link>
        <div onClick={() => setToggle(false)} className="cursor-pointer">
          <Image src={"/close.png"} alt="close image" width={30} height={30} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          onClick={() => setToggle(false)}
          href={"/admin/allteams"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allteams")
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          الفرق
        </Link>
        <Link
          onClick={() => setToggle(false)}
          href={"/admin/allusers"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allusers")
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          المستخدمين
        </Link>
        <Link
          onClick={() => setToggle(false)}
          href={"/admin/allrequests"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allrequests")
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          الطلبات
        </Link>
        <Link
          onClick={() => setToggle(false)}
          href={"/admin/leagues"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/leagues")
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          الدوريات
        </Link>
        <Link
          onClick={() => setToggle(false)}
          href={"/admin/qualifyings"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/qualifyings")
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          دور الاقصاء{" "}
        </Link>
      </div>
    </div>
  );
}
