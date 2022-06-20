import * as axios from 'axios'
import react from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers([...response.data.items])
      })
  }

  return (
    <div>
      {props.users.map((usr) => (
        <div key={usr.id}>
          <span>
            <div>
              <img
                src={usr.photos.small ? usr.photos.small : userPhoto}
                className={styles.userPhoto}
                alt='avatar'
              />
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
