"use server";

export const getGroup = async (token: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/group/getMyGroup`,
    {
      method: "GET",
      headers: { Authorization: `Moo__${token}` },
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
