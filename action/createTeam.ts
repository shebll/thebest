"use server";

export const createTeam = async (formData: FormData) => {
  console.log(formData);
  const filteredFormData = new FormData();
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size > 0) {
        filteredFormData.append(key, value);
      }
    } else {
      filteredFormData.append(key, value);
    }
  }
  console.log(filteredFormData);
  const response = await fetch(
    "https://the-best-football.onrender.com/team/create",
    { method: "POST", body: filteredFormData }
  );
  const responseData = await response.json();
  console.log(responseData);
  if (responseData.success === false) {
    return { error: responseData.message };
  } else {
    return { success: responseData.message, data: responseData };
  }
};
