import React from 'react';
import { withRouter } from 'react-router-dom';

import SinglePageDetails from 'components/SinglePageDetails';
import SinglePageNotFound from 'components/SinglePageNotFound';

const SinglePage = ({
  about, id, name, posts,
}) => {
  return (
    id ? (
      <SinglePageDetails
        about={about}
        id={id}
        name={name}
        posts={posts}
      />
    ) : <SinglePageNotFound />
  );
};

export default withRouter(SinglePage);
