import React, {useState, useRef} from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState(
        {
            name: '',
            nickName: ''
        }
    );
    const nameInput = useRef();

    const {name, nickName} = inputs; // 비구조화 할당을 통해 값 추출
    
    const onChange = (e) => {
        const {value, name} = e.target; // 우선 e.target에서 name 과 value를 추출
        setInputs({
            ...inputs, // spread 문법 https://learnjs.vlpt.us/useful/07-spread-and-rest.html
            [name]: value // name 키를 가징 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickName : ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    );
};

export default InputSample;