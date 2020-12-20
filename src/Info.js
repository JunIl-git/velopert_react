import React, {useReducer} from 'react';

function reducer(state,action){
    return {
        ...state,
        [action.name] : action.value
    }
}

const Info = () =>{

    const [state, dispatch] = useReducer(reducer,{
        name : '',
        nickName : '',
    })

    const {name, nickName} = state;

    const onChange = e => {
        dispatch(e.target);
    }
    return(
        <>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickName" value={nickName} onChange={onChange}/>
            <h1>{name}</h1>
            <h1>{nickName}</h1>
        </>
    )
}

export default Info;