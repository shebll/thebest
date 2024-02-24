"use server";

export const acceptRequest = async (token: string, requestId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/request/accept/${requestId}`,
    {
      method: "PUT",
      headers: { Authorization: `Moo__${token}` },
      next: { tags: ["allRequests"] },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message };
  } else {
    return { success: responseData.message, data: responseData };
  }
};
