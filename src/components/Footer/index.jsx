import React from 'react';
import styles from 'styles/layouts.scss';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Footer = () => (
  <div className={styles.layoutFooter}>
    <FormattedMessage
      {...messages.copyrights}
    />
  </div>
);

export default Footer;
