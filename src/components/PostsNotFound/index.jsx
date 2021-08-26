import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const PostsNotFound = () => {
  return (
    <div>
      <FormattedMessage {...messages.notFound} />
    </div>
  );
};

export default PostsNotFound;
