"use client";
import { getGroup } from "@/action/getGroup";
import { getQualifying } from "@/action/getQualifying";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Qualifying {
  image: {
    secure_url: string;
    public_id: string;
  };
  _id: string;
  round: string;
  leagueId: string;
  winners: any[]; // Specify a more detailed type if you know the structure of winners
  waiting: any[]; // Same here for waiting
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface QualifyingsResponse {
  message: boolean;
  qualifings: Qualifying[];
}
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
  const [myQualifyings, setMyQualifyings] =
    useState<QualifyingsResponse | null>();

  const [myGroup, setMyGroup] = useState<BackendResponse | null>();
  useEffect(() => {
    const getGroupData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getGroup(token);
        const responseQualifyin = await getQualifying(token);
        setMyQualifyings(responseQualifyin.data);
        setMyGroup(response.data);
      }
    };
    getGroupData();
  }, []);

  return (
    <div className="container mx-auto p-4 lg:px-4 lg:py-8 w-full">
      {myQualifyings ? (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg lg:text-2xl font-semibold">
              الادوار الاقصائيه
            </h1>
            <p>جميع الادوار</p>
          </div>
          <div className="">
            {myQualifyings.qualifings.map((qualifing) => (
              <div key={qualifing._id}>
                <div className="flex flex-col gap-4">
                  <h1 className="text-lg font-semibold">
                    الدور {qualifing.round}
                  </h1>
                  <Image
                    src={qualifing.image.secure_url}
                    alt={qualifing.image.public_id}
                    width={600}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : myGroup ? (
        myGroup.success ? (
          <>
            <div className="">
              <h1 className="text-3xl font-bold mb-4">مجموعتك</h1>
              <div className="">
                {myGroup.group.map((group) => (
                  <div key={group._id.group.id} className="mt-8 w-full">
                    <h2 className="text-xl font-semibold mb-4">
                      مجموعة {group._id.group.name}
                    </h2>
                    <div className="w-full overflow-auto ">
                      <table className="border-collapse border border-gray-200 mb-4">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              الفريق
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              فوز
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              هزيمه
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              تعادل
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              النقط
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              له
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              عليه
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              الفرق
                            </th>
                            <th className="px-6 py-3 text-right font-medium text-gray-500 uppercase tracking-wider">
                              الترتيب
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
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4">مجموعتك</h1>
            <p className="text-lg font-medium">
              لم يتم انشاء الدوري بعد ,انتظر حتي يتم بدء المسابقه
            </p>
          </div>
        )
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Page;
