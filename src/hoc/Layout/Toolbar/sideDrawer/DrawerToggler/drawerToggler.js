import React from 'react'
import styles from './drawerToggler.module.css'
export default function drawerToggler(props) {
  return (
    <button className={styles.Toggler} onClick={props.toggle}>{props.children}</button>
  )
}
