import React from 'react';

const LoginStatus = (props) => {
  return <h1>{props.isLoggedIn ? 'Welcome back!' : 'Please log in'}</h1>;
}

export default LoginStatus;