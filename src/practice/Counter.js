import React, {useReducer}from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT' :
            return { value : state.value + 1};
        case 'DECREMENT' : 
            return { value : state.value - 1};
        default :
            return state;
    }
}

const Counter = () => {
    const [state, disfetch] = useReducer(reducer, { value : 0})

    return(
        <>
            <button onClick ={()=>{disfetch({type :'INCREMENT'})}}>+1</button>
            <button onClick = {()=>{disfetch({type : 'DECREMENT'})}}>-1</button>
            <h1>{state.value}</h1>
        </>
    )
}
 



export default Counter;