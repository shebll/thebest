"use client";
import { getRequest } from "@/action/getRequest";
import React, { useEffect, useState } from "react";
import RequestComponent from "../RequestComponent";
import { acceptRequest } from "@/action/acceptRequest";
import { declineRequest } from "@/action/declineRequest";
import { toast } from "sonner";
import { waitRequest } from "@/action/waitRequest";
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
      const response = await acceptRequest(token, id);
      if (response.success) {
        toast.success("تم تنفيز الطلب");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    }
  };

  const handleDecline = async (id: string) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await declineRequest(token, id);
      if (response.success) {
        toast.success("تم تنفيز الطلب");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
    }
  };
  const handleWaited = async (id: string) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await waitRequest(token, id);
      if (response.success) {
        toast.success("تم تنفيز الطلب");
      }
      if (response.error) {
        toast.error("حدث خطا قم باعاده المحاوله");
      }
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
              onWait={handleWaited}
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
