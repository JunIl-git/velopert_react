import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0,
        };
    }

    render(){
        const {number,fixedNumber} = this.state;

        return(
            <>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={()=>{
                            this.setState({number : number + 1},()=>{console.log("1이 증가하였습니다.")});
                        }}>카운터
                </button>
            </>
        )
    }
}



export default Counter;