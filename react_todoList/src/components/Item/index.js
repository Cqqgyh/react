import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
	state={
		mouse:false
	}


	mouseHandler = (flag) => {
		this.setState({
			mouse:flag
		})
	}
	delehandle = (id) => {
		// 所有删除的位置一定要用户确认
		if (window.confirm('确认删除吗？')) {
			this.props.deleteTodo(id);
		}

	}
	doneUpdateHandler = (id) => {
		this.props.doneUpdate(id)
	}

	render() {
		const { id, name, done } = this.props;
		return (
			<li onMouseEnter={() =>this.mouseHandler(true)} onMouseLeave={() =>this.mouseHandler(false)}
			style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}}>
				<label>
					{/*
					checkbox设置checked会报警告信息，告诉你如果设置checked需要配合onChange事件
					可以尝试设置defaultChecked，但是defaultChecked只能设置默认值，它不会关心checkbox改变以后的数据
					*/}
					<input type='checkbox' checked={done} onChange={() => this.doneUpdateHandler(id)}/>
					<span>{name}</span>
				</label>
				<button className='btn btn-danger' style={{ display:this.state.mouse?'block': 'none' }}
				onClick={() =>this.delehandle(id)}>
					删除
				</button>
			</li>
		);
	}
}
