// Tools
import React from 'react';
import PropTypes from 'prop-types';


// Components
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
  if(loading) {
    return <Spinner />
  } else {
    return (
    <div className='holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
  }

}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users;
