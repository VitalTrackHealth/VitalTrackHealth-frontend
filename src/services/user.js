const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const updateUser = async (userToUpdate) => {
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

export const getPatient = async (token) => {
  try {
    const response = await fetch(`${API_URL}/patient/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export const getProvider = async (token) => {
  try {
    const response = await fetch(`${API_URL}/provider/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export const getProviderPatients = async (token) => {
  try {
    const response = await fetch(`${API_URL}/provider/patients`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export const fetchPatientFoodEntries = async (patientEmail) => {
  return [
    {
      id: 1,
      date: "2024-10-15",
      foodItem: "Grilled Chicken Breast",
      calories: 165,
      protein: 31,
      fat: 3.6,
      carbs: 0,
    },
    {
      id: 2,
      date: "2024-10-15",
      foodItem: "Brown Rice",
      calories: 216,
      protein: 5,
      fat: 1.8,
      carbs: 45,
    },
    {
      id: 3,
      date: "2024-10-15",
      foodItem: "Steamed Broccoli",
      calories: 55,
      protein: 4,
      fat: 0.6,
      carbs: 11,
    },
    {
      id: 4,
      date: "2024-10-15",
      foodItem: "Salmon Fillet",
      calories: 206,
      protein: 22,
      fat: 13,
      carbs: 0,
    },
    {
      id: 5,
      date: "2024-10-15",
      foodItem: "Sweet Potato",
      calories: 180,
      protein: 2,
      fat: 0.1,
      carbs: 41,
    },
    {
      id: 6,
      date: "2024-10-15",
      foodItem: "Mixed Salad",
      calories: 36,
      protein: 1.8,
      fat: 0.4,
      carbs: 7,
    },
    {
      id: 7,
      date: "2024-10-15",
      foodItem: "Greek Yogurt",
      calories: 100,
      protein: 18,
      fat: 0.7,
      carbs: 6,
    },
    {
      id: 8,
      date: "2024-10-15",
      foodItem: "Banana",
      calories: 105,
      protein: 1.3,
      fat: 0.4,
      carbs: 27,
    },
    {
      id: 9,
      date: "2024-10-15",
      foodItem: "Almonds",
      calories: 164,
      protein: 6,
      fat: 14,
      carbs: 6,
    },
    {
      id: 10,
      date: "2024-10-15",
      foodItem: "Whole Wheat Bread",
      calories: 69,
      protein: 3.6,
      fat: 0.9,
      carbs: 12,
    },
  ];
};
