import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andreyuch' },
    { id: 3, name: 'Svetych' },
    { id: 4, name: 'Sashych' },
    { id: 5, name: 'Viktorych' },
    { id: 6, name: 'Valerych' },
  ]

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ]

  const dialogsElements = dialogsData.map((elelement) => (
    <DialogItem name={elelement.name} id={elelement.id} />
  ))

  const messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
