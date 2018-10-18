import React from "react";
import Navigation from "../Navigation/NavigationItems";
import burger from "../assets/burger.png";
import menu from "../assets/menu.png";
import styles from "./Toolbar.module.css";
import DrawerToggler from './sideDrawer/DrawerToggler/drawerToggler'

export default function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <img src={burger} alt="logo" />
        <DrawerToggler toggle={props.toggleSideDrawer}> 
          <img src={menu} alt="menu"/>
        </DrawerToggler>
        <nav>
          <Navigation />
        </nav>
    </header>
  );
}
