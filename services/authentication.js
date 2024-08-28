const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const handleRegister = async (userToRegister) => {
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
    console.error("error:", error);
    return { success: false, error: error.message };
  }
};

export function handleLogin(email, password) {
  return fetch("http://192.168.1.24:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: email,
      password: password,
      phoneNumber: "1234567890",
      email: email,
    }),
  })
    .then((response) => response.text()) // Use text() instead of json()
    .then((data) => {
      console.log(data);
      return data; // Return the string data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
