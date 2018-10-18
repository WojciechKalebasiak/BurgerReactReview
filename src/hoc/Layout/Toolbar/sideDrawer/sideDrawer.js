import React from "react";
import classnames from 'classnames';
import logo from "../../assets/burger.png";
import NavigationItems from "../../Navigation/NavigationItems";
import styles from "./sideDrawer.module.css";
import Backdrop from '../../../../components/UI/Backdrop/Backdrop'
import Aux from "../../../../hoc/Auxiliary";
export default function sideDrawer(props) {
  return (
    <Aux>
      <Backdrop hide={props.hide} show={props.showSideDrawer}/>
      <div className={classnames([styles.sideDrawer], {
        [styles.Open]:props.showSideDrawer,
        [styles.Close]:!props.showSideDrawer
      })}>
        <img src={logo} alt="" className={styles.Logo} />
        <NavigationItems />
      </div>
    </Aux>
  );
}
