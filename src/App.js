// Tools
import React, { useState } from 'react';
import axios from 'axios';

// Components
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import Alert from './components/layout/Alert';

// Styles
import './index.css';

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alerts, setAlerts] = useState(null);

	// Search for users in github and place them in state
	const searchUsers = async text => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setUsers(res.data.items);
		setLoading(false);
	};

	// Clear users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	// Alert user of an error
	const setAlert = (msg, type) => {
		setAlerts(alerts => {
			return { ...alerts, msg: msg, type: type };
		});

		setTimeout(() => setAlerts(null), 3000);
	};

	return (
		<div>
			<Navbar title='Github Finder' icon='fa-brands fa-github' />
			<div>
				<Alert alerts={alerts} />
				<Search
					searchUsers={searchUsers}
					clearUsers={clearUsers}
					showClear={users.length > 0 ? true : false}
					setAlert={setAlert}
				/>
				<Users loading={loading} users={users} />
			</div>
		</div>
	);
};

export default App;
