import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import getFacebookLoginStatus from 'utils/getFacebookLoginStatus';
import { FB_LOGIN_STATUSES } from 'consts/fbLoginStatuses';

const AuthorizedRoutes = ({ children }) => {
  const status = getFacebookLoginStatus();

  return status !== FB_LOGIN_STATUSES.CONNECTED ? (
    <Redirect to={{ pathname: '/u/login' }} />
  ) : children;
};

export default withRouter(AuthorizedRoutes);
