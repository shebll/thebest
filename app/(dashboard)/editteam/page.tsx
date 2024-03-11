"use client";
import { getTeam } from "@/action/getTeam";
import { updateMember } from "@/action/updateMember";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

function Page() {
  const [myTeam, setMyTeam] = useState<ApiResponseTeam | null>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getTeamData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getTeam(token);
        setMyTeam(response.data);
      }
    };
    getTeamData();
  }, []);

  const updateTeamMember = async (memberId: string, updatedData: FormData) => {
    // console.log(memberId);
    const imageFile = updatedData.get("image") as File;
    if (!imageFile.name) {
      updatedData.delete("image");
    }
    // console.log(updatedData);
    try {
      const token = localStorage.getItem("token");
      if (token) {
        startTransition(async () => {
          const response = await updateMember(updatedData, memberId, token);
          if (response.success) {
            toast.success("تم تعديل عضو الفريق");
          }
          if (response.error) {
            toast.error(response.error);
          }
        });
      }
    } catch (error) {
      console.error("Error updating team member:", error);
    }
  };

  return (
    <div className="rounded-[20px] bg-[#181818] flex-1 flex flex-col gap-10 p-4 lg:p-10">
      {isPending && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}
      <div className="">
        <h1 className="text-[32px] font-bold">ادخل بيانات فريقك</h1>
      </div>
      <div className="flex flex-col gap-6 items-start">
        {myTeam?.teamMembers.map((member, index) => (
          <form
            key={member._id}
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              updateTeamMember(member._id, formData);
            }}
            className="flex flex-col gap-2 w-full md:w-fit"
          >
            <div className="flex gap-4 items-end flex-col lg:flex-row w-full lg:w-fit">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor={`name${index}`}>اسم اللاعب {index + 1}</label>
                <input
                  disabled
                  type="text"
                  id={`name${index}`}
                  name="name"
                  placeholder="اسم"
                  className=" rounded-[10px] py-2 px-4 text-[18px] outline-none cursor-not-allowed opacity-30"
                  defaultValue={member.name}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor={`phone${index}`}>رقم اللاعب {index + 1}</label>
                <input
                  required
                  title="الرجاء إدخال رقم هاتف مصري صحيح يبدأ بـ 011 أو 012 أو 010 أو 015"
                  pattern="01[0125][0-9]{8}"
                  maxLength={11}
                  type="text"
                  id={`phone${index}`}
                  name="phone"
                  placeholder="رقم"
                  className=" rounded-[10px] py-2 px-4 text-[18px] outline-none"
                  defaultValue={member.phone}
                />
              </div>
              <div className="flex gap-2 flex-col w-[100px] items-center w-full">
                <label
                  htmlFor={`image${index}`}
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
                  id={`image${index}`}
                  name="image"
                  className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                />
              </div>
            </div>
            <button
              disabled={isPending}
              className={`btn sm  ${
                isPending && " opacity-40 cursor-not-allowed"
              }`}
            >
              {isPending ? "انتظر...." : "حفظ التغير"}
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Page;
