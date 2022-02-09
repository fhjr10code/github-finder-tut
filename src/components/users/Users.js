// Tools
import React, { useState } from 'react';

// Components
import UserItem from './UserItem';

function Users() {
  const [users, setUsers] = useState({
    user: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
    ],
  });

  return (
    <div className='holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {users.user.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
