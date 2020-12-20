import React, {useState} from 'react';

const Average = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);

    const handleChange = e => {
        setNumber(e.target.value);
    }

    const handleClick = () => {
        const nextList = list.concat(parseInt(number));
        console.log(nextList);
        setList(nextList);
        setNumber('');
    }

    const getAverage = lists => {
        if(list.length === 0){return 0;}
        const sum = lists.reduce(( a , b )=> a + b )
        return sum / lists.length;
    }
    return(
        <>
            <input value={number} onChange={handleChange}/>
            <button onClick={handleClick}></button>
            <ul>{list.map((value,index)=>{
                return <li key={index}>{value}</li>
            })}</ul>

            <h1>{getAverage(list)}</h1>
        </>
    )
}

export default Average;