import React from 'react';
import './ValidationSample.css';

class ValidationSample extends React.Component{
    state = {
        password : '',
        clicked : false,
        validated : false,
    }

    input = React.createRef();

    handleChange = e => {
        this.setState({
            password : e.target.value
        })
    }

    handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000',
        })
        this.input.current.focus();
    }

    onKeyPress = e =>{
        if(e.key === 'Enter'){
            this.handleButtonClick();
        }
    }
    

    render(){
        return(
            <>
                <input type="password"
                       value={this.state.password}
                       onChange={this.handleChange}
                       className={this.state.clicked ? 
                        (this.state.validated ? 'success' : 'failure') : ''}
                       onKeyPress={this.onKeyPress}
                       ref={this.input}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </>
        )
    }
}
export default ValidationSample;