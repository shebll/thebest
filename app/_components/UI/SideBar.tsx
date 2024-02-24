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
    <div className="bg-white p-6 rounded-[20px] flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Link
          href={"/payment"}
          className={`px-14 py-2 ${
            pathName == "/payment" ? "bg-[#39299B] text-white" : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          وسيله الدفع
        </Link>
        <Link
          href={"/myteam"}
          className={`px-14 py-2 ${
            pathName == "/myteam" ? "bg-[#39299B] text-white" : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          التشكيله
        </Link>
        <Link
          href={"/mymatches"}
          className={`px-14 py-2 ${
            pathName == "/mymatches" ? "bg-[#39299B] text-white" : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          المباريات
        </Link>
        <Link
          href={"/editteam"}
          className={`px-14 py-2 ${
            pathName == "/editteam" ? "bg-[#39299B] text-white" : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          تعديل الفريق
        </Link>
        {
          <Link
            href={"/mygroup"}
            className={`px-14 py-2 ${
              pathName == "/mygroup" ? "bg-[#39299B] text-white" : "bg-gray-200"
            } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
          >
            المجموعات
          </Link>
        }
      </div>
      <div className="">s</div>
    </div>
  );
}
