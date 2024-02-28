import LoginForm from "./_components/LoginForm";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-10  justify-center items-center py-[85px]">
      <div className="hero-card">
        <div className="flex flex-col gap-6">
          {/* <Image src={"/"} alt="logo image" width={60} height={60} /> */}
          <h1 className="text-[20px] font-bold text-center">
            تحقق من أفضل موقع لتنظيم فرق وإنشاء دورياتك الرياضية
            <br /> أحلى الأوقات الرياضية مع فريقك!
          </h1>
          <h2 className="text-[28px] font-bold text-center">هل معك فريق ؟</h2>
        </div>
        <div className="">
          <LoginForm />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h2 className="text-[48px] font-bold text-center">The Best</h2>
        <p className="text-center text-[14px] lg:text-[24px] font-semibold text-[#c2c2c2] ">
          من أفضل موقع لتنظيم فرق وإنشاء دورياتك الرياضية بكل سهولة ويسر.
          <br /> قم بإدارة الفرق، وجدولة المباريات، وتتبع النتائج ، وتفاعل مع
          اللاعبين، كل ذلك في مكان واحد. <br />
          اكتشف الآن كيف يمكن لموقعنا أن يسهل عليك تنظيم أحلى الأوقات الرياضية
          مع فريقك!
        </p>
      </div>
    </main>
  );
}
