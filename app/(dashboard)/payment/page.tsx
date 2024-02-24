"use client";
import { payment } from "@/action/payment";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

function Page() {
  const [isPending, startTransition] = useTransition();
  const [teamId, setTeamId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const teamId = localStorage.getItem("teamId");
    if (token) {
      setToken(token);
    }
    if (teamId) {
      setTeamId(teamId);
    }
  }, []);

  const paymentHandle = async (formData: FormData) => {
    startTransition(async () => {
      const response = await payment(formData, teamId, token);
      if (response.success) {
        toast.success("تم ارسال الوصل انتظر قبول الطلب");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    });
  };

  return (
    <div className="flex flex-col gap-10 justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-[42px] font-bold">وسيله الدفع</h1>
        <p className="text-[24px] font-medium text-gray-700">
          يجب ارسال المبلغ لتفعيل الفريق في الدوري
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[24px] font-medium ">
          ارسل 200 جنيه علي الرقم وقم بارساله صورة الوصل
        </p>
        <p className="text-[24px] font-medium text-gray-200 px-10 py-2 bg-[#39299B] w-fit rounded-[20px] ">
          0111333444
        </p>
      </div>
      <div>
        <div className="w-fit">
          <form className="flex flex-col gap-4" action={paymentHandle}>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex gap-2 flex-col w-[100px] items-center">
                <h2 className="w-full">ارسل صور الوصل</h2>
                <label
                  htmlFor="reset"
                  className="bg-gray-200 rounded-[20px] py-2 px-12 text-[18px] flex items-center cursor-pointer "
                >
                  img
                </label>
                <input
                  type="file"
                  id="reset"
                  name="reset"
                  className="bg-gray-200 rounded-[20px] py-2 px-6 text-[24px] outline-none"
                />
              </div>
            </div>
            <button className="text-[24px] font-medium text-gray-200 px-10 py-2 bg-[#39299B] w-fit rounded-[20px]">
              {isPending ? "تحميل.." : "ارسل"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
