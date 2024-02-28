"use client";
import { getGroup } from "@/action/getGroup";
import React, { useEffect, useState } from "react";

interface TeamRecordInfo {
  wins: number;
  losses: number;
  ties: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  order: number;
  goalsDifference: number;
}

interface Team {
  name: string;
  id: string;
}

interface Group {
  _id: {
    group: {
      name: string;
      id: string;
    };
    leagueId: string;
  };
  teams: {
    team: Team;
    recordInfo: TeamRecordInfo;
  }[];
}

interface BackendResponse {
  success: boolean;
  group: Group[];
}
function Page() {
  const [myGroup, setMyGroup] = useState<BackendResponse | null>();
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
    <div className="container mx-auto p-4 lg:px-4 lg:py-8 w-full">
      {myGroup ? (
        myGroup.success ? (
          <div className="">
            <h1 className="text-3xl font-bold mb-4">Groups</h1>
            <div className="">
              {myGroup.group.map((group) => (
                <div key={group._id.group.id} className="mt-8 w-full">
                  <h2 className="text-xl font-semibold mb-4">
                    Group {group._id.group.name}
                  </h2>
                  <div className="w-full overflow-auto ">
                    <table className="border-collapse border border-gray-200 mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Team
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Wins
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Losses
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ties
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Points
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goals For
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goals Against
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goals Difference
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {group.teams.map((team) => (
                          <tr
                            key={team.team.id}
                            className="transition-colors duration-300"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.team.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.wins}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.losses}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.ties}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.points}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.goalsFor}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.goalsAgainst}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.goalsDifference}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {team.recordInfo.order}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>no data yet</div>
        )
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Page;
