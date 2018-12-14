import React, { Component } from 'react';

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

export default LoginControl;