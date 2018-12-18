import React, { Component } from 'react';

class ToDoHeader extends Component{
	constructor(props){
		super(props)
		this.handleChangeSearch=this.handleChangeSearch.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChangeSearch(e){
		this.props.onSearchChange(e.target.value)
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.onSubmit()
	}
	render(){
		return(
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
					<label>
					<input className="form-control "type="text" value={this.props.item} onChange={this.handleChangeSearch} />
					</label>
					<label>
					<input type="submit" value="Submit" className="form-control" />
					</label>
					</div>
				</form>
			)
	}
}

class ToDoBody extends Component{
	constructor(props){
		super(props)
		this.handleDelete=this.handleDelete.bind(this)
	}
	handleDelete(e,index){
		e.preventDefault();
		this.props.onDelete(index)
	}
	render(){
		
		let listing=this.props.list.map((item,index)=><div key={index}><li className="list-group-item d-flex justify-content-between align-items-center">{item}<button onClick={(e) =>this.handleDelete(e,index)} ><i className="fa fa-check" aria-hidden="true"></i></button></li></div>)
		return(
				<div>
				 {
					listing.length>0 &&
					
						<div>
						<p>TODO List:</p>
						<ul className="list-group">{listing}</ul>
						</div>
					
				}
				</div>
			)
	}
}

class ToDo extends Component{

	constructor(props){
		super(props)
		this.state={list:['ki'],item:''}
		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleSearchChange=this.handleSearchChange.bind(this)
		this.handleDelete=this.handleDelete.bind(this)
	}
	handleSubmit(){
		if(this.state.item!==''){
			let check=this.state.list.filter((temp)=>{return temp===this.state.item})
			if(check.length===0){
			this.setState({list:[...this.state.list,this.state.item],item:''})
			}else{
				alert('Element already exist')
				this.setState({item:''})
			}	
		}else{
			alert('Empty String Found!!')
		}
		
	}
	handleDelete(index){
		let temp=this.state.list.filter((item,indexlist)=>{
			if(indexlist!==index){
			return item;
			} 
		});
		this.setState({list:temp})
	}

	handleSearchChange(value){
		this.setState({item:value})
	}

	render(){
		
		return(
				<div >
					<ToDoHeader onSubmit={this.handleSubmit} item={this.state.item} onSearchChange={this.handleSearchChange} />
					<ol className="list-group"><ToDoBody  list={this.state.list} onDelete={this.handleDelete}/></ol>
				</div>

			)
	}
}

export default ToDo;