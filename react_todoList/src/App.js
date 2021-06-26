import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './app.css';

class App extends React.Component {
	// state状态提升
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: false },
			{ id: '002', name: '睡觉', done: false },
			{ id: '003', name: '敲代码', done: false },
		]
	};
	todoAdd = (data) => {
		const{todos}=this.state;
		this.setState({
			todos:[data,...todos]
		})
	}
	deleteTodo = (id) => {
		console.log(1);
		const newTodo = [...this.state.todos].filter((item) => {
			return item.id !==id;
		})
		this.setState({
			todos:newTodo
		})

	}
	doneUpdate = (id) => {
		const newTodo=[...this.state.todos].map((item) => {
			 if (item.id === id) {item.done=!item.done};
			return item;
		});

		console.log(newTodo)
		this.setState({
			todos:newTodo
		})


	}
	allChoose = (isChecked) => {
		const newTodo=[...this.state.todos].map((item) => {
			item.done=isChecked;
			return item;
		});
		this.setState({
			todos:newTodo
		})

	}

	deleteAllDidTodo = () => {
		if(!window.confirm('确认删除所有已完成任务吗？'))return;
		const newTodo=[...this.state.todos].filter((item) => {
			return !item.done;
		});
		this.setState({
			todos:newTodo
		})

	}






	render() {
		const { todos } = this.state;
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header todoAdd={this.todoAdd}/>
					<List todos={todos} deleteTodo={this.deleteTodo} doneUpdate={this.doneUpdate}/>
					<Footer todos={todos} allChoose={this.allChoose} deleteAllDidTodo={this.deleteAllDidTodo}/>
				</div>
			</div>
		);
	}
}

export default App;
