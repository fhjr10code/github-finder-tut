// Tools
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

// Styles
import './index.css';

function App() {
  const [users, setUsers] = useState({
    users: [],
    loading: false,
  });

  useEffect(() => {
    setUsers({ loading: true });

    const getUsers = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUsers({ users: res.data, loading: false });
    };

    getUsers();
  }, []);

  return (
    <div>
      <Navbar title='Github Finder' icon='fa-brands fa-github' />
      <div>
        <Users loading={users.loading} users={users.users} />
      </div>
    </div>
  );
}

export default App;
