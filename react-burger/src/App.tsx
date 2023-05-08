import React, { useEffect, useState } from "react";

import "./App.css";

import { Data } from "./types";

import { AppHeader } from "./components/AppHeader/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
import { BURGER_API_URL } from "./constants";
import { getIngredients } from "./utils/burger-api";

function App() {
  const [ingredients, setIngredients] = useState<{
    success?: boolean;
    data: Data[];
  }>({
    data: [],
  });

  useEffect(() => {
    try {
      getIngredients().then((data) => setIngredients(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <AppHeader />
      {ingredients.data.length ? (
        <section className="page-constructor">
          <BurgerIngredients data={ingredients.data} />
          <BurgerConstructor data={ingredients.data} />
        </section>
      ) : null}
    </>
  );
}

export default App;
