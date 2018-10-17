import React from "react";
import ModalHeader from "./ModalHeader";
import styles from "./Modal.module.css";
import ModalFooter from "./ModalFooter";
import SummaryList from "./summaryList/summaryList";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
export default function Modal(props) {
  return (
    <Aux>
      <Backdrop hide={props.hide} show={props.show}/>
      <div className={styles.Modal}>
        <ModalHeader hide={props.hide} />
        <SummaryList ingredients={props.ingredients} price={props.price} />
        <ModalFooter confirm={props.confirm} />
      </div>
    </Aux>
  );
}
