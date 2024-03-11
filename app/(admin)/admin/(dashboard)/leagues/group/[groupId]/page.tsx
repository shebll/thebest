"use client";
import { afterGame } from "@/action/afterGame";
import { beforeGame } from "@/action/beforeGame";
import { getGroupGames } from "@/action/getGroupGames";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
type props = {
  params: {
    groupId: string;
  };
};

interface Game {
  time: {
    start: string;
    end: string;
  };
  score: {
    teamA: number;
    teamB: number;
  };
  _id: string;
  location: string;
  date: string;
  teamA: {
    _id: string;
    name: string;
  };
  teamB: {
    _id: string;
    name: string;
  };
  groupId: string;
  leagueId: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface GamesResponse {
  success: boolean;
  message: string;
  games: Game[];
}

export default function GroupDetailPage({ params: { groupId } }: props) {
  const [isPendingInfo, startTransitionInfo] = useTransition();
  const [isPendingScore, startTransitionScore] = useTransition();
  const [gamesData, setGamesData] = useState<GamesResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await getGroupGames(token, groupId);
          setGamesData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [groupId]);

  const handleInfoGameSubmit = async (formData: FormData) => {
    const token = localStorage.getItem("token");
    if (token) {
      startTransitionInfo(async () => {
        const response = await beforeGame(
          token,
          formData.get("gameId") as string,
          formData
        );
        if (response.success) {
          toast.success("تم تحديد المبارة");
        }
        if (response.error) {
          toast.error(response.error);
        }
      });
    }
  };

  const handleGameScoreSubmit = async (formData: FormData) => {
    const token = localStorage.getItem("token");
    if (token) {
      startTransitionScore(async () => {
        const response = await afterGame(
          token,
          formData.get("gameId") as string,
          formData
        );
        if (response.data) {
          toast.success("تم تحديد نتيجه المبارة");
        }
        if (response.error) {
          toast.error(response.error);
        }
      });
    }
  };

  return (
    <div className="container mx-auto lg:px-4 lg:py-8">
      {(isPendingInfo || isPendingScore) && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}

      {gamesData ? (
        gamesData.success ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">Games</h1>
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {gamesData.games.map((game) => (
                <div
                  key={game._id}
                  className="bg-[#111111] rounded-lg overflow-hidden shadow-md"
                >
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">
                      <Link
                        href={`/admin/allteams/${game.teamA._id}`}
                        className=" text-4xl font-bold text-blue-400 hove:text-blue-600"
                      >
                        {game.teamA.name}
                      </Link>
                      vs
                      <Link
                        href={`/admin/allteams/${game.teamB._id}`}
                        className=" text-3xl font-bold text-blue-400 hove:text-blue-600"
                      >
                        {game.teamB.name}
                      </Link>
                    </h2>
                    <p className="text-gray-100  mb-2">
                      Location: {game.location}
                    </p>
                    <p className="text-gray-100  mb-2">Date: {game.date}</p>
                    <p className="text-gray-100  mb-2">State: {game.state}</p>
                    <p className="text-gray-100  mb-2">
                      Start Time: {game.time.start}
                    </p>
                    <p className="text-gray-100  mb-2">
                      End Time: {game.time.end}
                    </p>
                    <p className="text-gray-100  mb-2">
                      Created At: {game.createdAt}
                    </p>
                    <p className="text-gray-100  mb-2">
                      Updated At: {game.updatedAt}
                    </p>
                  </div>
                  <div className="bg-[#111111]  px-4 py-2 flex justify-end flex-col gap-10">
                    <form
                      action={handleInfoGameSubmit}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex flex-col gap-1">
                        <label htmlFor="location">location</label>
                        <input
                          required
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Location"
                          className="  px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="date">date</label>
                        <input
                          required
                          id="date"
                          type="date"
                          name="date"
                          className="  px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="startTime">Start Time</label>

                        <input
                          required
                          id="startTime"
                          type="time"
                          name="startTime"
                          className="px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="endTime">End Time</label>

                        <input
                          id="endTime"
                          name="endTime"
                          required
                          type="time"
                          className="  px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <input
                        type="text"
                        name="gameId"
                        value={game._id}
                        className="hidden"
                      />
                      <button type="submit" className="btn sm">
                        Update Info
                      </button>
                    </form>
                    <form
                      action={handleGameScoreSubmit}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex flex-col gap-1">
                        <label htmlFor="teamA">
                          Team {game.teamA.name} Score
                        </label>
                        <input
                          name="teamA"
                          id="teamA"
                          type="number"
                          placeholder="Team A Score"
                          className="px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="teamB">
                          Team {game.teamB.name} Score
                        </label>
                        <input
                          name="teamB"
                          id="teamB"
                          type="number"
                          placeholder="Team B Score"
                          className="px-4 py-2 mr-2 rounded"
                        />
                      </div>
                      <input
                        type="text"
                        name="gameId"
                        value={game._id}
                        className="hidden"
                      />
                      <button type="submit" className="btn sm">
                        Update Score
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-red-500">{gamesData.message}</p>
        )
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}
