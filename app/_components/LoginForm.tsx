"use client";
import { login } from "@/action/login";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();
  const loginHandle = async (formData: FormData) => {
    startTransition(async () => {
      const response = await login(formData);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        toast.success("تم تسجيل الدخول");
        route.push("/myteam");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    });
  };

  return (
    <form action={loginHandle} className="flex gap-2 flex-col">
      {isPending && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center z-20">
          <div className="">loading...</div>
        </div>
      )}
      <label
        htmlFor=""
        className=" text-[20px] font-semibold bg-black/70 backdrop-blur-sm w-fit py-1 px-4 rounded border"
      >
        ادخل الرمز الخاص بيك
      </label>
      <div className="px-2 py-2 pr-10 rounded-[10px] flex gap-10 justify-between items-center bg-[#343434]">
        <div className="h-full">
          <input
            pattern="\d{5}"
            maxLength={5}
            minLength={5}
            required
            type="text"
            placeholder="22 445"
            name="code"
            id="code"
            title="Please enter a 5-digit code."
            className="w-full h-full border-none outline-none bg-transparent"
          />
        </div>
        <button
          disabled={isPending}
          className={`btn sm  ${isPending && " opacity-40 cursor-not-allowed"}`}
        >
          {isPending ? "انتظر.." : "ادخل"}
        </button>
      </div>
    </form>
  );
}
