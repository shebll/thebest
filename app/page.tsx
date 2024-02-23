import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex justify-center items-center">
      <div className="p-10 rounded-[20px] bg-gray-100 flex flex-col  gap-20 justify-center items-center">
        <div className="">
          {/* <Image src={"/"} alt="logo image" width={60} height={60} /> */}
          <h1 className="text-[32px] font-bold">THE BEST</h1>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <p className="text-[32px] font-medium">هل معك فريق ؟</p>
          <p className="text-[32px] font-medium">قم بادخال الكود</p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
