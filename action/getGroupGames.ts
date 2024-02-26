"use server";

export const getGroupGames = async (token: string, groupId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/game/getGames/${groupId}`,
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
