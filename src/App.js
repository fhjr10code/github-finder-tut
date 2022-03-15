// Tools
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import About from './components/pages/About';

// Components
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import Alert from './components/layout/Alert';
import User from './components/users/User';

// Styles
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState(null);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  // Search for users in github and place them in state
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  // Search for a single Github user and place them in state
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // Search for user's repos and place them in state
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Alert user of an error
  const setAlert = (msg, type) => {
    setAlerts((alerts) => {
      return { ...alerts, msg: msg, type: type };
    });

    setTimeout(() => setAlerts(null), 3000);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar title='Github Finder' icon='fa-brands fa-github' />
        <div>
          <Alert alerts={alerts} />
          <Routes>
            <Route
              path='/'
              element={
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              }
            />
            <Route path='/about' element={<About />} />
            <Route
              path='/users/:login'
              element={
                <User
                  getUser={getUser}
                  user={user}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  loading={loading}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
