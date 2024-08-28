const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const handleUserUpdate = async (userToUpdate) => {
  const {
    firstName: first_name,
    lastName: last_name,
    password,
    phoneNumber: phone_number,
    email,
    conditions,
    bodyMeasurements: body_measurements,
    providerCode: provider_code,
  } = userToUpdate;

  // Don't include fields we aren't updating
  const body = {
    ...(first_name !== undefined && { first_name }),
    ...(last_name !== undefined && { last_name }),
    ...(password !== undefined && { password }),
    ...(phone_number !== undefined && { phone_number }),
    ...(email !== undefined && { email }),
    ...(conditions !== undefined && { conditions }),
    ...(body_measurements !== undefined && { body_measurements }),
    ...(provider_code !== undefined && { provider_code }),
  };

  try {
    const response = await fetch(`${API_URL}/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
