import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
export default function ModalFooter(props) {
  return (
    <div className={styles.ModalFooter}>
      <Button
        clicked={props.confirm}
        buttonType="confirmButton">
        Confirm
      </Button>
    </div>
  );
}
