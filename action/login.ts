"use server";
export const login = async (formData: FormData) => {
  console.log(formData);
  const response = await fetch(
    "https://the-best-football.onrender.com/user/signInTeam",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: formData.get("code"),
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
