import { Component } from 'react';
import { observer } from 'mobx-react';

import './style.scss';
import propTypes from './proptypes';
import { ExpensesActions } from '../../actions';

@observer
export default class ExpensesBase extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.expensesActions = new ExpensesActions();
    this.addNewList = this.addNewList.bind(this);
    this.state = {
      addNewList: false,
    };
  }

  componentWillMount() {
    this.expensesActions.getExpenses();
  }

  addNewList() {
    this.setState({ addNewList: true });
  }

  saveNewList(data) {
    this.expensesActions.postExpenses(data);
    this.setState({ addNewList: false });
  }

  cancelSaveAction() {
    this.setState({ addNewList: false });
  }

}
