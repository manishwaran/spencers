import { action } from 'mobx';

import ActionUtils from '../utils';
import { ExpencesStore } from '../../stores';
import { ExpensesService } from '../../service';

export default class ExpensesActions {

  constructor() {
    this.expensesService = new ExpensesService();
    this.getExpenses = this.getExpenses.bind(this);
  }

  @action('Update expenses store')
  updateExpenses(expenses) {
    ExpencesStore.EXPENSES = expenses.data || [];
  }

  getExpenses() {
    this.expensesService.getExpenses()
    .then(this.updateExpenses)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateExpenses({});
    });
  }

  deleteExpenses(id) {
    this.expensesService.getExpenses(id)
    .then(this.updateExpenses)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateExpenses({});
    });
  }

  postExpenses(data) {
    this.expensesService.postExpenses(data)
    .then(this.updateExpenses)
    .then(this.getExpenses)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateExpenses({});
    });
  }

}
