import React, { useEffect, useState } from "react";

import "./App.css";

import { Data } from "./types";

import { AppHeader } from "./components/AppHeader/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";

function App() {
  const [ingredients, setIngredients] = useState<{
    success?: boolean;
    data: Data[];
  }>({
    data: [],
  });

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://norma.nomoreparties.space/api/ingredients"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ingredients");
        }
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIngredients();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {ingredients.data.length ? (
        <section className="page-constructor">
          <BurgerIngredients data={ingredients.data} />
          <BurgerConstructor data={ingredients.data} />
        </section>
      ) : null}
    </div>
  );
}

export default App;
