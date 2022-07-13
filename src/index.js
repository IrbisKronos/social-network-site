import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id:0, massage:"Hi, how are you?", likesCount:3},
    {id:1, massage:"It's my first post", likesCount:7},
    {id:1, massage:"It's my second post", likesCount:5},
    {id:1, massage:"boom", likesCount:2},
    {id:1, massage:"aaaaaaaa", likesCount:0},
]

let dialogsData = [
    {id: 0, name: "Niko"},
    {id: 1, name: "Kira"},
    {id: 2, name: "Stefan"},
    {id: 3, name: "Kristof"},
    {id: 4, name: "Mary"},
    {id: 5, name: "Josephine"},
]

let messagesData = [
    {id: 0, massage: "Hello, world"},
    {id: 1, massage: "Hi"},
    {id: 2, massage: "More details"},
    {id: 3, massage: "More details"},
    {id: 4, massage: "More details"},
    {id: 5, massage: "More details"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App
            postData={postData}
            dialogsData={dialogsData}
            messagesData={messagesData}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
