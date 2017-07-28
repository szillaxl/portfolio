import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './Add';
import Todo from './Todo';
import axios from 'axios';

class Todoapp extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
			
			],
			status: "all"
		}
		this.whenClicked = this.whenClicked.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.statusChange = this.statusChange.bind(this);
		this.clearComplete = this.clearComplete.bind(this);
	}
	whenClicked(id) {
		const newTodos = this.state.todos.map((todos) => {
			if (todos.id == id) {
				return { text: todos.text, done: !todos.done, id: todos.id };
			} else {
				return todos;
			}
		})
		this.setState({ todos: newTodos });
	}

 componentWillMount() {
    axios.get('http://localhost:8080/home')
      .then(response => {
        console.log(response.data);
        this.setState({todos: response.data}) 
      })
  }
componentDidUpdate (){
	const newState = this.state.todos;
	axios.post('http://localhost:8080/addtodos', {newState})
        	.then(response => {
          		console.log(response)
        	})
        	.catch(err => {
          	console.log(err)
       		})
}
	addTodo(event,val) {
		event.preventDefault();
		// console.log(val)

		const todo = { text: val, done: false, id: this.state.todos.length + 1 };
		const newState = this.state.todos;
		newState.push(todo);
		this.setState({ todos: newState });
		event.target.addTodo.value = "";
	}
	statusChange(event) {
		event.target.value;
		this.setState({ status: event.target.value });
	}
	clearComplete(event) {
		let notCompleted = this.state.todos.filter(function (todos) {
			if (!todos.done) return todos;
		});
		this.setState({
			todos: notCompleted
		});
	};
	render() {
		const todos = this.state.todos;
		let arrayOfThings = [];
		if (this.state.status === "all") {
			arrayOfThings = todos.map((element) => {
				return <Todo
					text={element.text}
					done={element.done}
					whenClicked={this.whenClicked}
					id={element.id}
				/>
			})
		}
		else if (this.state.status === "complete") {
			arrayOfThings = [];
			for (let i = 0; i < this.state.todos.length; i++) {
				if (this.state.todos[i].done === true) {
					arrayOfThings.push(<Todo
						text={this.state.todos[i].text}
						done={this.state.todos[i].done}
						whenClicked={this.whenClicked}
						id={this.state.todos[i].id} />)
				}
			}
		}
		else if (this.state.status === "active") {
			arrayOfThings = [];
			for (let i = 0; i < this.state.todos.length; i++) {
				if (this.state.todos[i].done === false) {
					arrayOfThings.push(<Todo
						text={this.state.todos[i].text}
						done={this.state.todos[i].done}
						whenClicked={this.whenClicked}
						id={this.state.todos[i].id} />)
				}
			}
		};
		return (
			<div className="container">
				<h1 className="text-center">My To Do Assignment</h1>
				<Add addTodo={this.addTodo} />
				<ul className="list-group">
					{arrayOfThings}
				</ul>
				<select value={this.state.status} onChange={this.statusChange}>
					<option value="all">all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>
				<button className="pull-right btn btn-primary active" onClick={this.clearComplete}>Clear Complete</button>
			</div>
		)
	}
};

export default Todoapp;

