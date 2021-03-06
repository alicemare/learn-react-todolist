import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM} from './actionTypes'

const defaultState = {
    inputValue : '123',
    list: [
        'I love u ',
        'u bad bad',
        'I like like'
    ]
}
//reducer 可以接受state，但是不能修改state
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        //简易的深拷贝实现
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        //console.log(newState)
        return newState;
    }
    if(action.type === DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
        
    

    //console.log(state,action);
    //state 整个仓库存储数据
    return state;
}