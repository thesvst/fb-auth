import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthorizedLayout from 'components/layouts/AuthorizedLayout';
import PagesList from 'containers/PagesList';
import SinglePage from 'containers/SinglePage';
import Login from 'containers/Login';
import UnauthorizedLayout from 'components/layouts/UnauthorizedLayout';
import NotFound from 'pages/NotFound';
import UnauthorizedRoutes from 'misc/UnauthorizedRoutes';
import AuthorizedRoutes from 'misc/AuthorizedRoutes';
import messages from '../messages/pl.json';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <IntlProvider
    locale={process.env.DEFAULT_LOCALE}
    defaultLocale={process.env.DEFAULT_LOCALE}
    messages={messages}
  >
    <Switch>
      <Route
        path="/app"
        render={({ match: { url } }) => (
          <AuthorizedRoutes>
            <AuthorizedLayout>
              <Switch>
                <Route path={`${url}/pagesList`} render={() => <PagesList />} />
                <Route path={`${url}/singlePage/:id`} render={() => <SinglePage />} />
              </Switch>
              <Redirect to="/app/pagesList" />
            </AuthorizedLayout>
          </AuthorizedRoutes>
        )}
      />
      <Route
        path="/u"
        render={({ match: { url } }) => (
          <UnauthorizedRoutes>
            <UnauthorizedLayout>
              <Switch>
                <Route path={`${url}/login`} render={() => <Login />} />
              </Switch>
            </UnauthorizedLayout>
          </UnauthorizedRoutes>
        )}
      />
      <Route path="/404">
        <NotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  </IntlProvider>
);

export default App;
