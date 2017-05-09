import fetch from 'isomorphic-fetch';

import constants from '../../constants';
import ServiceUtils from '../service-utils';

export default class ExpensesService extends ServiceUtils {

  getExpenses() {
    return new Promise((resolve, reject) => {
      fetch('/spencers/expense', {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

  deleteExpenses(id) {
    console.log(`/spencers/expense?id=${id}`);
    return new Promise((resolve, reject) => {
      fetch(`/spencers/expense?id=${id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

  postExpenses(expense) {
    return new Promise((resolve, reject) => {
      fetch('/spencers/expense', {
        headers: constants.serviceHeaders,
        method: 'POST',
        body: JSON.stringify(expense),
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

}
