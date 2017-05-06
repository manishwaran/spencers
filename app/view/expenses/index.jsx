import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';

@observer
export default class Expenses extends Component {

  static propTypes = propTypes;

  render() {
    return (
      <div className="view-component">
        expences
      </div>
    );
  }

}
