import React from "react";
import styles from "./NavigationItem.module.css";
import classnames from "classnames";
const NavigationItem = props => (
  <li className={styles.NavigationItem}>
    <a
      href={props.link}
      className={classnames({
        [styles.active]: props.active
      })}>
      {props.children}
    </a>
  </li>
);
export default NavigationItem;
