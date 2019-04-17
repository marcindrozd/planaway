import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import routes from 'lib/routes';
import theme from 'lib/theme';
import 'lib/i18n';

import Header from 'components/Header';
import MyRoute from 'components/MyRoute';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Router>
      <Header />

      <Switch>
        {routes.map(route => <MyRoute key={route.title} {...route} />)}
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
