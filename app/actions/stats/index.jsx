import { action } from 'mobx';

import ActionUtils from '../utils';
import { StatsStore } from '../../stores';
import { StatsService } from '../../service';

export default class StatsActions {

  constructor() {
    this.statsService = new StatsService();
    this.getCategories = this.getCategories.bind(this);
    this.getDailyStats = this.getDailyStats.bind(this);
    this.getWeeklyStats = this.getWeeklyStats.bind(this);
    this.getMonthlyStats = this.getMonthlyStats.bind(this);
  }

  @action('Update stats')
  updateStats(stats) {
    StatsStore.STATS = stats.data || [];
  }

  @action('Update categories')
  updateCategories(categories) {
    StatsStore.CATEGORIES = categories || [];
  }

  getCategories() {
    this.statsService.getAllCategory()
    .then(response => this.updateCategories(response.data))
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateCategories();
    });
  }

  getDailyStats(category) {
    this.updateStats({});
    this.statsService.getDailyStats(category)
    .then(this.updateStats)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateStats({});
    });
  }

  getMonthlyStats(category) {
    this.updateStats({});
    this.statsService.getMonthlyStats(category)
    .then(this.updateStats)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateStats({});
    });
  }

  getWeeklyStats(category) {
    this.updateStats({});
    this.statsService.getWeeklyStats(category)
    .then(this.updateStats)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateStats({});
    });
  }

}
