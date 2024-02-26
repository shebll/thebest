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
      route.push("/myteam");
    }
    if (response.error) {
      toast.error("حدث خطا قم باعاده المحاوله");
    }
  };
  return (
    <form action={loginHandle} className="flex gap-2 flex-col">
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
        <button className="btn sm">ادخل</button>
      </div>
      <label htmlFor="" className=" text-[20px] font-semibold">
        ادخل الرمز الخاص بيك
      </label>
    </form>
  );
}
