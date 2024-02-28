"use client";
import { loginAdmin } from "@/action/loginAdmin";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export default function LoginFormAdmin() {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();
  const loginHandle = async (formData: FormData) => {
    startTransition(async () => {
      const response = await loginAdmin(formData);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        toast.success("تم تسجيل الدخول");
        route.push("/admin/allteams");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    });
  };
  return (
    <form action={loginHandle} className="flex gap-2 flex-col">
      {isPending && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="">
          الاميل
        </label>
        <div className="px-2 py-2 pr-10 rounded-[10px] flex gap-10 justify-between items-center bg-[#343434]">
          <div className="h-full bg-[#343434]">
            <input
              type="email"
              placeholder="email"
              name="email"
              id="email"
              className="w-full h-full border-none outline-none bg-tr "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="">
          الباسورد
        </label>
        <div className="px-2 py-2 pr-10 rounded-[10px] flex gap-10 justify-between items-center bg-[#343434]">
          <div className="h-full">
            <input
              type="password"
              placeholder="******"
              name="password"
              id="password"
              className="w-full h-full border-none outline-none "
            />
          </div>
        </div>
      </div>
      <button
        disabled={isPending}
        className={`btn sm  ${isPending && " opacity-40 cursor-not-allowed"}`}
      >
        {isPending ? "انتظر.." : "ادخل"}
      </button>
    </form>
  );
}
