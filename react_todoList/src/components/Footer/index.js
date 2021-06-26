import React, { Component } from 'react';
import './index.css';


export default class Footer extends Component {
	didTodoNum = () => {
		const didTodo=[...this.props.todos];
		return didTodo.reduce((pre,curr) =>pre+(curr.done?1:0),0)

	}
	allChoose = (e) => {
		this.props.allChoose(e.target.checked);

	}
	isChecked = () => {
		const didTodo=[...this.props.todos];
		return didTodo.reduce((pre,curr) =>pre+(curr.done?1:0),0)===didTodo.length&&didTodo.length>0
	}

	render() {
		const {todos}=this.props;
		return (
			<div className='todo-footer'>
				<label>
					<input type='checkbox'  checked={this.isChecked()} onChange={this.allChoose}/>
				</label>
				<span>
					<span>已完成{this.didTodoNum()}</span> / 全部{todos.length}
				</span>
				<button className='btn btn-danger' onClick={this.props.deleteAllDidTodo}>清除已完成任务</button>
			</div>
		);
	}
}
