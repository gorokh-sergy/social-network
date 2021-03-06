const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: `It's my first post?`, likesCount: 42 },
  ],
  newPostText: 'it-ra-ta-ta',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default: return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export default profileReducer