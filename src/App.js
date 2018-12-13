import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Greeting extends Component{
  render(){


  if(this.props.isLoggedIn){
    return <span> Welcome User </span>
  }else{
    return <span> Welcome Guest </span>
  }
}
}
class LoginButton extends Component{
  render(){
    return(
        <button type="button" className="btn btn-success" onClick={this.props.onClick}>Login </button>
      )
  }
}

class LogoutButton extends Component{
  render(){
    return(
      <button type="button" className="btn btn-danger" onClick={this.props.onClick} >Logout</button>
      )
  }
}

class LoginControl extends Component{
  constructor(){
    super()
    this.state={isLoggedIn:false}
    this.handleLogin=this.handleLogin.bind(this)
  }

  handleLogin(){
    console.log('handleLogin')
    this.setState(state=>({
      isLoggedIn:!state.isLoggedIn
    }))
  }

  render(){
    let button;
    if(this.state.isLoggedIn){
      button=<LogoutButton onClick={this.handleLogin} />; 
    }
    else{
      button=<LoginButton onClick={this.handleLogin} />;
    }

    return(
      <div>
      <span>LoginControl : </span>
      <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {button}
      </div>
      )
  }
}
class Toggle extends Component{
  constructor(){
    super()
    this.state={isToggleOn:true}
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    console.log('handleClick')
    this.setState(state=>({
      isToggleOn:!state.isToggleOn
    }))
    
  }

  render(){
    return(
      <div>
      <span>Toggle : </span>
      <button type="button" className="btn btn-primary" onClick={this.handleClick}>
      {this.state.isToggleOn ? "ON":"OFF"}
      </button>
      </div>
      )
  }

}

class Clock extends Component{
  constructor(){
      super();
            
      this.state={date:new Date()}
    }

  componentDidMount(){
    this.timer=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <span>Clock :</span>
        <span> {this.state.date.toLocaleTimeString()}.</span>
      </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <Toggle />
          <LoginControl />
        </header>
      </div>
    );
  }
}



  
export default App;
