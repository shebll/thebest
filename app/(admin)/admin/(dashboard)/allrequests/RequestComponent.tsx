import Image from "next/image";
import { useState } from "react";

type props = {
  request: Request;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
};
import React from "react";

export default function RequestComponent({
  request,
  onAccept,
  onDecline,
}: props) {
  const [loading, setLoading] = useState(false);

  const handleAccept = () => {
    setLoading(true);
    onAccept(request._id);
  };

  const handleDecline = () => {
    setLoading(true);
    onDecline(request._id);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <Image
          src={request.image.secure_url}
          alt="Request Image"
          width={500}
          height={600}
          className="w-32 h-32 object-cover"
        />
      </div>
      <div className="text-center mb-4">
        <button
          onClick={handleAccept}
          disabled={loading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {loading ? "Accepting..." : "Accept"}
        </button>
        <button
          onClick={handleDecline}
          disabled={loading}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Declining..." : "Decline"}
        </button>
      </div>
    </div>
  );
}
