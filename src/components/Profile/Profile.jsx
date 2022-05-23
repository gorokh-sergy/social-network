import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src='https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg'
          alt='alt'
        />
      </div>
      <div>ava + description</div>
      <div>my posts</div>
      <div>new post</div>
      <div className={styles.posts}>
        <div className={styles.item}>post 1</div>
        <div className={styles.item}>post 2</div>
      </div>
    </div>
  )
}

export default Profile
