import React from 'react'
import DialogItem from './DIalogItem/DialogItem'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  const dialogsElements = props.dilogsD.map((elelement) => (
    <DialogItem name={elelement.name} id={elelement.id} />
  ))

  const messagesElements = props.messagesD.map((message) => (
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
