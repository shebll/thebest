"use server";

export const beforeGame = async (
  token: string,
  gameId: string,
  forData: FormData
) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/game/beforeGame/${gameId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Moo__${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: forData.get("location"),
        date: forData.get("date"),
        time: {
          start: forData.get("startTime"),
          end: forData.get("endTime"),
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
