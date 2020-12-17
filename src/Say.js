import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const onClickEnter = () =>{ setMessage("안녕하세요!")};
    const onClickLeave = () => {setMessage("안녕히가세요!")};

    const onClickChangeRed = () => {setColor('red')};
    const onClickChangeGreen = () => {setColor('Green')};
    const onClickChangeBlue = () => {setColor('Blue')};
    return(
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color : color}}>{message}</h1>
            <button onClick={onClickChangeRed}>레드</button>
            <button onClick={onClickChangeGreen}>그린</button>
            <button onClick={onClickChangeBlue}>블루</button>
        </>
    )
}

export default Say;
