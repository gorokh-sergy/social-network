import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src='https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg'
          alt='alt'
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
