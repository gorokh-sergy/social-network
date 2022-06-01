import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={
              <Dialogs
                messagesD={props.state.dialogsPage.messages}
                dilogsD={props.state.dialogsPage.dialogs} />
            } />
          <Route path='/profile'
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} />
            } />
        </Routes>
      </div>
    </div>

  )
}

export default App
