"use server";

export const createTeam = async (formData: FormData) => {
  console.log(formData);

  const response = await fetch(
    "https://the-best-football.onrender.com/team/create",
    { method: "POST", body: formData }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message };
  } else {
    return { success: responseData.message, data: responseData };
  }
};
