import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// useState : react에서 사용하는 컴포넌트 상태 관리함수
const Counter = () => {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    };
    
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    };

    return (
       <div>
           <h1>
                {number}
           </h1>
           <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
       </div> 
    );
};

export default Counter;