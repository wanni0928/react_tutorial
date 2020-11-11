import React, { useState } from 'react';

// useState : react에서 사용하는 컴포넌트 상태 관리함수
const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
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