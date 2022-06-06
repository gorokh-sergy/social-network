import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)

  }
}



window.store = store

export default store