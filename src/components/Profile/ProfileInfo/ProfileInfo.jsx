import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.imgg}
          src='https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg'
          alt='alt'
        />
      </div>
      <div className={styles.descritionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
