import React from 'react';

class EventPractice extends React.Component{
    state ={
        message : '',
        username : ''
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        
        return(
            <>
                <input type="text"
                       placeholder="사용자명"
                       name="username"
                      
                       onChange={this.handleChange}/>
                <input type="text"
                       placeholder="아무거나 입력하세요"
                       name="message"
                       value={this.state.message}
                       onChange={this.handleChange}/>
                <button type="text"
                       name="message"
                       
                       onClick = {()=>{
                           alert(`${this.state.username} : ${this.state.message}`)
                       }}
                        >확인</button>
            </>
        );
    }
}

export default EventPractice;