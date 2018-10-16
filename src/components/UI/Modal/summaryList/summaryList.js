import React from "react";
import styles from "../Modal.module.css";
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
    </div>
  );
}
