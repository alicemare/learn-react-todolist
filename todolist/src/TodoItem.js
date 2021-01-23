import React,{Component} from 'react';
import PropTypes from 'prop-types';

//<li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>

class TodoItem extends Component{

    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    render(){
        console.log('child rendering');
        const {content} = this.props;
        return <li onClick={this.handleClick}>{content}</li>
    }

    shouldComponentUpdate(nextProps, nextStates){
        if(nextProps.content !== this.props.content)
            return true;
        else
        //父组件的inputValue更新时，子组件不需要重新渲染
            return false;
    }
    
    handleClick(){
        const {itemDelete,index} = this.props;
        itemDelete(index);
    }
}

TodoItem.propTypes = {
    content : PropTypes.string,
    itemDelete : PropTypes.func,
    index : PropTypes.number
}

export default TodoItem