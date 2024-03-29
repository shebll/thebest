"use server";

import { revalidateTag } from "next/cache";

export const updateMember = async (
  formData: FormData,
  userId: string,
  token: string
) => {
  console.log(formData);
  const response = await fetch(
    `https://the-best-football.onrender.com/user/update/${userId}`,
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
    revalidateTag("team");
    return { success: responseData.message, data: responseData };
  }
};
