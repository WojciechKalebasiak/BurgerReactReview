import React from "react";
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";
export default props => {
  return (
    <Aux>
      <Toolbar />
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};
