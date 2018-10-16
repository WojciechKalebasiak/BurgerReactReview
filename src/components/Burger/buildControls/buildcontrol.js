import React from "react";
import styles from "./buildControl.module.css";
export default props => {
  const {name} = props;
  return (
      <button
        className={`${styles.control} ${styles[name]}`}
        name={props.name}
        onClick={props.addIngredient}>
        {props.name}
      </button>
  );
};
