import React, { Component } from 'react';
import logo from './logo.svg';
import Blog from './Blog.js';
import NumberList from './NumberList.js';
import Mailbox from './MailBox.js';
import LoginControl from './LoginControl.js';
import Toggle from './Toggle.js';
import Clock from './Clock.js';
import './App.css';
import Form from './Form.js'
import EssayForm from './EssayForm.js'
import FlavorForm from './FlavorForm.js'
import Reservation from './Reservation.js'
import Calculator from './Calculator.js'
let messages = ["react", "vue", "angular"]
let posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

class App extends Component {
    render() {
        return (
          <div className="App container">
             <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="row">
                   <div className="col">Clock:</div>
                   <div className="col">
                      <Clock />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Toggle:</div>
                   <div className="col">
                      <Toggle />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">LoginControl:</div>
                   <div className="col">
                      <LoginControl />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Mailbox:</div>
                   <div className="col">
                      <Mailbox unreadMessages={messages} />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">NumberList:</div>
                   <div className="col">
                      <NumberList numbers={messages} />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Blog:</div>
                   <div className="col">
                      <Blog post={posts}/>
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Form Examples:</div>
                   <div className="col">
                      <Form />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">EssayForm:</div>
                   <div className="col">
                      <EssayForm />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">FlavorForm:</div>
                   <div className="col">
                      <FlavorForm />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Reservation:</div>
                   <div className="col">
                      <Reservation />
                   </div>
                   <div className="w-100"></div>
                   <div className="col">Calculator:</div>
                   <div className="col">
                      <Calculator />
                   </div>
                </div>
             </header>
          </div>
        );
    }
}




export default App;