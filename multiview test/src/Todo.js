import React from 'react';


class Todo extends React.Component {
	render() {
		return (
			<li className="list-group-item">
				<input id={this.props.id} type="checkbox" checked={this.props.done} value={this.props.done ? "completed" : "active"} onChange={() => { this.props.whenClicked(this.props.id) }} />
				<label className={this.props.done ? "done" : ""}>{this.props.text}</label>
			</li>
		)
	}
}

export default Todo;