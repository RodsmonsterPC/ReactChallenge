export const loginAccount = async (email, password) => {
  const response = await fetch("http://localhost:8080/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
};
