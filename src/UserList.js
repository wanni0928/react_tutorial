import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(
    function User({user}){
         const dispatch = useContext(UserDispatch);

         return (
            <li
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
              }}
              onClick={() => {
                dispatch({ type: 'TOGGLE_USER', id: user.id });
              }}
              >
                <span onClick={() => {
                     dispatch({type: 'TOGGLE_USER', id: user.id});
                 }}>
                     {user.username}
                </span> :  &nbsp; 
                <span>{user.email}</span>
                <button onClick={() => {
                    dispatch({ type: 'REMOVE_USER', id: user.id });
                    }}>삭제</button>
            </li>
         );
    }
);

const UserList = ({users, onRemove, onToggle}) => {
    
    return (
        <ul>
            {/* <User user={users[0]} />
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </ul>
    );
}

export default React.memo(UserList);