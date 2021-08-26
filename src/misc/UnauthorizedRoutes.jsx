import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import getFacebookLoginStatus from 'utils/getFacebookLoginStatus';
import { FB_LOGIN_STATUSES } from 'consts/fbLoginStatuses';

const UnauthorizedRoutes = ({ children }) => {
  const status = getFacebookLoginStatus();

  return status !== FB_LOGIN_STATUSES.CONNECTED ? children : (
    <Redirect to={{ pathname: '/app/pagesList' }} />
  );
};

export default withRouter(UnauthorizedRoutes);
