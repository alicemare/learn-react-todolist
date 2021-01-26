import React, {Component} from 'react'
import 'antd/dist/antd.css';
import store from './store/index'
import {getAddItemAction, getDelItemAction, getInputChangeAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        //console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
        store.subscribe(this.handleStateChange);
    }
    
    render(){
        return (
        <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDel={this.handleItemDel}
        
        />)
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        //console.log(e.target.value)
    }

    handleStateChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
        
    }
    
    handleItemDel(index){
        const action = getDelItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;