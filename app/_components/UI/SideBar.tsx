"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function SideBar() {
  const pathName = usePathname();
  const [role, setRole] = useState("");
  useEffect(() => {
    const role = localStorage.getItem("role");
    setRole(role as string);
  }, []);

  return (
    <div className="p-10 rounded-[20px] bg-[#181818] flex flex-col gap-10">
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
