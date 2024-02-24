"use server";

export const getAllTeams = async (token: string, currentPage: number) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/team/getAll?page=${currentPage}`,
    {
      method: "GET",
      headers: { Authorization: `Moo__${token}` },
      next: { tags: ["allTeams"] },
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
