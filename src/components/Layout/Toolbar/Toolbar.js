import React from "react";
import Navigation from "../Navigation/NavigationItems";
import burger from "../assets/burger.png";
import styles from "./Toolbar.module.css";
export default function Toolbar() {
  return (
    <header className={styles.Toolbar}>
      <img src={burger} alt="" />
      <div>MENU</div>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}
