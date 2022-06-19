import React from 'react'
import { connect } from 'react-redux'
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body))
  },

  sendMessage: () => {
    dispatch(sendMessageCreator())
  },
})
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
