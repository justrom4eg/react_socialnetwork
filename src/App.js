import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comppnents/Header/Header';
import Navbar from './comppnents/Navbar/Navbar';
import Profile from './comppnents/Profile/Profile'
import Messages from "./comppnents/Messages/Messages";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
          <Messages/>
      </div>
      {/*<Profile />*/}
    </div>
  );
}

export default App;
