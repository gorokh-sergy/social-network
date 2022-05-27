import React from 'react'
import styles from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: `It's my first post?`, likesCount: 42 },
  ]

  const posts = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))
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
      <div className={styles.posts}>{posts}</div>
    </div>
  )
}

export default MyPosts
