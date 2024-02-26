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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const teamId = localStorage.getItem("teamId");
    const isSend = localStorage.getItem("isSend");

    if (token) {
      setToken(token);
    }
    if (teamId) {
      setTeamId(teamId);
    }
    if (isSend) {
      setToggle(!!isSend);
    }
  }, []);

  const paymentHandle = async (formData: FormData) => {
    startTransition(async () => {
      const response = await payment(formData, teamId, token);
      if (response.success) {
        toast.success("تم ارسال الوصل انتظر قبول الطلب");
        localStorage.setItem("isSend", "true");
        setToggle(true);
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    });
  };

  return (
    <div className="flex justify-between items-start gap-10">
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
              قم بتحويل 200 علي هذا الرقم
            </p>
            <p className="text-[18px] font-medium bg-[#343434] px-10 py-2 text-[#B4B4B4] w-fit rounded-[10px] ">
              01155992222
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
            <button className="btn sm">{isPending ? "تحميل.." : "ارسل"}</button>
          </form>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
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
      <div className="flex-1">
        {toggle && (
          <div className="p-10 bg-[#343434] rounded-[20px] flex flex-col gap-8 justify-center items-center font-bold">
            تم ارسال الوصل برجاء الانتظار
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
