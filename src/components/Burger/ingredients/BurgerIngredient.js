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
import BurgerTop from './components/BurgerTop';
import BurgerBottom from './components/BurgerBottom';
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
      case "burgertop":
      ingredient = <BurgerTop/>
      break;
      case "burgerbottom":
      ingredient = <BurgerBottom/>
      break;
    default:
      ingredient = null;
  }
  return <div className={styles.ingredient}>{ingredient}</div>;
};
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default burgerIngredient;
