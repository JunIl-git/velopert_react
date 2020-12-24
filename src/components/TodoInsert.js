import React, {useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const Insert = styled.form`
    display : flex;
    background : #495057;
`

const Input = styled.input`
    background : none;
    outline : none;
    border : none;
    padding : 0.5rem;
    font-size: 1.125rem;
    line-height : 1.5;
    color : white;

    &::placeholder {
        color : #dee2e6;
    }
    flex : 1;
`
const Button = styled.button`
    background : none;
    outline : none;
    border : none;
    background: #868e96;
    color : white;
    padding-left : 1rem;
    padding-right : 1rem;
    font-size : 1.5rem;
    display : flex;
    align-items : center;
    cursor : pointer;
    transition : .1s all;
    &:hover{
        background : #adb5db;
    }
`

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('')

    const onChange = useCallback(e => {
        return setValue(e.target.value);
    },[])

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert, value],)
    return (
        <Insert onSubmit={onSubmit}>
            <Input placeholder="할일을 입력하세요" value={value} onChange={onChange}/>
            <Button type="submit" >
                <MdAdd />
            </Button>
        </Insert>
    )
}

export default TodoInsert;