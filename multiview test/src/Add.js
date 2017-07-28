import React from 'react';


class Add extends React.Component {
	render() {
		return (
			<form onSubmit={(event) => { this.props.addTodo(event,this.refs.addTodo.value) }}>
				<div className="input-group">
					<span className="input-group-btn">
						<button className="btn btn-primary" type="submit" >Add</button>
					</span>
					<input className="form-control" type="text" placeholder="add a todo" ref="addTodo" name="addTodo" />
				</div>
			</form>
		)
	}
};
export default Add