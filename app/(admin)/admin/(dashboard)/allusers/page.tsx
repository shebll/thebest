"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllUsers } from "@/action/getAllUsers";

function AllUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allUsers, setAllUsers] = useState<ApiResponseUsers | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getAllUsers(token, currentPage);
        setAllUsers(response.data);
        setTotalPages(response.data.numberOfPages);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const UserTable = ({ users }: { users: User[] }) => (
    <div className="overflow-x-auto w-full">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-[#111111]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-100 uppercase tracking-wider"
            >
              Team ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#111111] divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-[#1f1f1f] transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/admin/allusers/${user._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  {user.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.image && (
                  <Image
                    src={user.image.secure_url} // Assuming secure_url is the URL of the image
                    alt={user.name}
                    width={50}
                    height={50}
                    className="h-8 w-8 rounded-full"
                  />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.teamId ? (
                    <span>
                      {user.teamId.name} - {user.teamId.city} -{" "}
                      {user.teamId._id}
                    </span>
                  ) : (
                    <span>No Team</span>
                  )}
                </td>
              </td>
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

  return (
    <div className="w-full">
      {allUsers ? (
        <>
          <UserTable users={allUsers.users} />
          <div className="flex justify-center mt-4">
            <Pagination />
          </div>
        </>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default AllUsers;
