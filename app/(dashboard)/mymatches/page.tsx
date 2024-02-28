"use client";
import { getMatches } from "@/action/getMatches";
import React, { useEffect, useState } from "react";

interface Time {
  start: string;
  end: string;
}

interface Score {
  teamA: number;
  teamB: number;
}

interface Team {
  _id: string;
  name: string;
}

interface Game {
  time: Time;
  score: Score;
  _id: string;
  location: string;
  date: string;
  teamA: Team;
  teamB: Team;
  groupId: string;
  leagueId: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BackendResponse {
  success: boolean;
  games: Game[];
}

function Page() {
  const [myMatches, setMyMatches] = useState<BackendResponse | null>();
  useEffect(() => {
    const getGroupData = async () => {
      const token = localStorage.getItem("token");
      const teamId = localStorage.getItem("teamId");
      ``;
      if (token && teamId) {
        const response = await getMatches(token, teamId);
        setMyMatches(response.data);
      }
    };
    getGroupData();
  }, []);

  const GameRow = ({ game }: { game: Game }) => {
    return (
      <div className="p-2 lg:p-10 flex flex-col gap-4 border-[1px] border-gray-200 bg-[#343434] rounded-[10px] lg:px-6 lg:py-2">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-lg lg:text-2xl font-semibold">
              {game.teamA.name}
            </p>
          </div>
          <div className="">
            {/* Ready */}
            {game.state == "Pending" && (
              <div className="flex flex-col gap-2 items-center">
                <div className="">-</div>
                <div className="">-</div>
                <div className="">-</div>
                <div className="p-1 lg:px-4 lg:py-2 bg-gray-600 rounded">
                  لم يتم تحديد
                </div>
              </div>
            )}
            {game.state == "Ready" && (
              <div className="flex flex-col gap-2 items-center">
                <div className="">{game.date}</div>
                <div className="">{game.time.start}</div>
                <div className="">{game.time.end}</div>
                <div className="p-1 lg:px-4 lg:py-2 bg-gray-600 rounded">
                  لم تبدا بعد
                </div>
              </div>
            )}
            {game.state == "Finished" && (
              <div className="flex flex-col gap-2 items-center">
                <div className="">{game.date}</div>
                <div className="flex gap-6">
                  <div className="">{game.score.teamA}</div>
                  <div className="">VS</div>
                  <div className="">{game.score.teamA}</div>
                </div>
                <div className="p-1 lg:px-4 lg:py-2  bg-blue-400 rounded">
                  المباره انتهت
                </div>
              </div>
            )}
          </div>
          <div className="">
            <p className="text-lg lg:text-2xl font-semibold">
              {game.teamB.name}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 lg:p-10">
      {myMatches ? (
        myMatches.success ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">مبارياتك</h1>
            <div className="flex flex-col gap-6">
              {myMatches.games.map((game, index) => (
                <GameRow key={index} game={game} />
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
