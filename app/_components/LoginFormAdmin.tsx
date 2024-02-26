"use client";
import { login } from "@/action/login";
import { loginAdmin } from "@/action/loginAdmin";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginFormAdmin() {
  const route = useRouter();
  const loginHandle = async (formData: FormData) => {
    const response = await loginAdmin(formData);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      // localStorage.setItem("teamId", response.data.role);
      toast.success("تم تسجيل الدخول");
      route.push("/admin/allteams");
    }
    if (response.error) {
      toast.error("حدث خطا قم باعاده المحاوله");
    }
  };
  return (
    <form action={loginHandle} className="flex gap-2 flex-col">
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
      <button className="btn lg">ادخل</button>
    </form>
  );
}
