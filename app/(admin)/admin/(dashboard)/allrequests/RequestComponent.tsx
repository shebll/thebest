import Image from "next/image";
import { useState, useTransition } from "react";

type props = {
  request: Request;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
  onWait: (id: string) => void;
};
import React from "react";

export default function RequestComponent({
  request,
  onAccept,
  onDecline,
  onWait,
}: props) {
  const [isPendingAccepting, startTransitionAccepting] = useTransition();
  const [isPendingDeclining, startTransitionDeclining] = useTransition();
  const [isPendingWait, startTransitionWait] = useTransition();

  const handleAccept = () => {
    startTransitionAccepting(async () => {
      onAccept(request._id);
    });
  };

  const handleDecline = () => {
    startTransitionDeclining(async () => {
      onDecline(request._id);
    });
  };
  const handleWaited = () => {
    startTransitionDeclining(async () => {
      onWait(request._id);
    });
  };

  return (
    <div className="bg-[#111111] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      {(isPendingAccepting || isPendingDeclining) && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/25 top-0 left-0 flex justify-center items-center">
          <div className="">loading...</div>
        </div>
      )}

      <div className="mb-4">
        <Image
          src={request.image.secure_url}
          alt="Request Image"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="text-center mb-4">
        <button
          onClick={handleAccept}
          disabled={isPendingAccepting}
          className="bg-green-500 hover:bg-green-700 text-[#11111] font-bold py-2 px-4 rounded mr-2"
        >
          {isPendingAccepting ? "Accepting..." : "Accept"}
        </button>
        <button
          onClick={handleDecline}
          disabled={isPendingDeclining}
          className="bg-red-500 hover:bg-red-700 text-[#11111] font-bold py-2 px-4 rounded mr-2"
        >
          {isPendingDeclining ? "Declining..." : "Decline"}
        </button>
        <button
          onClick={handleWaited}
          disabled={isPendingWait}
          className="bg-green-500 hover:bg-green-700 text-[#11111] font-bold py-2 px-4 rounded"
        >
          {isPendingWait ? "waiting..." : "Wait"}
        </button>
      </div>
    </div>
  );
}
