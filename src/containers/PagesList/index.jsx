import React, { useEffect, useState } from 'react';
import PagesListPage from 'pages/PagesList';
import { FB_LOGIN_STATUSES } from 'consts/fbLoginStatuses';

const PagesList = () => {
  const [state, setState] = useState({
    pages: [],
  });

  useEffect(() => {
    window.FB.getLoginStatus((response) => {
      if (response.status === FB_LOGIN_STATUSES.CONNECTED) {
        window.FB.api(
          '/me/accounts',
          (accountsResponse) => {
            if (accountsResponse) {
              setState((currentState) => ({
                ...currentState,
                pages: accountsResponse.data,
              }));
            }
          },
        );
      }
    });
  }, []);
  return (
    <PagesListPage pages={state.pages} />
  );
};

export default PagesList;
