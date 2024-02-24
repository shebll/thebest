"use client";
import { getRequest } from "@/action/getRequest";
import React, { useEffect, useState } from "react";
import RequestComponent from "../RequestComponent";
import { acceptRequest } from "@/action/acceptRequest";
import { declineRequest } from "@/action/declineRequest";
type props = {
  params: {
    requestId: string;
  };
};
function RequestPage({ params: { requestId } }: props) {
  const [request, setRequest] = useState<ApiResponseRequest | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const response = await getRequest(token, requestId);
        setRequest(response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, [requestId]);

  const handleAccept = async (id: string) => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(id);
      await acceptRequest(token, id);
    }
  };

  const handleDecline = async (id: string) => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(id);
      await declineRequest(token, id);
    }
  };

  return (
    <div className="">
      {request ? (
        <div className="container mx-auto px-4">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RequestComponent
              request={request.request}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          )}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default RequestPage;
