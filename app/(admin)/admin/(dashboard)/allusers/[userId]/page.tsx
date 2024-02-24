"use client";
import React, { useEffect, useState } from "react";
import { getUserAdmin } from "@/action/getUserAdmin";
import UserDetails from "./UserDetails";
type props = {
  params: {
    userId: string;
  };
};
function UserPage({ params: { userId } }: props) {
  const [userData, setMyTeamData] = useState<ApiResponseUserDetails | null>();
  useEffect(() => {
    const getTeamData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getUserAdmin(token, userId);
        setMyTeamData(response.data);
      }
    };
    getTeamData();
  }, [userId]);

  return (
    <div>
      {userData ? (
        <UserDetails userData={userData.findUser} />
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default UserPage;
