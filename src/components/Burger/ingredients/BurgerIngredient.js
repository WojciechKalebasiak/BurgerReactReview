import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredient.module.css";
import Cheese from "./components/Cheese";
import Bacon from "./components/Bacon";
import Meat from "./components/Meat";
import Pepper from "./components/Pepper";
import Onion from "./components/Onion";
import Tomato from "./components/Tomato";
import Salat from "./components/Salat";
const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "cheese":
      ingredient = <Cheese />;
      break;
    case "bacon":
      ingredient = <Bacon />;
      break;
    case "meat":
      ingredient = <Meat />;
      break;

    case "pepper":
      ingredient = <Pepper />;
      break;

    case "onion":
      ingredient = <Onion />;
      break;
    case "salat":
      ingredient = <Salat />;
      break;
    case "tomato":
      ingredient = <Tomato />;
      break;
    default:
      ingredient = null;
  }
  return (
    <div className={styles.ingredient} onClick={props.delete}>
      {ingredient}
      <p className={styles.delete}>Click to delete</p>
    </div>
  );
};
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default burgerIngredient;
