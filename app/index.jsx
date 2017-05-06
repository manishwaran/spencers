import mobx from 'mobx';
import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Login } from './view';

mobx.useStrict(true);
injectTapEventPlugin();
render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('spencers-app'));
