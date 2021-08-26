import React from 'react';
import formatDate from 'utils/formatDate';

import { FormattedMessage } from 'react-intl';
import styles from './index.scss';
import messages from './messages';

const SinglePagePost = ({
  createdTime, message, id,
}) => {
  return (
    <div className={styles.postTile}>
      <div className={styles.postDetails}>
        <span className={styles.detailType}><FormattedMessage {...messages.id} /></span>
        <span className={styles.detailValue}>{id}</span>
      </div>
      <div className={styles.postDetails}>
        <span className={styles.detailType}><FormattedMessage {...messages.created} /></span>
        <span>{formatDate(createdTime)}</span>
      </div>
      <div className={styles.postDetails}>
        <span className={styles.detailType}><FormattedMessage {...messages.content} /></span>
        <span className={styles.detailValue}>{message}</span>
      </div>
    </div>
  );
};

export default SinglePagePost;
