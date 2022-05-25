import React from 'react'
import styles from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message='Hi, how are you' likesCount=' 10' />
        <Post message={`It's my first post`} likesCount=' 42' />
      </div>
    </div>
  )
}

export default MyPosts
