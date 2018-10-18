import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import styles from "./Modal.module.css";
import ModalFooter from "./ModalFooter";
import SummaryList from "./summaryList/summaryList";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <Backdrop hide={this.props.hide} show={this.props.show} />
        <div className={styles.Modal}>
          <ModalHeader hide={this.props.hide} />
          <SummaryList
            ingredients={this.props.ingredients}
            price={this.props.price}
          />
          <ModalFooter confirm={this.props.confirm} />
        </div>
      </Aux>
    );
  }
}
export default Modal;
