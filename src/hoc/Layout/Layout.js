import React from "react";
import Aux from "../../hoc/Auxiliary.js";
import styles from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./Toolbar/sideDrawer/sideDrawer.js";
export default props => {
  return (
    <Aux>
      <Toolbar
        toggleSideDrawer={props.toggleSideDrawer}
      />
        <SideDrawer hide={props.toggleSideDrawer} showSideDrawer={props.showSideDrawer} />
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};
