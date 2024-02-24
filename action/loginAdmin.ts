"use server";
export const loginAdmin = async (formData: FormData) => {
  console.log(formData);
  const response = await fetch(
    "https://the-best-football.onrender.com/user/signInAdmin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
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
