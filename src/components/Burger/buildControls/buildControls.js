import React from "react";
import BuildControl from "./buildcontrol";
import styles from "./buildControls.module.css";
export default props => {
  const controls = ["cheese", "meat", "salat", "bacon", "onion", "tomato"];
  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        {controls.map((control, index) => (
          <BuildControl
            key={index}
            name={control}
            addIngredient={e => props.addIngredient(e.target.name)}
          />
        ))}
      </div>
      <div className={styles.price}>
        <h1>Total price</h1>
        <h2>{props.price} &#x24;</h2>
        <button className={styles.orderButton} disabled={!props.purchaseble} onClick={props.order}>order now</button>
      </div>
    </div>
  );
};
