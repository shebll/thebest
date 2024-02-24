import Image from "next/image";
import React from "react";

const TeamDetails = ({ teamData }: { teamData: TeamDetailsResponse }) => {
  const { team, record, teamMembers } = teamData;

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">{team.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Team Information</h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">City:</span> {team.city}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Leader Code:</span>
                {team.leaderCode}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Member Code:</span>
                {team.memberCode}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">isConfirmed:</span>
                {`${team.isConfirmed}`}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">isDeleted:</span>
                {`${team.isDeleted}`}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">createdAt:</span>
                {team.createdAt}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {record ? (
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Record Info</h2>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Wins:</span> {record.wins}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Losses:</span> {record.losses}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Ties:</span> {record.ties}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">goalsAgainst:</span>{" "}
                  {record.goalsAgainst}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">goalsDifference:</span>{" "}
                  {record.goalsDifference}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">goalsFor:</span>
                  {record.goalsFor}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">points:</span> {record.points}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">team:</span>{" "}
                  {record.team.name}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">leagueId:</span>
                  {record.leagueId}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">group name:</span>
                  {record.group.name}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">group id:</span>
                  {record.group.id}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">isActivated:</span>
                  {`${record.isActivated}`}
                </p>
                {/* Add more record details here if needed */}
              </div>
            ) : (
              <p>no info about this team</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {member.image && (
                <Image
                  src={member.image.secure_url}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
