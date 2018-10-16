import React from "react";
import ModalHeader from "./ModalHeader";
import styles from "./Modal.module.css";
import ModalFooter from "./ModalFooter";
import SummaryList from "./summaryList/summaryList";
export default function Modal(props) {
  return (
    <div className={styles.Modal} style={{ opacity: props.show ? 1 : 0 }}>
      <ModalHeader hide={props.hide} />
      <SummaryList ingredients={props.ingredients} />
      <ModalFooter confirm={props.confirm} />
    </div>
  );
}
