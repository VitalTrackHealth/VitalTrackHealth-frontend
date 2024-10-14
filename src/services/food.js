const API_BASE_URL = "http://127.0.0.1:8000";

export async function searchFood(ingredient, brand = "") {
  const dummyFood = [
    {
      time: "08:00",
      name: "Oatmeal",
      macros: {
        calories: 200,
        protein: 10,
        carbs: 20,
        fat: 5,
      },
      weight: 250,
      icon: "food-variant",
    },
    {
      time: "12:30",
      name: "Chicken Salad",
      macros: {
        calories: 250,
        protein: 21,
        carbs: 10,
        fat: 14,
      },
      weight: 414,
      icon: "food-variant",
    },
    {
      time: "16:00",
      name: "Apple",
      macros: {
        calories: 104,
        protein: 1,
        carbs: 25,
        fat: 0,
      },
      weight: 216,
      icon: "food-apple",
    },
    {
      time: "19:00",
      name: "Salmon",
      macros: {
        calories: 379,
        protein: 61,
        carbs: 0,
        fat: 19,
      },
      weight: 248,
      icon: "food-steak",
    },
  ];
  return dummyFood;

  try {
    console.log("Fetching food data for query:", ingredient);

    const url = new URL(`${API_BASE_URL}/food/search`);
    const params = { ingredient };

    if (brand) {
      params.brand = brand;
    }

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during API call:", error);
    return null;
  }
}

export async function getFoodNutrients(ingr) {
  try {
    const url = new URL("http://192.168.1.24:5000/api/food_search");
    const params = { ingr };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text(); // Use text() to get the response as a string
    console.log(data);
    return data; // Return the string data
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
