import React, { Component } from 'react';

import Modal from '../modal';
import PropTypes from './proptypes';

export default class AddExpense extends Component {

  static propTypes = PropTypes;

  render() {
    return (
      <div className="component-add-expense">
        <Modal />
      </div>
    );
  }

}
