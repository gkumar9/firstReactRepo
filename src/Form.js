import React, { Component } from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.state={value:''}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(event){
		this.setState({value:event.target.value.toUpperCase()})
	}
	handleSubmit(event){
		alert('A name was Submitted:'+this.state.value)
		event.preventDefault();
	}
	render(){
		return(
				
				<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>
						Name:
						<input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<label><input className="form-control" type="submit" value="Submit" /></label>
				</div>
				</form>
			)
	}

}


export default Form;