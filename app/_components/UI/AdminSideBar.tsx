"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function AdminSideBar() {
  const pathName = usePathname();

  return (
    <div className="bg-white p-6 rounded-[20px] flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Link
          href={"/admin/allteams"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allteams")
              ? "bg-[#39299B] text-white"
              : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          الفرق
        </Link>
        <Link
          href={"/admin/allusers"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allusers")
              ? "bg-[#39299B] text-white"
              : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          المستخدمين
        </Link>
        <Link
          href={"/admin/allrequests"}
          className={`px-14 py-2 ${
            pathName.includes("/admin/allrequests")
              ? "bg-[#39299B] text-white"
              : "bg-gray-200"
          } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
        >
          الطلبات
        </Link>
        {
          <Link
            href={"/admin/leagues"}
            className={`px-14 py-2 ${
              pathName.includes("/admin/leagues")
                ? "bg-[#39299B] text-white"
                : "bg-gray-200"
            } font-medium text-center text-lg rounded-[20px] w-full hover:bg-[#39299B] hover:text-white transition-all`}
          >
            انشاء الدوريات
          </Link>
        }
      </div>
      <div className="">s</div>
    </div>
  );
}
