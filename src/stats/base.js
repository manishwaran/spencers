/* eslint-disable max-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import template from './template';
import config from '../../config/default';
import MongoDatabase from '../utils/mongo-database';

export default class StatsBase {

  constructor() {
    this.db = new MongoDatabase();
    this.getDailyStats = this.getDailyStats.bind(this);
    this.getWeeklyStats = this.getWeeklyStats.bind(this);
    this.getMonthlyStats = this.getMonthlyStats.bind(this);
    this.getDistintCategory = this.getDistintCategory.bind(this);
    this.aggregateCollections = this.aggregateCollections.bind(this);
    this.performWeeklyAggregation = this.performWeeklyAggregation.bind(this);
    this.collectionName = config.expenseCollectionName;
  }

  getMonthlyStatsParams(category) {
    const aggregateParams = _.clone(template);
    aggregateParams.matchResult.$match.category = category;
    aggregateParams.group.$group._id.month = '$month';
    aggregateParams.sortGroup.$sort['_id.month'] = 1;
    return aggregateParams;
  }

  getDailyStatsParams(category) {
    const aggregateParams = this.getMonthlyStatsParams(category);
    aggregateParams.project.$project.day = {
      $substr: ['$date', 8, 2],
    };
    aggregateParams.group.$group._id.day = '$day';
    aggregateParams.sortGroup.$sort['_id.month'] = 1;
    return aggregateParams;
  }

  aggregateCollections(aggregateParams) {
    return this.db.getConnection()
    .then(db => db.collection(this.collectionName).aggregate(
      aggregateParams.project,
      aggregateParams.unwind,
      aggregateParams.matchResult,
      aggregateParams.group,
      aggregateParams.sortGroup
    ))
    .then(data => data.toArray())
    .catch(err => err);
  }

  formatAggregatedStats(aggregatedStats) {
    const mapper = ['month', 'day'];
    return aggregatedStats.map((stat) => {
      let time = stat._id.year;
      mapper.forEach((item) => {
        if (stat._id[item]) {
          time += `-${stat._id[item]}`;
        }
      });
      return { time, total: stat.total };
    });
  }

  mapWithWeek(data) {
    return data.map((item) => {
      item.week = parseInt(Number(item.day) / 7, 10) + 1;
      return item;
    });
  }

  formatWeeklyStats(result) {
    const keys = Object.keys(result);
    return keys.map((key) => {
      const obj = result[key];
      const time = `${obj.year}-${obj.month}-week(${obj.week})`;
      return { time, total: obj.total };
    });
  }

  performWeeklyAggregation(data, keys = ['week', 'month', 'year']) {
    const dataArray = this.mapWithWeek(data);
    const result = {};
    dataArray.forEach((item) => {
      let groupKey = '';
      keys.forEach((key) => {
        groupKey += item[key];
      });
      if (!result[groupKey]) {
        result[groupKey] = {};
        keys.forEach((key) => {
          result[groupKey][key] = item[key];
        });
        result[groupKey].total = item.amount;
      } else {
        result[groupKey].total += item.amount;
      }
    });
    return this.formatWeeklyStats(result);
  }

}
