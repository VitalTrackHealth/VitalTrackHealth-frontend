export async function handleFood_search(ingr, brand) {
  try {
    const url = new URL("http://192.168.1.24:5000/api/food_search");
    const params = { ingr, brand };
    console.log(params);
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

    const data = await response.json(); // Use text() to get the response as a string

    return data; // Return the string data
  } catch (error) {
    console.error("Error:", error);
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
