import React from 'react';

import styles from 'styles/layouts.scss';

const Navbar = ({ children }) => (
  <div className={styles.layoutNavbar}>
    <div className={styles.layoutNavbarInnerWrapper}>
      {children}
    </div>
  </div>
);

export default Navbar;
