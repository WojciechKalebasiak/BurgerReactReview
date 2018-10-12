import React from "react";
import BurgerIngredient from "./ingredients/BurgerIngredient";
import styles from "./Burger.module.css";

export default props => {
  const ingredients = props.ingredients;
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="burgertop" />
      {ingredients.map((ingredient, index) => (
        <BurgerIngredient type={ingredient.type} key={index} />
      ))}
      <BurgerIngredient type="burgerbottom" />
    </div>
  );
};
