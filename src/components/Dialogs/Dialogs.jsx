import React from 'react'
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>Dimych</div>
        <div className={styles.dialog}>Andreyuch</div>
        <div className={styles.dialog}>Svetych</div>
        <div className={styles.dialog}>Sashych</div>
        <div className={styles.dialog}>Viktorych</div>
        <div className={styles.dialog}>Valerych</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How is your it-kamasutra</div>
        <div className={styles.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
