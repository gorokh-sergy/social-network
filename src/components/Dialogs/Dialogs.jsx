import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name='Dimych' id='1' />
        <DialogItem name='Andreyuch' id='2' />
        <DialogItem name='Svetych' id='3' />
        <DialogItem name='Sashych' id='4' />
        <DialogItem name='Viktorych' id='5' />
        <DialogItem name='Valerych' id='6' />
      </div>
      <div className={styles.messages}>
        <Message message='Hi' />
        <Message message='How is your it-kamasutra' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
        <Message message='Yo' />
      </div>
    </div>
  )
}

export default Dialogs
