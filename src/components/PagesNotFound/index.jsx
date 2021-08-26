import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const PagesNotFound = () => {
  return (
    <div>
      <FormattedMessage {...messages.notFound} />
    </div>
  );
};

export default PagesNotFound;
