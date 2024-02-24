"use server";

export const getTeamAdmin = async (token: string, teamId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/team/get/${teamId}`,
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
