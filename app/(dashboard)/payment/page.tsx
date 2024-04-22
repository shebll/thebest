"use client";
import { payment } from "@/action/payment";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

function Page() {
  const [toggle, setToggle] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [teamId, setTeamId] = useState("");
  const [token, setToken] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const teamId = localStorage.getItem("teamId");
    const isSend = localStorage.getItem("isSend");
    const isConfirmed = localStorage.getItem("isConfirmed");

    if (token) {
      setToken(token);
    }
    if (teamId) {
      setTeamId(teamId);
    }
    if (isSend) {
      setToggle(isSend == undefined ? false : true);
    }
    if (isConfirmed) {
      setIsConfirmed(isConfirmed ? false : true);
    }
  }, []);

  const paymentHandle = async (formData: FormData) => {
    startTransition(async () => {
      const response = await payment(formData, teamId, token);
      if (response.success) {
        toast.success(".تم ارسال الوصل انتظر قبول الطلب");
        localStorage.setItem("isSend", "true");
        setToggle(true);
      }
      if (response.error) {
        toast.error(response.error);
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 p-4 lg:p-10">
      {isPending && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}
      <div className="flex flex-col gap-14 flex-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-bold">وسيله الدفع لتفعيل الفريق</h1>
          <p className="text-[18px] font-medium text-gray-400">
            يجب ارسال المبلغ لتفعيل الفريق في الدوري
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-[18px] font-medium ">
              قم بتحويل ١٥٠٠ (ألف وخمسمائة جنيه مصري فقط لا غير)علي هذا الرقم
            </p>
            <p className="text-[18px] font-medium bg-[#343434] px-10 py-2 text-[#B4B4B4] w-fit rounded-[10px] ">
              01066364269
            </p>
          </div>

          <form className="flex flex-col gap-4" action={paymentHandle}>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex gap-2 flex-col items-center">
                <p className="text-[18px] font-medium">قم بتصور الفاتورة</p>
                <label
                  htmlFor="reset"
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
                  accept=".png, .jpg , .jpge"
                  required
                  type="file"
                  id="reset"
                  name="reset"
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
              {isPending ? "تحميل.." : "ارسل"}
            </button>
          </form>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-[22px] font-bold">
                الشروط والاحكام للمسابقه
              </h1>
              <p className="text-gray-300">قم بقراءة الشروط و الاحكام جيدا</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300">
                - جائزه ماليه للمركز الاول والمركز الثاني ومشاركه المركز الثالث
                بدون رسوم الدوره التاليه
              </p>
              <p className="text-gray-300">
                - قيمة الاشتراك في البطولة ١٥٠٠ جنيه (ألف وخمسمائة جنيه مصري فقط
                لا غير)
              </p>
              <p className="text-gray-300">
                - يتم تصعيد الأول و الثاني من كل مجموعة و سيتم استكمال البطولة
                بنظام يتم الإعلان عنه بعد انتهاء الدورالأول.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1   gap-2">
        {toggle && (
          <div className="p-6 bg-[#343434] rounded-[20px] flex flex-col gap-8 justify-center items-center font-bold">
            تم ارسال الوصل برجاء الانتظار
          </div>
        )}
        {isConfirmed && (
          <div className="p-6 bg-[#5d9ef3] rounded-[20px] flex flex-col gap-8 justify-center items-center font-bold">
            تم قبول طلب وتم تفعيل فريقك في الدوري
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
