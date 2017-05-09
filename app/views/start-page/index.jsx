import { observer } from 'mobx-react';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { browserHistory, Link } from 'react-router';

import './style.scss';
import propTypes from './proptypes';
import { Toast } from '../../components';
import { UtilsStore } from '../../stores';
import logo from '../../assests/images/spencers-logo.png';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      browserHistory.push('/expences');
    }
  }

  render() {
    const title = (
      <div className="title col-sm-2">
        <Link to="/" className="appbar-logo">
          <img className="appbar-img" src={logo} alt="Spencers logo" />
        </Link>
        SPENCERS
      </div>
    );
    return (
      <div className="view-start-page">
        <AppBar title={title} showMenuIconButton={false} style={{ paddingLeft: 10 }} />
        {this.props.children}
        <Toast show={UtilsStore.SHOW_TOAST} message={UtilsStore.TOAST_MESSAGE} />
      </div>
    );
  }

}
