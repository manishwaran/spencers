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

  getDailyStats() {
    return new Promise((resolve, reject) => {
      fetch('/spencers/stats/day', {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

}
