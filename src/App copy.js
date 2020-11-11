import React, { useRef, useState, useMemo, useCallback } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import './App.css'
// import CreateUser from './CreateUser';
import UserList from './UserList';
import CreateUser from './CreateUser';

const countActiveUsers = (users) => {
  console.log('활성 사용자 수를 세는 중.');
  return users.filter(user => user.active).length;
};

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
      {
          id: 1,
          username: 'wanni',
          email: 'wanni@gmail.com',
          active:true
      },
      {
          id: 2,
          username: 'curry',
          email: 'curry@gmail.com',
          active:false
      },
      {
          id: 3,
          username: 'tester',
          email: 'tester@gmail.com',
          active:false
      }
  ]
}

const App = () => {
  const name = 'react';
  const style = {
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    padding: '1rem'
  }

  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬.
    // = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users = {users} onRemove={onRemove} onToggle={onToggle}/>
  <div>활성 사용자 수 : {count}</div>
    </Wrapper>
  );
}

export default App;
