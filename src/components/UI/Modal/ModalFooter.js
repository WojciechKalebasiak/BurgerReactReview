import React from "react";
import styles from "./Modal.module.css";
export default function ModalFooter(props) {
  return (
    <div className={styles.ModalFooter}>
      <button onClick={props.confirm} className={styles.confirmButton}>Confirm</button>
    </div>
  );
}
