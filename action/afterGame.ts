"use server";

export const afterGame = async (
  token: string,
  gameId: string,
  forData: FormData
) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/game/afterGame/${gameId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Moo__${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: {
          teamA: forData.get("teamA"),
          teamB: forData.get("teamB"),
        },
      }),
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
