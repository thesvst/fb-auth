import React from 'react';

import styles from 'styles/layouts.scss';

const Loader = () => {
  return (
    <div className={styles.layoutContentLoader}><span className={styles.spinner} /></div>
  );
};

export default Loader;
