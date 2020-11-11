import React from 'react';

const Hello = ({color, name, isSpecial}) => {
// return <div style={{color : props.color}}>hi {props.name}</div>
    return (
        <div style={{color}}>
            {/* {isSpecial ? <b>*</b> : null} */}
            {isSpecial && <b>*</b>} 
            {/* 단축 평가 논리 계산법. https://learnjs.vlpt.us/useful/03-short-circuiting.html */}
            hi {name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'noName',
    color: 'yellow'
}

export default Hello;