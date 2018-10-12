import React from "react";
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
export default props => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};
