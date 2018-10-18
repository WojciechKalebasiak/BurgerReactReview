import React from "react";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem.js/NavigationItem";
export default function NavigationItems() {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Other Path</NavigationItem>
    </ul>
  );
}
