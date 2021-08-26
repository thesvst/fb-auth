import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/app/pagesList" />;
  }
  setTimeout(() => {
    setRedirect(true);
  }, 3000);

  return (
    <div>
      <FormattedMessage {...messages.notFound} />
    </div>
  );
};

export default withRouter(NotFound);
