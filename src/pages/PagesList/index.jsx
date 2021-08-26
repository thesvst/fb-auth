import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PagesNotFound from 'components/PagesNotFound';

import styles from './index.scss';

import messages from './messages';

const PagesList = ({ pages }) => {
  return (
    <div>
      <span><FormattedMessage {...messages.pageTitle} /></span>
      <div className={styles.pagesList}>
        {pages.length ? pages.map((item) => (
          <Link
            key={item.id}
            to={`/app/singlePage/${item.id}`}
          >
            <div
              className={styles.pageTile}
              key={item.id}
            >
              {item.name}
            </div>
          </Link>
        )) : <PagesNotFound />}
      </div>
    </div>
  );
};

export default withRouter(PagesList);
