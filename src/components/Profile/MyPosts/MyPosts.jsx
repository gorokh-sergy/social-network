import React from 'react'
import styles from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message='Hi, how are you' likesCount=' 10' />
        <Post message={`It's my first post`} likesCount=' 42' />
      </div>
    </div>
  )
}

export default MyPosts
