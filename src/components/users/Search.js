// Tools
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something.', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	const onChange = e => {
		setText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' />
			</form>
			{showClear && <button onClick={clearUsers}>Clear</button>}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
