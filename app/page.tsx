import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-10  justify-center items-center py-[15px] lg:py-[25px]">
      <div className="hero-card">
        <div className="flex flex-col items-center gap-6">
          <Image src={"/logo.png"} width={180} height={100} alt="logo png" />
          <h1 className="text-[40px] text-[#F6CD6B] font-bold  rounded w-fit px-12 py-1">
            THE BEST
          </h1>
        </div>
        <div className="">
          <LoginForm />
        </div>
      </div>
      <div className=" flex flex-col gap-4 p-2">
        <p className="text-[18px] lg:text-[24px] font-semibold   lg:max-w-[700px] text-center backdrop-blur-sm text-[#c09238] px-6 py-2 ">
          من أفضل موقع لتنظيم فرق وإنشاء دورياتك الرياضية بكل سهولة ويسر. قم
          بإدارة الفرق، وجدولة المباريات، وتتبع النتائج ، وتفاعل مع اللاعبين، كل
          ذلك في مكان واحد. اكتشف الآن كيف يمكن لموقعنا أن يسهل عليك تنظيم أحلى
          الأوقات الرياضية مع فريقك!
        </p>
      </div>
    </main>
  );
}
