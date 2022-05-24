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
        <Post message='Hi, how are you' />
        <Post message={`It's my first post`} />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts
