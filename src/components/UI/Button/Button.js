import React from "react";
import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      onClick={props.clicked}
      style={props.style}
      className={styles[props.buttonType]}>
      {props.children}
    </button>
  );
}
