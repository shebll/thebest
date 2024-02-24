"use client";
import { getTeam } from "@/action/getTeam";
import { updateMember } from "@/action/updateMember";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Page() {
  const [myTeam, setMyTeam] = useState<ApiResponseTeam | null>();
  useEffect(() => {
    const getTeamData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getTeam(token);
        localStorage.setItem("teamId", response.data.team._id);
        setMyTeam(response.data);
      }
    };
    getTeamData();
  }, []);

  const updateTeamMember = async (memberId: string, updatedData: FormData) => {
    console.log(memberId);
    console.log(
      updatedData.get("phone"),
      updatedData.get("image"),
      updatedData.get("name")
    );
    try {
      const token = localStorage.getItem("token");
      const teamId = localStorage.getItem("teamId");
      if (token && teamId) {
        const response = await updateMember(
          updatedData,
          memberId,
          teamId,
          token
        );
        if (response.success) {
          toast.success("تم تعديل عضو الفريق");
        }
        if (response.error) {
          toast.error("حدث خطا قم باعاده المحاوله");
        }
      }
    } catch (error) {
      console.error("Error updating team member:", error);
    }
  };

  return (
    <div className="p-20 rounded-[20px] bg-white flex-1 flex flex-col gap-10">
      <div className="">
        <h1 className="text-[32px] font-bold">ادخل بيانات فريقك</h1>
      </div>
      <div className="">
        <div className="flex flex-col gap-6 items-center">
          {myTeam?.teamMembers.map((member, index) => (
            <form
              key={member._id}
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                updateTeamMember(member._id, formData);
              }}
            >
              <div className="flex gap-4">
                <div className="flex gap-2 flex-col">
                  <label htmlFor={`name${index}`}>اسم اللاعب {index + 1}</label>
                  <input
                    disabled
                    type="text"
                    id={`name${index}`}
                    name="name"
                    placeholder="اسم"
                    className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    defaultValue={member.name}
                  />
                </div>
                <div className="flex gap-2 flex-col">
                  <label htmlFor={`phone${index}`}>
                    رقم اللاعب {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`phone${index}`}
                    name="phone"
                    placeholder="رقم"
                    className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                    defaultValue={member.phone}
                  />
                </div>
                <div className="flex gap-2 flex-col w-[100px] items-center">
                  <label htmlFor={`image${index}`}>
                    صوره اللاعب {index + 1}
                  </label>
                  <input
                    type="file"
                    id={`image${index}`}
                    name="image"
                    className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                  />
                </div>
              </div>
              <button type="submit">حفظ</button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
