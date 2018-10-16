import React from 'react'
import styles from './Modal.module.css'
import Button from '../Button/Button';
export default function ModalHeader(props) {
  return (
    <div className={styles.ModalHeader}>
      <h2>We almost here!</h2>
      <Button buttonType="closeModalButton" clicked={props.hide}>X</Button>
    </div>
  )
}
