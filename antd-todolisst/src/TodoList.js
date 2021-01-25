import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/index'



class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        //console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStateChange);
    }
    
    render(){
        return (
        
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
        <div>
            <Input 
                value={this.state.inputValue} 
                placeholder='todo info' 
                style={{width:'300px',marginRight:'10px' }} 
                onChange={this.handleInputChange}
            />
            <Button 
                type="primary"
                onClick={this.handleBtnClick}
            
            >submit</Button>
        </div>
        <List
            style={{marginTop:'10px',width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item =>(
                <List.Item>{item}</List.Item>
            )}
        
        />

        </div>)
    }

    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        //console.log(e.target.value)
    }

    handleStateChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = {
            type: 'add_todo_item',

        }
        store.dispatch(action);
        this.setState()
    }
}

export default TodoList;