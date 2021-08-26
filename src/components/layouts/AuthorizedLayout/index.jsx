import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import Navbar from 'components/Navbar';
import LayoutContent from 'components/LayoutContent';
import Footer from 'components/Footer';

import styles from 'styles/layouts.scss';

const AuthorizedLayout = ({ children }) => {
  const [state, setState] = useState({
    redirecting: false,
    processing: false,
  });

  const onFacebookLogout = () => {
    setState((currentState) => ({
      ...currentState,
      processing: true,
    }));

    window.FB.getLoginStatus(() => {
      setState((currentState) => ({
        ...currentState,
        processing: false,
        redirecting: true,
      }));
      window.FB.logout();
    });
  };

  if (state.redirecting) {
    return <Redirect to="/u/login" />;
  }

  return (
    <div className={styles.layoutWrapper}>
      <Navbar>
        <div className={styles.layoutNavbarItemWrapper}>
          <Link
            to="/app/pagesList"
          >
            <span className={styles.layoutNavbarItem}>Pages list</span>
          </Link>
        </div>
        <div className={styles.layoutNavbarItemWrapper}>
          <button
            className={styles.layoutNavbarItemSignOut}
            onClick={onFacebookLogout}
          >
            Sign Out
          </button>
        </div>
      </Navbar>
      <LayoutContent>
        {children}
      </LayoutContent>
      <Footer />
    </div>
  );
};

export default withRouter(AuthorizedLayout);
