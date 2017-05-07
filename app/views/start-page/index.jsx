import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import './style.scss';
import propTypes from './proptypes';
import logo from '../../assests/images/spencers-logo.png';

export default class StartPage extends Component {

  static propTypes = propTypes;

  render() {
    const title = (
      <div className="title col-sm-2">
        <a href="/" className="appbar-logo">
          <img className="appbar-img" src={logo} alt="Spencers logo" />
        </a>
        SPENCERS
      </div>
    );

    return (
      <div className="view-start-page">
        <AppBar title={title} showMenuIconButton={false} style={{ paddingLeft: 10 }} />
        {this.props.children}
      </div>
    );
  }

}
