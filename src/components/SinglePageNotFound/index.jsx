import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from '../PostsNotFound/messages';

const SinglePageNotFound = () => {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => {
    setRedirect(true);
  }, 3000);

  if (redirect) {
    return <Redirect to="/app/pagesList" />;
  }

  return <div><FormattedMessage {...messages.notFound} /></div>;
};

export default SinglePageNotFound;
