import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Loader from 'components/Loader';
import styles from 'styles/layouts.scss';

const LayoutContent = ({ children, centeredContent }) => {
  const isLoading = useSelector((state) => state.loader);

  return (
    <div className={classNames(styles.layoutContent, centeredContent && styles.centeredContent)}>
      { isLoading && <Loader /> }
      {children}
    </div>
  );
};
export default LayoutContent;
