"use server";

export const getMatches = async (token: string, teamId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/game/getSpecific/${teamId}`,
    {
      method: "GET",
      headers: { Authorization: `Moo__${token}` },
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
