"use server";

export const createQualifying = async (token: string) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/qualifying/generate`,
    {
      method: "POST",
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
