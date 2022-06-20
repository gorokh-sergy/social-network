import react from 'react'
import styles from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Dmitry',
        status: `I'm a boss`,
        location: { country: 'Belarus', city: 'Minsk' },
        followed: true,
        avatarUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
      },
      {
        id: 2,
        fullName: 'Sergey',
        status: `I'm a boss`,
        location: { country: 'Russia', city: 'Moskow' },
        followed: true,
        avatarUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
      },
      {
        id: 3,
        fullName: 'Alekzander',
        status: `I'm a boss`,
        location: { country: 'Ukrain', city: 'Kiev' },
        followed: false,
        avatarUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
      },
    ])
  }

  return (
    <div>
      {props.users.map((usr) => (
        <div key={usr.id}>
          <span>
            <div>
              <img
                src={usr.avatarUrl}
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
              <div>{usr.fullName}</div>
              <div>{usr.status}</div>
            </span>
            <span>
              <div>{usr.location.city}</div>
              <div>{usr.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
