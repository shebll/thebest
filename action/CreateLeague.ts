"use server";

export const generateLeague = async (
  token: string,
  createLeagueName: string
) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/league/generateLeague`,
    {
      method: "POST",
      headers: {
        Authorization: `Moo__${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: createLeagueName,
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
