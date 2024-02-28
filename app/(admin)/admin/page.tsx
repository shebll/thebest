import LoginFormAdmin from "@/app/_components/LoginFormAdmin";
import React from "react";

function page() {
  return (
    <div className="min-h-[83vh] container mx-auto flex justify-center items-center">
      <div className="p-10 rounded-[20px] bg-[#292929] flex flex-col  gap-20 justify-center items-center">
        <div className="">
          {/* <Image src={"/"} alt="logo image" width={60} height={60} /> */}
          <h1 className="text-[32px] font-bold">Admin Panel</h1>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <p className="text-[32px] font-medium"> قم بادخال الاميل و الرمز</p>
          <LoginFormAdmin />
        </div>
      </div>
    </div>
  );
}

export default page;
