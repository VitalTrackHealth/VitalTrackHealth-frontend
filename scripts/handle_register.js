export function handleRegister(name, password, phoneNumber, email) {
  fetch("http://192.168.1.37:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: name,
      password: password,
      phoneNumber: phoneNumber,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle response data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function handleLogin(email, password) {
  return fetch("http://192.168.1.37:5000/api/login", {
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
export async function handleFood_search(ingr, brand) {
  try {
    const url = new URL("http://192.168.1.37:5000/api/food_search");
    const params = { ingr, brand };
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
