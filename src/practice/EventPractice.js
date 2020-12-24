import React, {useState} from 'react';

const EventPractice = () =>{
    const [form, setForm] = useState({
        message : '',
        username : '',
    })

    const {message,username} = form;

    const handleChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        console.log(nextForm);
        setForm(nextForm);
        
    }

    const handleClick = ()=>{
        alert(`${username} : ${message}`)
        setForm({
            message : '',
            username : '',
        })
    }


    const handlePress = e =>{
        if(e.key === 'Enter'){
            handleClick();
        }
    }

   
    return(
        <>
            <input type="text"
                   placeholder="사용자명"
                   name="username"
                   value={username}
                   onChange={handleChange}/>
            <input type="text"
                   placeholder="아무거나 입력하세요"
                   name="message"
                   value={message}
                   onChange={handleChange}
                   onKeyPress={handlePress}
                   />
            <button type="text"
                   name="message"
                   onClick = {handleClick}
                    >확인</button>
        </>
    );
}

export default EventPractice;