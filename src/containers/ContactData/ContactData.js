import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    street: "",
    postalCode: ""
  };
  render() {
    return (
      <div>
        <h4>Enter your Contact Data</h4>
        <form className={styles.ContactData}>
          <input
            type="text"
            name="name"
            className={styles.Input}
            placeholder="Your name"
          />
          <input
            type="text"
            name="email"
            className={styles.Input}
            placeholder="Your email"
          />
          <input
            type="text"
            name="street"
            className={styles.Input}
            placeholder="Street"
          />
          <input
            type="text"
            name="postalCode"
            className={styles.Input}
            placeholder="Your postalCode"
          />
          <Button btnType="confirmButton">Order</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
