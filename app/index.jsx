import mobx from 'mobx';
import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Login, Expenses, Stats, StartPage } from './views';

mobx.useStrict(true);
injectTapEventPlugin();
render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={StartPage}>
        <Route path="login" component={Login} />
        <Route path="expences" component={Expenses} />
        <Route path="stats" component={Stats} />
        <IndexRoute component={Expenses} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('spencers-app'));
