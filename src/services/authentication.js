const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (userToRegister) => {
  const {
    firstName: first_name,
    lastName: last_name,
    password,
    phoneNumber: phone_number,
    email,
    providerCode: provider_code,
  } = userToRegister;

  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        password,
        phone_number,
        email,
        provider_code,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}. Message: ${errorText}`
      );
    }

    const results = await response.json();
    return { success: true, results };
  } catch (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }
};

export const loginUser = async (email, password) => {
  const formData = new FormData();
  formData.append("username", email);
  formData.append("password", password);

  try {
    const response = await fetch(`${API_URL}/token`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}. Message: ${errorText}`
      );
    }

    const results = await response.json();
    return { success: true, results };
  } catch (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }
};
