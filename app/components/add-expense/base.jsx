import { Component } from 'react';


import './style.scss';
import ActionUtils from '../../actions/utils';
import PropTypes from './proptypes';

export default class AddExpense extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.saveNewList = this.saveNewList.bind(this);
    this.updateAddEpense = this.updateAddEpense.bind(this);
    this.state = {
      addNewList: false,
    };
    this.expense = {};
  }

  saveNewList() {
    if (this.validateExpense(this.expense)) {
      this.props.saveNewList(this.expense);
    }
  }

  updateAddEpense(data, field, type) {
    let value = null;
    switch (type) {
      case 'number': value = Number(data) || null; break;
      case 'date': value = new Date(data).toISOString(); break;
      default: value = data;
    }
    this.expense[field] = value;
  }

  validateExpense(expense) {
    const requiredField = ['amount', 'category', 'date', 'title'];
    for (let index = 0; index < requiredField.length; index += 1) {
      if (expense[requiredField[index]] === undefined) {
        ActionUtils.setToastMessage(false, false, `Field ${requiredField[index]} can not be empty.`);
        return false;
      }
    }
    if (!expense.amount) {
      ActionUtils.setToastMessage(false, false, 'Amount can not be 0 or string');
      return false;
    }
    return true;
  }

}
