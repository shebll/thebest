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
    const maxPageVisible = 5;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = startPage + maxPageVisible - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageVisible + 1, 1);
    }

    const pages = [];

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className="mx-1 px-3 py-1 rounded-lg bg-gray-200 text-gray-700"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2 py-1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
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

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2 py-1">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          className="mx-1 px-3 py-1 rounded-lg bg-gray-200 text-gray-700"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex justify-center mt-4 gap-2 flex-wrap">{pages}</div>
    );
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
