"use client";
import { getMatches } from "@/action/getMatches";
import React, { useEffect, useState } from "react";

function Page() {
  const [myMatches, setMyMatches] = useState<ApiResponseMatches | null>();
  useEffect(() => {
    const getGroupData = async () => {
      const token = localStorage.getItem("token");
      const teamId = localStorage.getItem("teamId");
      if (token && teamId) {
        const response = await getMatches(token, teamId);
        setMyMatches(response.data);
      }
    };
    getGroupData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {myMatches ? (
        <div>get it</div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Page;
