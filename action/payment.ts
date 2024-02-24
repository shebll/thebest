"use server";

export const payment = async (
  formData: FormData,
  teamId: string,
  token: string
) => {
  console.log(formData);
  console.log(teamId);
  const response = await fetch(
    `https://the-best-football.onrender.com/team/upload/${teamId}`,
    {
      method: "POST",
      body: formData,
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
