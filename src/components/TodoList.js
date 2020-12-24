import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const List = styled.div`
    min-height : 320px;
    max-height : 513px;
    overflow-y : auto;
`

const TodoList = ({todos}) => {
    return (
        <List>
            {todos.map(todo=>{
                return <TodoListItem todo={todo} key={todo.id}/>
            })}
        </List>
    )
}

export default TodoList;