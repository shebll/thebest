"use client";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function SideBar() {
  const { toggle, setToggle } = useToggle((state) => state);
  const pathName = usePathname();
  const [role, setRole] = useState("");
  useEffect(() => {
    const role = localStorage.getItem("role");
    setRole(role as string);
  }, []);

  return (
    <div
      className={` ${
        toggle ? "flex" : "hidden"
      } absolute top-0 left-0 lg:relative lg:flex  w-screen lg:w-[350px] z-20 rounded-[0px] p-10 lg:rounded-[20px] bg-[#181818] flex-col gap-10`}
    >
      <div className="flex lg:hidden justify-between">
        <h1 className="text-[18px] lg:text-[32px] font-bold text-white">
          THE BEST
        </h1>
        <div onClick={() => setToggle(false)} className="cursor-pointer">
          <Image src={"/close.png"} alt="close image" width={30} height={30} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href={"/myteam"}
          className={`px-14 py-2 ${
            pathName == "/myteam" ? "bg-[#c09238] text-white" : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[10px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          التشكيله
        </Link>
        {role == "Leader" && (
          <>
            <Link
              href={"/mygroup"}
              className={`px-14 py-2 ${
                pathName == "/mygroup"
                  ? "bg-[#c09238] text-white"
                  : "bg-[#343434]"
              } font-medium text-center text-lg rounded-[10px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
            >
              المجموعات
            </Link>
            <Link
              href={"/payment"}
              className={`px-14 py-2 ${
                pathName == "/payment"
                  ? "bg-[#c09238] text-white"
                  : "bg-[#343434]"
              } font-medium text-center text-lg rounded-[10px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
            >
              وسيله الدفع
            </Link>
          </>
        )}

        <Link
          href={"/mymatches"}
          className={`px-14 py-2 ${
            pathName == "/mymatches"
              ? "bg-[#c09238] text-white"
              : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[10px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          المباريات
        </Link>
        <Link
          href={"/editteam"}
          className={`px-14 py-2 ${
            pathName == "/editteam" ? "bg-[#c09238] text-white" : "bg-[#343434]"
          } font-medium text-center text-lg rounded-[10px] w-full hover:bg-[#c09238] hover:text-white transition-all`}
        >
          تعديل الفريق
        </Link>
      </div>
    </div>
  );
}
