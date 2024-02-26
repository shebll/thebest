"use client";
import React, { useEffect, useState } from "react";
import TeamDetails from "./TeamDetails";
import { getTeamAdmin } from "@/action/getTeamAdmin";

type props = {
  params: {
    teamId: string;
  };
};
function TeamPage({ params: { teamId } }: props) {
  const [teamData, setMyTeamData] = useState<TeamDetailsResponse | null>();
  useEffect(() => {
    const getTeamData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getTeamAdmin(token, teamId);
        setMyTeamData(response.data);
      }
    };
    getTeamData();
  }, [teamId]);

  return (
    <div>
      {teamData ? (
        <TeamDetails teamData={teamData} />
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default TeamPage;
