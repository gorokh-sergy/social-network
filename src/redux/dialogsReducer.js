
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:

      state.newMessageBody = action.newMessageBody
      return state

    case SEND_MESSAGE:

      let body = state.newMessageBody

      state.newMessageBody = ''
      state.messages.push({ id: 6, message: body })
      return state

    default: return state
  }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessageBody: text
})
export default dialogsReducer