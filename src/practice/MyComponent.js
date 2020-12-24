import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component{
    

    render(){
        const {name} = this.props;
        return (
            <>
                <div>
                    안녕하세요, 저의 이름은 {name}입니다.
                </div>
            </>
        )
    }
}

MyComponent.propTypes = {
    name : PropTypes.string.isRequired
}

MyComponent.defaultProps = {
    name : "기본 이름",
}

export default MyComponent;