"use server";

export const blockUser = async (token: string, userId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/user/block/${userId}`,
    {
      method: "PUT",
      headers: { Authorization: `Moo__${token}` },
      next: { tags: ["users"] },
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
