import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          className={styles.imgg}
          src='https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg'
          alt='alt'
        />
      </div>
      <div className={styles.descritionBlock}>
        <img src={props.profile.photos.large} alt='alt' />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
