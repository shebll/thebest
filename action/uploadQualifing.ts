"use server";

export const uploadQualifing = async (
  token: string,
  qualifyingId: string,
  formData: FormData
) => {
  const response = await fetch(
    `https://the-best-football.onrender.com/qualifying/uploadImage/${qualifyingId}`,
    {
      method: "PUT",
      body: formData,
      headers: { Authorization: `Moo__${token}` },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message };
  } else {
    return { success: responseData.success };
  }
};
