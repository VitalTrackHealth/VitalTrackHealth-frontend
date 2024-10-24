const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function searchFood(ingredient, brand = "") {
  try {
    const url = new URL(`${API_URL}/food/search`);
    const params = { ingredient };

    if (brand) {
      params.brand = brand;
    }

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url);

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

export async function getFoodNutrients(foodId, quantity) {
  try {
    const params = { ingredients: [{ food_id: foodId, quantity }] };

    const response = await fetch(`${API_URL}/food/nutrients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors", // WHY????
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
