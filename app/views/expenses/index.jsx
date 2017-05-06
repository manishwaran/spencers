import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';
import { ExpensesActions } from '../../actions';
import { ExpencesStore } from '../../stores';

@observer
export default class Expenses extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.expensesActions = new ExpensesActions();
  }

  componentWillMount() {
    this.expensesActions.getExpenses();
  }

  render() {
    return (
      <div className="view-component">
        expences
      </div>
    );
  }

}
