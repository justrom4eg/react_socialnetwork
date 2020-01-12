import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comppnents/Header/Header'
import Navbar from './comppnents/Navbar/Navbar'
import Profile from './comppnents/Profile/Profile'

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
