"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllRequests } from "@/action/getAllRequests";

function AllRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allRequests, setAllRequests] = useState<ApiResponseRequests | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeamData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getAllRequests(token, currentPage);
        setAllRequests(response.data);
        setTotalPages(response.data.numberOfPages);
        setLoading(false);
      }
    };
    getTeamData();
  }, [currentPage]); // Fetch data when currentPage changes

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const TeamRequestsTable = ({ requests }: { requests: TeamRequest[] }) => (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-[#111111]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Request ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Team ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              createdAt
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              updatedAt
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#111111] divide-y divide-gray-200">
          {requests.map((request) => (
            <tr
              key={request._id}
              className="hover:bg-[#1f1f1f] transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/admin/allrequests/${request._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  {request.teamId?.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{request._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {request.teamId?._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {request.createdAt}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {request.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const SkeletonLoader = () => (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Request ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-100  uppercase tracking-wider"
            >
              Team ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="px-6 py-4 whitespace-nowrap w-1/3 bg-gray-300"></td>
              <td className="px-6 py-4 whitespace-nowrap w-1/3 bg-gray-300"></td>
              <td className="px-6 py-4 whitespace-nowrap w-1/3 bg-gray-300"></td>
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

  return (
    <div>
      {allRequests ? (
        <div>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <>
              <TeamRequestsTable requests={allRequests.requests} />
              <Pagination />
            </>
          )}
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default AllRequests;
