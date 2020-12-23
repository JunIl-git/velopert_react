import React, {useReducer} from 'react';
import useInputs from './UseInput';


const Info = () =>{

    const [state, onChange] = useInputs({
        name : '',
        nickname : '',
    })

    const {name, nickName} = state;

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