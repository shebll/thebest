"use server";

export const getCurrentLeague = async (token: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/league/getCurrentLeague`,
    {
      method: "GET",
      headers: { Authorization: `Moo__${token}` },
      next: { tags: ["currentLeague"] },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message, data: responseData };
  } else {
    return { success: responseData.message, data: responseData };
  }
};
