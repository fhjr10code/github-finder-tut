// Tools
import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user }) {
  const { login, avatar_url, html_url } = user;
  return (
    <div className='each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative'>
      <img className='w-full' src={avatar_url} alt='' />
      <div className='desc p-4 text-gray-800 text-center'>
        <h3 className='title font-bold block py-2'>{login}</h3>
        <button className='px-4 py-2 bg-gray-900 rounded-md text-white text-md focus:border-transparent'>
          <a href={html_url}>More</a>
        </button>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
