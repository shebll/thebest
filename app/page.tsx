import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-10  justify-center items-center py-[85px]">
      <div className="hero-card">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-[32px] font-bold text-white text-center bg-blue-600 rounded w-fit px-12 py-1">
            THE BEST
          </h1>
          <h2 className="text-[28px] font-bold text-center">هل معك فريق ؟</h2>
        </div>
        <div className="">
          <LoginForm />
        </div>
      </div>
      <div className=" flex flex-col gap-4 ">
        <p className="text-[16px] lg:text-[24px] font-semibold text-[#dfdfdf] max-w-[300px] lg:max-w-[700px] text-center backdrop-blur-sm bg-black/70 px-6 py-2">
          من أفضل موقع لتنظيم فرق وإنشاء دورياتك الرياضية بكل سهولة ويسر. قم
          بإدارة الفرق، وجدولة المباريات، وتتبع النتائج ، وتفاعل مع اللاعبين، كل
          ذلك في مكان واحد. اكتشف الآن كيف يمكن لموقعنا أن يسهل عليك تنظيم أحلى
          الأوقات الرياضية مع فريقك!
        </p>
      </div>
    </main>
  );
}
