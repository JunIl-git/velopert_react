import React, {useCallback, useMemo, useState, useRef} from 'react';

const Average = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);
    const inputEl = useRef(null);

    const handleChange = useCallback( e => {
        setNumber(e.target.value);
    },[])

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        console.log(nextList);
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list])

    const getAverage = lists => {
        console.log("평균값 계산")
        if(list.length === 0){return 0;}
        const sum = lists.reduce(( a , b )=> a + b )
        return sum / lists.length;
    }
    const avg = useMemo(()=> getAverage(list),[list])
    return(
        <>
            <input  type={number} value={number} onChange={handleChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>{list.map((value,index)=>{
                return <li key={index}>{value}</li>
            })}</ul>

            <h1>{avg}</h1>
        </>
    )
}

export default Average;