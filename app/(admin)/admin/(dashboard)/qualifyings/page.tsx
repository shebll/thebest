"use client";
import { createQualifying } from "@/action/generateQualifing";
import { getQualifying } from "@/action/getQualifying";
import { uploadQualifing } from "@/action/uploadQualifing";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

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
  success: boolean;
  message: boolean;
  qualifings: Qualifying[];
}
function Leagues() {
  const [isPendingCreate, startTransitionCreate] = useTransition();
  const [myQualifyings, setMyQualifyings] =
    useState<QualifyingsResponse | null>();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getQualifying(token);
        if (response.data) {
          setMyQualifyings(response.data);
        }
      }
    };
    fetchData();
  }, []);

  const handleCreateQualifing = async () => {
    try {
      const updateLeagueFetch = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          startTransitionCreate(async () => {
            const response = await createQualifying(token);
            if (response.success) {
              toast.success("تم انشاء دورة جديده");
            }
            if (response.error) {
              toast.error(response.error);
            }
          });
        }
      };
      updateLeagueFetch();
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };
  const handleUploadQualifing = async (formData: FormData) => {
    try {
      const updateLeagueFetch = async (formData: FormData) => {
        const token = localStorage.getItem("token");
        const id = formData.get("id") as string;
        formData.delete("id");
        if (token) {
          startTransitionCreate(async () => {
            const response = await uploadQualifing(token, id, formData);
            if (response.success) {
              toast.success("تم وضع صورة الدور");
            }
            if (response.error) {
              toast.error(response.error);
            }
          });
        }
      };
      updateLeagueFetch(formData);
    } catch (error) {
      console.error("Error deleting league:", error);
    }
  };
  return (
    <div className="container mx-auto lg:px-4 lg:py-8 flex flex-col gap-10">
      {isPendingCreate && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}
      <div className="">
        <button onClick={handleCreateQualifing} className="btn sm ">
          Generate Qualifyings
        </button>
      </div>
      {myQualifyings ? (
        myQualifyings.success ? (
          <div className="bg-[#121212] text-white rounded-[10px]">
            <div className="container mx-auto p-4">
              {myQualifyings.qualifings.map((qualifying) => (
                <div
                  key={qualifying._id}
                  className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border border-gray-700 rounded-lg my-4"
                >
                  <Link
                    href={`qualifyings/${qualifying._id}`}
                    className="block"
                  >
                    <Image
                      src={
                        qualifying.image
                          ? qualifying.image.secure_url
                          : "/placeholder.png"
                      }
                      alt="Qualifying Round"
                      width={600}
                      height={600}
                      className="object-cover w-full md:w-48 rounded-md"
                    />
                  </Link>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">
                      Round: {qualifying.round}
                    </h3>
                    <p>League ID: {qualifying.leagueId}</p>
                    <p>Created At: {qualifying.createdAt}</p>
                    <p>Updated At: {qualifying.updatedAt}</p>
                    <p>Winners: {qualifying.winners.length}</p>
                    <p>Waiting: {qualifying.waiting.length}</p>
                  </div>
                  <div className=" flex flex-col gap-6 items-center">
                    <Link
                      href={`qualifyings/${qualifying._id}`}
                      className="text-blue-400 hover:text-blue-600 transition duration-300"
                    >
                      View Details
                    </Link>
                    <form
                      action={handleUploadQualifing}
                      className="flex flex-col gap-2 items-center "
                    >
                      <h1>put image for this Qualifying</h1>
                      <label
                        htmlFor={qualifying._id}
                        className=" p-2 bg-gray-500 rounded-sm cursor-pointer"
                      >
                        chose image
                      </label>
                      <input
                        id={qualifying._id}
                        name="image"
                        type="file"
                        required
                      />
                      <input
                        type="text"
                        id="id"
                        name="id"
                        value={qualifying._id}
                        className="hidden"
                      />
                      <button className="btn sm">upload</button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div> لا يوجد دوري شغال حاليا يجب انشاء دورة</div>
        )
      ) : (
        <div> لا يوجد دوري شغال حاليا يجب انشاء دورة</div>
      )}
    </div>
  );
}

export default Leagues;
