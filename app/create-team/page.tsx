"use client";
import { createTeam } from "@/action/createTeam";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

export default function Page() {
  const [leaderCode, setLeaderCode] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [toggle, setToggle] = useState(false);
  const createTeamHandle = async (formData: FormData) => {
    const response = await createTeam(formData);
    if (response.success) {
      setToggle(true);
      setLeaderCode(response.data.leaderCode);
      setMemberCode(response.data.memberCode);
      toast.success("تم انشاء الفريق");
    }
    if (response.error) {
      toast.error("حدث خطا قم باعاده المحاوله");
    }
  };
  return (
    <>
      <div className="flex gap-10 w-full p-4">
        <div className="p-20 rounded-[20px] bg-white flex-1 flex flex-col gap-10">
          <div className="">
            <h1 className="text-[32px] font-bold">ادخل بيانات فريقك</h1>
          </div>
          <div className="">
            <form action={createTeamHandle}>
              <div className="flex flex-col gap-6 items-center">
                <div className="">
                  <label htmlFor="teamName">اسم التيم</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    placeholder="اسم"
                    className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                  />
                </div>
                <div className="">
                  <label htmlFor="city">المدينة</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="اسم"
                    className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[0][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[0][name]"
                      name="teamMembers[0][name]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[0][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[0][phone]"
                      name="teamMembers[0][phone]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    صوره اللاعب 1
                    <label
                      htmlFor="leaderImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[18px] flex items-center "
                    >
                      img
                    </label>
                    <input
                      type="file"
                      id="leaderImg"
                      name="leaderImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[1][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[1][name]"
                      name="teamMembers[1][name]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[1][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[1][phone]"
                      name="teamMembers[1][phone]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    صوره اللاعب 1
                    <label
                      htmlFor="memberOneImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[18px] flex items-center "
                    >
                      img
                    </label>
                    <input
                      type="file"
                      id="memberOneImg"
                      name="memberOneImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[2][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[2][name]"
                      name="teamMembers[2][name]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[2][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[2][phone]"
                      name="teamMembers[2][phone]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    صوره اللاعب 1
                    <label
                      htmlFor="memberTwoImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[18px] flex items-center "
                    >
                      img
                    </label>
                    <input
                      type="file"
                      id="memberTwoImg"
                      name="memberTwoImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[3][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[3][name]"
                      name="teamMembers[3][name]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[3][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[3][phone]"
                      name="teamMembers[3][phone]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    صوره اللاعب 1
                    <label
                      htmlFor="memberThreeImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[18px] flex items-center "
                    >
                      img
                    </label>
                    <input
                      type="file"
                      id="memberThreeImg"
                      name="memberThreeImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[4][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[4][name]"
                      name="teamMembers[4][name]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[4][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[4][phone]"
                      name="teamMembers[4][phone]"
                      placeholder="اسم"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    صوره اللاعب 1
                    <label
                      htmlFor="memberFourImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[18px] flex items-center "
                    >
                      img
                    </label>
                    <input
                      type="file"
                      id="memberFourImg"
                      name="memberFourImg"
                      className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    />
                  </div>
                </div>
              </div>
              <button>create</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={` ${
          toggle ? "flex " : "hidden "
        }absolute top-0 left-0 h-[120vh] w-full backdrop-blur-sm bg-gray-400/25 flex justify-center items-center z-10"`}
      >
        <div className="p-10 bg-white rounded-[20px] flex  flex-col gap-8 justify-center items-center">
          <div className=" flex flex-col gap-2 justify-center items-center w-full">
            <p>كود قائد الفريق</p>
            <p className="text-[26px] px-8 py-4 rounded-[10px] bg-gray-200 w-full">
              {leaderCode}
            </p>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center w-full">
            <p>كود اعضاء الفريق</p>
            <p className="text-[26px] px-8 py-4 rounded-[10px] bg-gray-200 w-full">
              {memberCode}
            </p>
          </div>
          <Link href={"/"}>
            <button className="px-8 py-2 rounded-[20px] bg-[#39299B] text-white font-bold shadow-md">
              قم بالتسجيل
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
