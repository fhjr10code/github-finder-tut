// Tools
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';

// Styles
import './index.css';

const App = () => {
  const [users, setUsers] = useState({
    users: [],
    loading: false,
  });

  // useEffect(() => {
  //   setUsers({ loading: true });

  //   const getUsers = async () => {
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setUsers({ users: res.data, loading: false });
  //   };

  //   getUsers();
  // }, []);

  const searchUsers = async (text) => {
    setUsers({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);

    setUsers({ users: res.data.items, loading: false });
  };

  return (
    <div>
      <Navbar title='Github Finder' icon='fa-brands fa-github' />
      <div>
        <Search searchUsers={searchUsers} />
        <Users loading={users.loading} users={users.users} />
      </div>
    </div>
  );
};

export default App;
