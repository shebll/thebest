"use client";
import { getTeam } from "@/action/getTeam";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Page() {
  const [myTeam, setMyTeam] = useState<ApiResponseTeam | null>();
  useEffect(() => {
    const getTeamData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getTeam(token);
        localStorage.setItem("teamId", response.data.team._id);
        localStorage.setItem("isConfirmed", response.data.team.isConfirmed);
        setMyTeam(response.data);
      }
    };
    getTeamData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 team-card relative">
      {myTeam ? (
        // <div>
        //   <h1 className="text-4xl font-bold mb-4">{myTeam.team.name}</h1>
        //   <p className="text-gray-600 mb-4">City: {myTeam.team.city}</p>
        //   <p className="text-gray-600 mb-4">
        //     Member Code: {myTeam.team.memberCode}
        //   </p>
        //   <p className="text-gray-600 mb-4">
        //     Confirmed: {myTeam.team.isConfirmed ? "Yes" : "No"}
        //   </p>
        //   <p className="text-gray-600 mb-4">
        //     Deleted: {myTeam.team.isDeleted ? "Yes" : "No"}
        //   </p>

        //   <h2 className="text-2xl font-bold mb-2">Team Members:</h2>
        //   <table className="w-full border-collapse border border-gray-200">
        //     <thead className="bg-gray-100">
        //       <tr>
        //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //           Name
        //         </th>
        //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //           Phone
        //         </th>
        //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //           Role
        //         </th>
        //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //           Deleted
        //         </th>
        //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //           Blocked
        //         </th>
        //       </tr>
        //     </thead>
        //     <tbody className="divide-y divide-gray-200">
        //       {myTeam.teamMembers.map((member) => (
        //         <tr
        //           key={member._id}
        //           className="transition-colors duration-300 hover:bg-gray-50"
        //         >
        //           <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
        //           <td className="px-6 py-4 whitespace-nowrap">
        //             {member.phone}
        //           </td>
        //           <td className="px-6 py-4 whitespace-nowrap">{member.role}</td>
        //           <td className="px-6 py-4 whitespace-nowrap">
        //             {member.Deleted ? "Yes" : "No"}
        //           </td>
        //           <td className="px-6 py-4 whitespace-nowrap">
        //             {member.isBlocked ? "Yes" : "No"}
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>
        <div className="flex flex-col items-center">
          <div className="team-name">{myTeam.team.name}</div>
          <div>
            {myTeam.teamMembers.map((player, i) => (
              <div
                key={player._id}
                className="absolute flex flex-col justify-center items-center gap-1 w-fit player-card"
              >
                <div className="">
                  <Image
                    src={player.image ? player.image.secure_url : "/image.png"}
                    alt={`${player.name} photo`}
                    width={70}
                    height={70}
                    className="block lg:hidden rounded-full shadow-md border-[2px] border-gray-200"
                  />
                  <Image
                    src={player.image ? player.image.secure_url : "/image.png"}
                    alt={`${player.name} photo`}
                    width={100}
                    height={100}
                    className="hidden lg:block rounded-full shadow-md border-[2px] border-gray-200"
                  />
                </div>
                <div className="">
                  <h1>{player.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Page;
