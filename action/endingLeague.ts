"use server";

import { revalidateTag } from "next/cache";

export const endingLeague = async (token: string, leagueId: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/league/endingLeague/${leagueId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Moo__${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message };
  } else {
    revalidateTag("currentLeague");
    return { success: responseData.message, data: responseData };
  }
};
