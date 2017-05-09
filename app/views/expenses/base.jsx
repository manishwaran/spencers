import React, { Component } from 'react';
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
    this.saveNewList = this.saveNewList.bind(this);
    this.cancelSaveAction = this.cancelSaveAction.bind(this);
    this.state = {
      addNewList: false,
    };
  }

  componentWillMount() {
    this.expensesActions.getExpenses();
  }

  getTableHeader() {
    const _this = this;
    return [
      { accessor: '_id',
        render: data => (
          <div
            className="delete-row"
            onClick={() => this.expensesActions.deleteExpenses(data.value)}
          >
            x
          </div>
        ),
        maxWidth: 30,
      },
      { header: 'Title', accessor: 'title' },
      { header: 'Amount', accessor: 'amount' },
      { header: 'Category',
        accessor: 'category',
        render: data => ((data.value && data.value.join(' ')) || 'NA'),
      },
      { header: 'On',
        accessor: 'date',
        render: data => (((data.value && data.value.slice(0, 10)) || 'NA')),
      },
      { header: 'Notes',
        accessor: 'notes',
        render: data => ((data.value) || 'NA'),
      },
    ];
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
