// Tools
import React, { useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Spinner from '../layout/Spinner';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams();
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(login);
  }, []);

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/'> Back To Search </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fa-solid fa-check' />
      ) : (
        <i className='fa-solid fa-circle-xmark ' />
      )}
      <div>
        <div>
          <img src={avatar_url} alt='profile image' />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url}>Github Profile</a>
          <ul>
            <li>
              <strong>Username: </strong> {login}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>Followers: {followers}</div>
        <div>Following: {following}</div>
        <div>Public Repos: {public_repos}</div>
        <div>Public Gists: {public_gists}</div>
      </div>
    </Fragment>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
