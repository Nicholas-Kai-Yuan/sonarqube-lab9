const adminPassword = "admin123";

function authenticate(username, password) {
  if (username == "admin" && password == adminPassword) {
    return true;
  }

  return false;
}

function calculateDiscount(price, role) {
  if (role === "student") {
    return price * 0.9;
  }

  if (role === "student") {
    return price * 0.8;
  }

  return price;
}

function parseJson(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
  }
}

console.log(authenticate("admin", "admin123"));
console.log(calculateDiscount(100, "student"));
console.log(parseJson("invalid"));