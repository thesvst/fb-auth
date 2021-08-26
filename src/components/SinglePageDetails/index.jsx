import React from 'react';
import { FormattedMessage } from 'react-intl';
import SinglePagePost from 'components/SinglePagePost';
import PostsNotFound from 'components/PostsNotFound';

import styles from './index.scss';
import messages from './messages';

const SinglePageDetails = ({
  name, posts, id,
}) => {
  return (
    <>
      <div className={styles.pageDetails}>
        <span className={styles.detailType}>
          <FormattedMessage {...messages.pageId} />
        </span>
        <span className={styles.detailValue}>
          {id || <FormattedMessage {...messages.error} />}
        </span>
      </div>
      <div className={styles.pageDetails}>
        <span className={styles.detailType}>
          <FormattedMessage {...messages.pageName} />
        </span>
        <span className={styles.detailValue}>
          {name || <FormattedMessage {...messages.error} />}
        </span>
      </div>
      <div className={styles.pagePosts}>
        <div className={styles.postsHeading}>
          <FormattedMessage {...messages.posts} />
        </div>
        {posts.length ? (
          posts.map(({
            created_time: createdTime, message, id: postId,
          }) => (
            <SinglePagePost
              key={postId}
              createdTime={createdTime}
              message={message}
              id={postId}
            />
          ))
        ) : <PostsNotFound />}
      </div>
    </>
  );
};

export default SinglePageDetails;
