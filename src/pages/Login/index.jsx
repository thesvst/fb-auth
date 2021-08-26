import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './index.scss';
import messages from './messages';

const Login = ({ onFacebookLogin }) => {
  return (
    <button
      className={styles.loginButton}
      onClick={onFacebookLogin}
    >
      <FormattedMessage {...messages.fbButton} />
    </button>
  );
};

export default Login;
