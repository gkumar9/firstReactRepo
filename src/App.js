import React, { Component } from 'react';
import logo from './logo.svg';
import Blog from './Blog.js';
import NumberList from './NumberList.js';
import Mailbox from './MailBox.js';
import LoginControl from './LoginControl.js';
import Toggle from './Toggle.js';
import Clock from './Clock.js';
import './App.css';

let messages=["react","vue","angular"]
let posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <Toggle />
          <LoginControl />
          <Mailbox unreadMessages={messages} />
          <NumberList numbers={messages} />
          <Blog post={posts}/>
        </header>
      </div>
    );
  }
}



  
export default App;
