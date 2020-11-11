import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css'
import UserList from './UserList';

const App = () => {

  const name = 'react';
  const style = {
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    padding: '1rem'
  }

  return (
      <Wrapper>
        {/*주석은 화면에 안보인다.*/}
        /*중괄호로 감싸지 않으면 클라이언트단에 출력된다.*/
        <Hello name="react" color="red" isSpecial={true}
          // 열리는 태그 내부에서는 일허게 주석을 작성 할 수 있다.
        />
        <Hello />
        <Hello />
        <div style={style}>{name}</div>
        <div className='gray-box'></div>
        <Counter />
        <InputSample />
        <UserList />
      </Wrapper>
  );
}

export default App;
