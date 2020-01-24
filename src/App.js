import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comppnents/Header/Header';
import Navbar from './comppnents/Navbar/Navbar';
import Profile from './comppnents/Profile/Profile';
import News from "./comppnents/News/News";
import Music from "./comppnents/Music/Music";
import Settings from "./comppnents/Settings/Settings";
import Messages from "./comppnents/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/messages" render={() => <Messages messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
