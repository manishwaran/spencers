import { action } from 'mobx';

import ActionUtils from '../utils';
import { StatsStore } from '../../stores';
import { StatsService } from '../../service';

export default class StatsActions {

  constructor() {
    this.statsService = new StatsService();
    this.getCategories = this.getCategories.bind(this);
  }

  @action('Update stats')
  updateStats(stats) {
    StatsStore.STATS = stats || [];
  }

  @action('Update stats')
  updateCategories(categories) {
    StatsStore.CATEGORIES = categories || [];
  }

  getCategories() {
    this.statsService.getAllCategory()
    .then((response) => this.updateCategories(response.data))
    .catch((err) => {
      console.log(err);
      // ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateCategories();
    });
  }

}
