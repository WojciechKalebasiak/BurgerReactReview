import React from "react";
import styles from "./summaryList.module.css";
import SummaryListItem from "./summaryListItem";

export default function summaryList(props) {
  return (
    <div className={styles.summaryList}>
      <h3>You ordered burger with:</h3>
      <ul>
        {props.ingredients.map(ing => (
          <SummaryListItem item={ing} key={ing.key} />
        ))}
      </ul>
      <h2>
        Total Price:
        <span> {props.price}&#36;</span>
      </h2>
    </div>
  );
}
