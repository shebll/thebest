"use client";
import React, { useEffect, useState } from "react";
import { getCurrentLeague } from "@/action/getCurrentLeague";
import { endingLeague } from "@/action/endingLeague";
import { updateLeague } from "@/action/updateLeague";
import { generateLeague } from "@/action/CreateLeague";

interface Team {
  name: string;
  id: string;
}

interface RecordInfo {
  wins: number;
  losses: number;
  ties: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  order: number;
  goalsDifference: number;
}

interface Group {
  name: string;
  id: string;
}

interface GroupDetails {
  _id: {
    group: Group;
    leagueId: string;
  };
  teams: {
    team: Team;
    recordInfo: RecordInfo;
  }[];
}

interface LeagueResponse {
  success: boolean;
  league: {
    _id: string;
    name: string;
    winners: string[];
    isActivated: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  groups: GroupDetails[];
}
function Leagues() {
  const [newLeagueName, setNewLeagueName] = useState<string>("");
  const [createLeague, setCreateLeague] = useState<string>("");
  const [leagueData, setLeagueData] = useState<LeagueResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getCurrentLeague(token);
        console.log(response.data);
        setLeagueData(response.data);
      }
    };
    fetchData();
  }, []);

  const handleEndingLeague = async (leagueId: string) => {
    try {
      const DeleteLeague = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await endingLeague(token, leagueId);
        }
      };
      DeleteLeague();
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };

  const handleUpdateLeagueName = async (leagueId: string, newName: string) => {
    try {
      const updateLeagueFetch = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await updateLeague(token, leagueId, newName);
        }
      };
      updateLeagueFetch();
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };

  const handleCreateLeague = async () => {
    try {
      const updateLeagueFetch = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await generateLeague(token, createLeague);
        }
      };
      updateLeagueFetch();
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {leagueData ? (
        <div>
          {leagueData.success !== true ? (
            <>
              <h1 className="text-3xl font-bold mb-4">
                Active League: {leagueData.league.name}
              </h1>
              <h1 className="text-3xl font-bold mb-4">
                {leagueData.league.name}
              </h1>
              <div className="mb-8">
                <p className="font-semibold">
                  League ID: {leagueData.league._id}
                </p>
                <p className="font-semibold">
                  Activated: {leagueData.league.isActivated ? "Yes" : "No"}
                </p>
                <p className="font-semibold">
                  Created At: {leagueData.league.createdAt}
                </p>
                <p className="font-semibold">
                  Updated At: {leagueData.league.updatedAt}
                </p>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-2 mr-4"
                  placeholder="New League Name"
                  value={newLeagueName}
                  onChange={(e) => setNewLeagueName(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() =>
                    handleUpdateLeagueName(leagueData.league._id, newLeagueName)
                  }
                >
                  Update League Name
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleEndingLeague(leagueData.league._id)}
              >
                End League
              </button>
              {leagueData.groups.map((group) => (
                <div key={group._id.group.id} className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Group {group._id.group.name}
                  </h2>
                  <table className="w-full border-collapse border border-gray-200 mb-4">
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
                  <div className="mt-4">
                    <a
                      href={`/admin/leagues/group/${group._id.group.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Group Details
                    </a>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold mb-4">No active league</p>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 mr-4"
                placeholder="New League Name"
                value={createLeague}
                onChange={(e) => setCreateLeague(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCreateLeague}
              >
                Create New League
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Leagues;
