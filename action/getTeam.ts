"use server";

export const getTeam = async (token: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/team/getMyTeam`,
    {
      method: "GET",
      headers: { Authorization: `Moo__${token}` },
      next: { tags: ["team"] },
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
