import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.scss';
import propTypes from './proptypes';

@observer
export default class Login extends Component {

  static propTypes = propTypes;

  render() {
    return (
      <div className="view-login">
        login
      </div>
    );
  }

}
