import  React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //构造函数里绑定，避免运行时开销

    }

    componentDidMount(){
        axios.get('/api/todolist')
        .then((res)=>{
            console.log(res);
            this.setState(()=>({list:res.data}))
        })
        .catch(()=>{alert('error')});
    }

    render(){
        return(
            <Fragment>
                {/*comment*/}
                <div>
                    <label htmlFor="insertArea">Input:</label>
                    <input 
                        id="insertArea"
                        value={this.state.inputValue}
                        className='input' 
                        onChange={this.handleInputChange}
                        //用组件的this来绑定onChange的this
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return(
                    <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    itemDelete={this.handleItemDelete}
                    />
            )
        })
    }

    handleInputChange(e){
        //setState直接接受函数
        const value = e.target.value;
        this.setState(()=>({ inputValue:value  }))
        //console.log(e.target.value)
        //e是合成事件，打印e，发现有target，打印target，发现就是input这个DOM节点
        //打印他的value就是字符串，而且很有趣qwq

        //this.state.inputValue = e.target.value
        //会出错，this未定义
        //console.log(this)
        //通过bind在JSX中绑定为Todolist
        //不能直接修改state，要用setState接口
        //this.setState({
        //    inputValue : e.target.value
        //})
    }

    handleBtnClick(){
    
        this.setState((prevState) =>({
            list :[...prevState.list,prevState.inputValue],
            inputValue : ''
        }))
    }        
            
            //不添加空项目
            //this.setState({
                // 下方两条语句顺序颠倒无所谓，但是为了理解要这么写，猜测是：
                // **React在该函数的所有语句都完成了才会去更新组件的state**
                // 1/22 update: setState可以接受prevState用来接收上个state
                //list: [...this.state.list,this.state.inputValue],
                //inputValue: ''
            //})
    

    handleItemDelete(index){
        //immutable，不能修改state的内容
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}

        })
    }

}

export default TodoList;