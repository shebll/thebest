"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllTeams } from "@/action/getAllTeams";

function AllTeams() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const [allTeams, setAllTeams] = useState<ApiResponseTeams | null>();
  useEffect(() => {
    const getTeamData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getAllTeams(token, currentPage);
        setAllTeams(response.data);
        setTotalPages(response.data.numberOfPages);
        setLoading(false);
      }
    };
    getTeamData();
  }, [currentPage]); // Fetch data when currentPage changes

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const TeamTable = ({ teams }: { teams: Teams[] }) => (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-[#111111]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-right text-gray-100 uppercase tracking-wider text-xl font-bold"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xl font-bold text-gray-100 uppercase tracking-wider"
            >
              City
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#111111] divide-y divide-gray-200">
          {teams.map((team) => (
            <tr key={team._id} className="hover:bg-[#1a1a1a] transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/admin/allteams/${team._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  {team.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{team.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const Pagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return <div className="flex justify-center mt-4">{pages}</div>;
  };

  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="px-6 py-4 whitespace-nowrap ">...</td>
      <td className="px-6 py-4 whitespace-nowrap">...</td>
    </tr>
  );

  return (
    <div>
      {allTeams ? (
        <>
          {loading ? (
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead className="bg-[#111111]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-gray-100 uppercase tracking-wider text-xl font-bold"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xl font-bold text-gray-100 uppercase tracking-wider"
                    >
                      City
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  <SkeletonRow />
                  <SkeletonRow />
                  <SkeletonRow />
                  <SkeletonRow />
                  <SkeletonRow />
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <TeamTable teams={allTeams.teams} />
              <Pagination />
            </>
          )}
        </>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default AllTeams;
