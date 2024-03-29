import { blockUser } from "@/action/blockUser";
import Image from "next/image";
import React, { useTransition } from "react";
import { toast } from "sonner";

function UserDetails({ userData }: { userData: UserDetails }) {
  const [isPending, startTransition] = useTransition();

  const handleBlockUser = async (userId: string) => {
    console.log(userId);
    const token = localStorage.getItem("token");
    if (token) {
      startTransition(async () => {
        const response = await blockUser(token, userId);
        if (response.success) {
          toast.success("تم حذر العضو ");
        }
        if (response.error) {
          toast.error(response.error);
        }
      });
    }
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {isPending && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-4">{userData.name} Details</h2>
      <div className="bg-[#111111] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-bold">ID:</p>
            <p>{userData._id}</p>
          </div>
          <div>
            <p className="font-bold">Name:</p>
            <p>{userData.name}</p>
          </div>
          <div>
            <p className="font-bold">Phone:</p>
            <p>{userData.phone}</p>
          </div>
          <div>
            <p className="font-bold">Role:</p>
            <p>{userData.role}</p>
          </div>
          <div>
            <p className="font-bold">Team ID:</p>
            <p>{userData.teamId}</p>
          </div>
          <div>
            <p className="font-bold">Deleted:</p>
            <p>{userData.Deleted ? "Yes" : "No"}</p>
          </div>
          <div>
            <p className="font-bold">Blocked:</p>
            <p>{userData.isBlocked ? "Yes" : "No"}</p>
          </div>
          <div>
            <p className="font-bold">Created At:</p>
            <p>{new Date(userData.createdAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="font-bold">Image :</p>
            <div>
              {userData.image && (
                <Image
                  src={userData.image.secure_url} // Assuming secure_url is the URL of the image
                  alt={userData.name}
                  width={150}
                  height={150}
                  className="h-20 w-20 rounded-full"
                />
              )}
            </div>
          </div>
          <div>
            <p className="font-bold">Updated At:</p>
            <p>{new Date(userData.updatedAt).toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => handleBlockUser(userData._id)}
          >
            Block User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
