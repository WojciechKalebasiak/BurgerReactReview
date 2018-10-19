import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
export default function ModalFooter(props) {
  return (
    <div className={styles.ModalFooter}>
    <Button
        clicked={props.hide}
        buttonType="cancelButton"
        style={{marginRight:'5px'}}>
        Cancel
      </Button>
      <Button
        clicked={props.purchase}
        buttonType="confirmButton">
        Confirm
      </Button>
    </div>
  );
}
