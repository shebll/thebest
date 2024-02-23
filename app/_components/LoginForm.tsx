"use client";
import { login } from "@/action/login";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const route = useRouter();
  const loginHandle = async (formData: FormData) => {
    const response = await login(formData);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      toast.success("تم تسجيل الدخول");
      route.push("/dashboard");
    }
    if (response.error) {
      toast.error("حدث خطا قم باعاده المحاوله");
    }
  };
  return (
    <form action={loginHandle} className="flex gap-2 flex-col">
      <label htmlFor="" className="">
        code
      </label>
      <div className="px-2 py-2 pr-10 rounded-[10px] flex gap-10 justify-between items-center bg-white">
        <div className="h-full">
          <input
            type="text"
            placeholder="125722"
            name="code"
            id="code"
            className="w-full h-full border-none outline-none "
          />
        </div>
        <button className="px-8 py-2 rounded-[20px] bg-[#39299B] text-white font-bold shadow-md">
          ادخل
        </button>
      </div>
    </form>
  );
}
