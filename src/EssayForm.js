import React, { Component } from 'react';

class EssayForm extends Component{
	constructor(props){
		super(props)
		this.state={ value: "Please write an essay about your favorite DOM element."}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}

	handleSubmit(event){
		alert('An essay was submitted: '+ this.state.value)
		event.preventDefault();
	}

	render(){
		return(
				<form onSubmit={this.handleSubmit}>
				<div className="form-group">
				<label>
				Essay:
					<textarea className="form-control" value={this.state.value} onChange={this.handleChange} />
				</label>
				<label><input className="form-control" type="submit" value="Submit" /></label>
				</div>
				</form>

			);
	}
}


export default EssayForm;