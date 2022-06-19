import React from 'react'
import DialogItem from './DIalogItem/DialogItem'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map((elelement) => (
    <DialogItem key={elelement.id} name={elelement.name} id={elelement.id} />
  ))
  const messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ))
  const newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  }
  const onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>

      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='enret your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
