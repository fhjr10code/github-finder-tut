// Tools
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers }) => {
  const [text, setText] = useState({
    text: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text.text);
    searchUsers(text.text);
    setText({ text: '' });
  };

  const onChange = (e) => {
    setText({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text.text}
          onChange={onChange}
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};

export default Search;
