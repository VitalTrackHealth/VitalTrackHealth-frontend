const API_BASE_URL = 'http://127.0.0.1:8000';

export async function handleFood_search(ingredient, brand = '') {
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

export async function handleFood_request_nutrients(ingr) {
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
