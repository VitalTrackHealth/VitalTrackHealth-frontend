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

export async function addFoodItem(foodItem, token) {
  try {
    const params = {
      foods: [
        {
          food_id: foodItem.foodId,
          food_name: foodItem.foodName,
          details: {
            calories: foodItem.calories,
            protein: foodItem.protein,
            carbohydrates: foodItem.carbohydrates,
            fat: foodItem.fat,
            serving_size: foodItem.servingSize,
          },
        },
      ],
    };

    const response = await fetch(`${API_URL}/patient/add-food`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
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
}

export const fetchFoodItems = async (token) => {
  try {
    const response = await fetch(`${API_URL}/patient/food-log`, {
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
