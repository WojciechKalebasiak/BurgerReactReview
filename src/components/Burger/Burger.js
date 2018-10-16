import React from "react";
import BurgerIngredient from "./ingredients/BurgerIngredient";
import styles from "./Burger.module.css";
import BurgerTop from "../Burger/ingredients/components/BurgerTop";
import BurgerBottom from "./ingredients/components/BurgerBottom";
export default props => {
  const ingredients = props.ingredients;
  const burgerIngredients = ingredients.length
    ? ingredients.map((ingredient, index) => (
        <BurgerIngredient type={ingredient.type} delete={()=>props.delete(index)} key={index} />
      ))
    : null;
  return (
    <div className={styles.burger}>
      <div className={styles.bun}>
        <BurgerTop />
      </div>
      <BurgerIngredient type="burgertop" />
      {burgerIngredients}
      <div className={styles.bun}>
        <BurgerBottom />
      </div>
      {burgerIngredients ? null : <h1>Add some ingredients!</h1>}
      {burgerIngredients ? <h4 className={styles.deleteTip}>Click on ingredient to delete its</h4> : null}
    </div>
  );
};
