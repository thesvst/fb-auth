import React from 'react';
import { FormattedMessage } from 'react-intl';

import Navbar from 'components/Navbar';
import LayoutContent from 'components/LayoutContent';
import Footer from 'components/Footer';

import styles from 'styles/layouts.scss';
import messages from './messages';

const UnauthorizedLayout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar>
        <div className={styles.layoutNavbarItemWrapper}>
          <span><FormattedMessage {...messages.loginToSee} /></span>
        </div>
      </Navbar>
      <LayoutContent
        centeredContent
      >
        {children}
      </LayoutContent>
      <Footer />
    </div>
  );
};

export default UnauthorizedLayout;
