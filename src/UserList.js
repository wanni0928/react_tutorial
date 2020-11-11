import React from 'react';

const User = ({user}) => {
    return (
        <li>
            <span>{user.username} : </span> <span>{user.email}</span>
        </li>
    );
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: 'wanni',
            email: 'wanni@gmail.com'
        },
        {
            id: 2,
            username: 'curry',
            email: 'curry@gmail.com'
        },
        {
            id: 3,
            username: 'tester',
            email: 'tester@gmail.com'
        }
    ];
    return (
        <ul>
            {/* <User user={users[0]} />
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </ul>
    );
}

export default UserList;