"use client";
import { createTeam } from "@/action/createTeam";
import Image from "next/image";
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
      <div className="container mx-auto flex gap-10 ">
        <div className="p-10 rounded-[20px] bg-[#181818] flex-1 flex flex-col gap-10">
          <div className="">
            <h1 className="text-[32px] font-bold">ادخل بيانات فريقك</h1>
            <p className="text-gray-300">
              قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
            </p>
          </div>
          <div className="">
            <form action={createTeamHandle} className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col gap-2">
                  <label htmlFor="teamName">اسم الفريق</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    placeholder="اسم"
                    className="rounded-[10px] py-2 px-4 text-[18px] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="city">المدينة</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="اسم"
                    className="rounded-[10px] py-2 px-4 text-[18px] outline-none"
                  />
                </div>
                <div className="flex gap-4 items-end">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[0][name]">اسم القائد </label>
                    <input
                      type="text"
                      id="teamMembers[0][name]"
                      name="teamMembers[0][name]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[0][phone]">رقم القائد </label>
                    <input
                      type="text"
                      id="teamMembers[0][phone]"
                      name="teamMembers[0][phone]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    <label
                      htmlFor="leaderImg"
                      className="rounded-[10px] py-2 px-6 text-[18px] flex items-center bg-gray-300 cursor-pointer "
                    >
                      <Image
                        src={"/image.png"}
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </label>
                    <input
                      type="file"
                      id="leaderImg"
                      name="leaderImg"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  👑
                </div>
                <div className="flex gap-4 items-end">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[1][name]">اسم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[1][name]"
                      name="teamMembers[1][name]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[1][phone]">رقم اللاعب 1</label>
                    <input
                      type="text"
                      id="teamMembers[1][phone]"
                      name="teamMembers[1][phone]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    <label
                      htmlFor="memberOneImg"
                      className="rounded-[10px] py-2 px-6 text-[18px] flex items-center bg-gray-300 cursor-pointer "
                    >
                      <Image
                        src={"/image.png"}
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </label>
                    <input
                      type="file"
                      id="memberOneImg"
                      name="memberOneImg"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 items-end">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[2][name]">اسم اللاعب 2</label>
                    <input
                      type="text"
                      id="teamMembers[2][name]"
                      name="teamMembers[2][name]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[2][phone]">رقم اللاعب 2</label>
                    <input
                      type="text"
                      id="teamMembers[2][phone]"
                      name="teamMembers[2][phone]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    <label
                      htmlFor="memberTwoImg"
                      className="rounded-[10px] py-2 px-6 text-[18px] flex items-center bg-gray-300 cursor-pointer "
                    >
                      <Image
                        src={"/image.png"}
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </label>
                    <input type="file" id="memberTwoImg" name="memberTwoImg" />
                  </div>
                </div>
                <div className="flex gap-4 items-end">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[3][name]">اسم اللاعب 3</label>
                    <input
                      type="text"
                      id="teamMembers[3][name]"
                      name="teamMembers[3][name]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[3][phone]">رقم اللاعب 3</label>
                    <input
                      type="text"
                      id="teamMembers[3][phone]"
                      name="teamMembers[3][phone]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    <label
                      htmlFor="memberThreeImg"
                      className="rounded-[10px] py-2 px-6 text-[18px] flex items-center bg-gray-300 cursor-pointer "
                    >
                      <Image
                        src={"/image.png"}
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </label>
                    <input
                      type="file"
                      id="memberThreeImg"
                      name="memberThreeImg"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 items-end">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[4][name]">اسم اللاعب 4</label>
                    <input
                      type="text"
                      id="teamMembers[4][name]"
                      name="teamMembers[4][name]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="teamMembers[4][phone]">رقم اللاعب 4</label>
                    <input
                      type="text"
                      id="teamMembers[4][phone]"
                      name="teamMembers[4][phone]"
                      placeholder="اسم"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-col w-[100px] items-center">
                    <label
                      htmlFor="memberFourImg"
                      className="rounded-[10px] py-2 px-6 text-[18px] flex items-center bg-gray-300 cursor-pointer "
                    >
                      <Image
                        src={"/image.png"}
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </label>
                    <input
                      type="file"
                      id="memberFourImg"
                      name="memberFourImg"
                      className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full btn lg">سجل الفريق</button>
            </form>
          </div>
        </div>
        <div className="p-10 rounded-[20px] bg-[#181818] flex flex-col gap-10">
          <div className="">
            <h1 className="text-[32px] font-bold">الشروط و الاحكام</h1>
            <p className="text-gray-300">
              قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="">
              <h1 className="text-[22px] font-bold">الشروط لتسجيل الفريق</h1>
              <p className="text-gray-300">
                قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-300">
                - قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                - قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-[22px] font-bold">الشروط لتسجيل الفريق</h1>
              <p className="text-gray-300">
                قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-300">
                - قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                - قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
              <p className="text-gray-300">
                -قم بقراءة الشروط و الاحكام جيدا قبل حفظ الفريق
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          toggle ? "flex " : "hidden "
        }absolute top-0 left-0 h-[120vh] w-full backdrop-blur-sm bg-gray-400/25 flex justify-center items-center z-10"`}
      >
        <div className="p-10 bg-[#343434] rounded-[20px] flex  flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <p className="text-[24px] font-bold">كود قائد الفريق</p>
            <p className="text-[20px] px-8 py-2 rounded-[10px] w-full bg-[#7A7A7A]">
              {leaderCode}
            </p>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center w-full">
            <p className="text-[24px] font-bold">كود اعضاء الفريق</p>
            <p className="text-[20px] px-8 py-2 rounded-[10px] w-full bg-[#7A7A7A]">
              {memberCode}
            </p>
          </div>
          <h2>
            قم بالتسجيل كا قائد و قم بدفع المبلغ لتفعيل <br />
            فريقك وانتظر حتي يتم قبول طلبك
          </h2>
          <Link href={"/"}>
            <button className="btn lg w-full">
              قم بالتسجيل بستخدام الكود{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
