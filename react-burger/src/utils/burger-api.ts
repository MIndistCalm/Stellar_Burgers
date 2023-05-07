import { BURGER_API_URL } from "../constants";

export const getIngredients = async () => {
  const response = await fetch(`${BURGER_API_URL}/ingredients`);
  if (!response.ok) {
    throw new Error("Failed to fetch ingredients");
  }
  const data = await response.json();
  return data;
};
