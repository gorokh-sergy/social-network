import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andreyuch' },
  { id: 3, name: 'Svetych' },
  { id: 4, name: 'Sashych' },
  { id: 5, name: 'Viktorych' },
  { id: 6, name: 'Valerych' },
]

const messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]

let postsData = [
  { id: 1, message: 'Hi, how are you', likesCount: 12 },
  { id: 2, message: `It's my first post?`, likesCount: 42 },
]

root.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postsD={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
