import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginPage from 'pages/Login';

import { setLoader, clearLoader } from 'store/actions/loader';
import { FB_LOGIN_STATUSES } from 'consts/fbLoginStatuses';

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    processing: false,
    redirecting: false,
  });
  const onFacebookLogin = () => {
    window.FB.getLoginStatus((response) => {
      dispatch(setLoader());
      if (response.status !== FB_LOGIN_STATUSES.CONNECTED) {
        window.FB.login((res) => {
          if (res.status === FB_LOGIN_STATUSES.CONNECTED) {
            dispatch(clearLoader());
            setState((currentState) => ({
              ...currentState,
              redirecting: true,
            }));
          }
        });
      } else {
        setState((currentState) => ({
          ...currentState,
          redirecting: true,
        }));
      }
    });
  };

  if (state.redirecting) {
    return <Redirect from="/u/login" to="/app/pagesList" />;
  }

  return (
    <LoginPage onFacebookLogin={onFacebookLogin} />
  );
};

export default withRouter(Login);
