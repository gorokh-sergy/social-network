let rerenderEntireTree = () => {
  console.log('reRender was not reRenderet')
}

const state = {
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
    ]
  },

}
window.state = state

export const addPost = () => {

  const newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0

  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)

}

export default state