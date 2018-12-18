import React, { Component } from 'react';

class FancyBorder extends Component{
	render(){
		return(
			<div className={'FancyBorder FancyBorder-'+this.props.color}>
			{this.props.children}
			</div>
			);
	}
}

class Dialog extends Component{
	render(){
		return(
				<FancyBorder color="blue">
					<h1 className="Dialog-title">
						{this.props.title}
					</h1>
					<p className="Dialog-message">
						{this.props.message}
					</p>
					{this.props.children}
				</FancyBorder>
			);
	}
}


class SignUpDialog extends Component{
	constructor(props){
		super(props)
		this.state={login:''}
		this.handleSignUp=this.handleSignUp.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}

	handleChange(e){
		this.setState({
			login:e.target.value
		})
	}

	handleSignUp(e){
		alert(`Welcome abord,${this.state.login}!`);
	}

	render(){
		return(
				<Dialog title="Mars Exploration Program" message="How should we refer to you ?">
				<div className="form-group">
				<label>
					<input className="form-control" value={this.state.login} onChange={this.handleChange} />
				</label>
				<label>
					<button className="form-control" onClick={this.handleSignUp}> Sign Me Up! </button>
				</label>
				</div>
				</Dialog>
			);
	}
}


export default SignUpDialog;