import fetch from 'isomorphic-fetch';

import ServiceUtils from '../service-utils';

export default class StatsService extends ServiceUtils {

  getAllCategory() {
    return new Promise((resolve, reject) => {
      fetch('/spencers/categories', {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

  getDailyStats(category) {
    return new Promise((resolve, reject) => {
      fetch(`/spencers/stats/daily?category=${category}`, {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

  getMonthlyStats(category) {
    return new Promise((resolve, reject) => {
      fetch(`/spencers/stats/monthly?category=${category}`, {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

  getWeeklyStats(category) {
    return new Promise((resolve, reject) => {
      fetch(`/spencers/stats/weekly?category=${category}`, {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

}
