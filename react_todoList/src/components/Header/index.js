import React, {Component} from 'react';
import './index.css';
import {nanoid} from 'nanoid';

export default class Header extends Component {

    todoAdd = (e) => {
        if (e.keyCode !== 13) return;
        if (!e.target.value.trim()) return;
        console.log(e.target.value.trim());
        const newTodo = {id: nanoid(), name: e.target.value.trim(), done: false};
        this.props.todoAdd(newTodo);
        e.target.value='';

    }

    render() {
        return (
            <div className='todo-header'>
                <input type='text' onKeyUp={this.todoAdd} placeholder='请输入你的任务名称，按回车键确认'/>
            </div>
        );
    }
}
