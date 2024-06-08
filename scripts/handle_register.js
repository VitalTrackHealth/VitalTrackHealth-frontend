export function handleRegister(name, password, phoneNumber, email) {
  fetch("http://192.168.1.220:5000/api/register", {
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
  return fetch("http://192.168.1.220:5000/api/login", {
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
