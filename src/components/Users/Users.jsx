import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={props.currentPage === page ? styles.selectedPage : ''}
              onClick={(e) => {
                props.onPageChanged(page)
              }}>
              {` ${page} `}
            </span>
          )
        })}
      </div>

      {props.users.map((usr) => (
        <div key={usr.id}>
          <span>
            <div>
              <NavLink to={`/profile/${usr.id}`}>
                <img
                  src={usr.photos.small ? usr.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt='avatar'
                />
              </NavLink>
            </div>

            <div>
              {usr.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(usr.id)
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(usr.id)
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{usr.name}</div>
              <div>{usr.status}</div>
            </span>

            <span>
              <div>{'usr.location.city'}</div>
              <div>{'usr.location.country'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
