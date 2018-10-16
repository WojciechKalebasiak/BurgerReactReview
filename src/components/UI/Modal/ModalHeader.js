import React from 'react'
import styles from './Modal.module.css'
export default function ModalHeader(props) {
  return (
    <div className={styles.ModalHeader}>
      <h2>We almost here!</h2>
      <button className={styles.closeButton} onClick={props.hide}>X</button>
    </div>
  )
}
