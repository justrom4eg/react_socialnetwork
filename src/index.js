import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: "1", message: "How are you", like:"23"},
    {id: "2", message: "My first message", like:"47"}
];

let dialogs = [
    {name: "Dimon", id: "1"},
    {name: "Romu4", id: "2"},
    {name: "Nazar", id: "3"},
    {name: "Nastya", id: "4"},
    {name: "Ira", id: "5"}
];

let messages = [
    {id: "1", text: "How are you"},
    {id: "2", text: "How is your it-kamasutra?"},
    {id: "3", text: "I like it"},
    {id: "4", text: "Me too!!!!"},
    {id: "5", text: "Have a nice day!)"},
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
