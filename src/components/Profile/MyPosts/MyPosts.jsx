import React, { createRef } from 'react'
import store from '../../../redux/reduxStore'
import styles from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = (props) => {
  const posts = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ))

  const newPostElement = createRef()
  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
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
