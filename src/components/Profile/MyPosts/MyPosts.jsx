import React, { createRef } from 'react'
import styles from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = (props) => {
  const posts = props.pD.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  const newPostElement = createRef()

  const addPost = () => {
    const text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{posts}</div>
    </div>
  )
}

export default MyPosts
