import React from "react";
import bacon from "./bacon.png";
import cheese from "./cheese.png";
import onion from "./onion.png";
import salat from "./salad.png";
import pepper from "./pepper.png";
import meat from "./steak.png";
import tomato from "./tomato.png";
import styles from "../../Modal/Modal.module.css";
export default function Icon(props) {
  const { type } = props;
  let icon;
  switch (type) {
    case "onion":
      icon = <img src={onion} className={styles.IngIcon} alt="onion" />;
      break;
    case "bacon":
      icon = <img src={bacon} className={styles.IngIcon} alt="bacon" />;
      break;

    case "cheese":
      icon = <img src={cheese} className={styles.IngIcon} alt="cheese" />;
      break;

    case "tomato":
      icon = <img src={tomato} className={styles.IngIcon} alt="tomato" />;
      break;

    case "salat":
      icon = <img src={salat} className={styles.IngIcon} alt="salat" />;
      break;

    case "pepper":
      icon = <img src={pepper} className={styles.IngIcon} alt="pepper" />;
      break;

    case "meat":
      icon = <img src={meat} className={styles.IngIcon} alt="meat" />;
      break;
    default:
      icon = null;
  }
  return icon;
}
