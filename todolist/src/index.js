import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//把Todolist挂载到'root'
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
