import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src='http://ja-dyadya.narod.ru/FLV/3-BOGATYRJA/bogatyri.gif'
        alt='alt'
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
