import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background : ${props => props.color || 'blue'};
    padding : 1rem;
    display : flex;

    width : 1024px;
    margin : 0 auto;

    @media (max-width : 1024px){
        width : 768px;
    }

    @media (max-width : 768px){
        width : 100%;
    }
`

const Button = styled.button`
    background-color : white;
    color : black;
    border-radius : 4px;
    height : 40px;
    font-weight : bold;
    font-size : 12px;

    &:hover {
        background : rgba(255,255,255,0.9);
    }

    ${props => props.inverted && 
        css`
            background : none;
            border : 2px solid white;
            color : white;

            &: hover {
                background :white;
                color : black;
            }
    `};

    
    & + button {
        margin-left : 1rem;
    }
`;



const StyledComponents = () => {
    return(
        <Box color={"black"}>
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    )    
}

export default StyledComponents;