"use client";
import { getGroup } from "@/action/getGroup";
import React, { useEffect, useState } from "react";

function Page() {
  const [myGroup, setMyGroup] = useState<ApiResponseGroup | null>();
  useEffect(() => {
    const getGroupData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getGroup(token);
        setMyGroup(response.data);
      }
    };
    getGroupData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {myGroup ? (
        <div>get it</div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Page;
