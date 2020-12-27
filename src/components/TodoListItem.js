import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import styled, {css} from 'styled-components';

const ListItem = styled.div`
    padding: 1rem;
    display : flex;
    align-items : center;
    &:nth-child(even){
        background : #f8f9fa;
    }
    border-top : 1px solid #dee2e6;
`
const CheckBox = styled.div`
    cursor : pointer;
    flex : 1;
    display : flex;
    align-items : center;

    ${props =>{
        return props.checked && css`
            svg {   //아이콘
            font-size : 1.5rem;
            
        }
        & div {
            color : #adb5db;
            text-decoration : line-through;
        }
        `   
    }}
        
`
const Remove = styled.div`
    display :flex;
    align-items : center;
    font-size : 1.5rem;
    color : #ff6b6b;
    cursor: pointer;
    &:hover {
        color : #ff8787;
    }
`

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {text, checked, id} = todo;
    return (
        <ListItem>
            <CheckBox checked={checked} onClick={()=>{onToggle(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div>{text}</div>
            </CheckBox>
            <Remove onClick={()=>onRemove(id)} >
                <MdRemoveCircleOutline/>
            </Remove>
        </ListItem>
    )
}

export default React.memo(TodoListItem);