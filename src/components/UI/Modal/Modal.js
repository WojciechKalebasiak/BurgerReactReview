import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import styles from "./Modal.module.css";
import ModalFooter from "./ModalFooter";
import SummaryList from "./summaryList/summaryList";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import Spinner from "../Spinner/Spinner";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.loading !== this.props.loading
    );
  }
  render() {
    return (
      <Aux>
        <Backdrop hide={this.props.hide} show={this.props.show} />
        <div className={styles.Modal}>
          <ModalHeader hide={this.props.hide} />
          {this.props.loading ? (
            <Spinner />
          ) : (
            <SummaryList
              ingredients={this.props.ingredients}
              price={this.props.price}
            />
          )}
          <ModalFooter purchase={this.props.purchase} hide={this.props.hide} />
        </div>
      </Aux>
    );
  }
}
export default Modal;
