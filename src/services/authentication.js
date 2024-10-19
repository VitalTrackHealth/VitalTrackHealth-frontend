const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const registerProvider = async (providerToRegister) => {
  const {
    firstName: first_name,
    lastName: last_name,
    username,
    password,
    phoneNumber: phone_number,
    email,
  } = providerToRegister;

  try {
    const response = await fetch(`${API_URL}/provider/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        phone_number,
        email,
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

export const registerPatient = async (patientToRegister) => {
  const {
    firstName: first_name,
    lastName: last_name,
    username,
    password,
    phoneNumber: phone_number,
    email,
    conditions,
    bodyMeasurements: body_measurements,
  } = patientToRegister;

  try {
    const response = await fetch(`${API_URL}/patient/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        phone_number,
        email,
        conditions,
        body_measurements,
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
