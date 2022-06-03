const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
  _state: {
    profilePage: {

      posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: `It's my first post?`, likesCount: 42 },
      ],

      newPostText: 'it-ra-ta-ta'
    },
    dialogsPage: {

      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andreyuch' },
        { id: 3, name: 'Svetych' },
        { id: 4, name: 'Sashych' },
        { id: 5, name: 'Viktorych' },
        { id: 6, name: 'Valerych' },
      ],

      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],

      newMessageBody: ''
    },
    sidebar: {

    }
  },
  _callSubscriber() {
    console.log('reRender was not reRendered')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.newMessageBody
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({ id: 6, message: body })

      this._callSubscriber(this._state)
    }
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => {

  return {

    type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text
  }
}

window.store = store

export default store