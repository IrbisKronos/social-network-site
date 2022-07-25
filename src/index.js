import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) =>{
    root.render(
        <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />
    );}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
