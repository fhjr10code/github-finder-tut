// Tools
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams();
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
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
  return <div>{name}</div>;
};

export default User;
