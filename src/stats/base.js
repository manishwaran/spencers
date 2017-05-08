/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import template from './template';
import config from '../../config/default';
import MongoDatabase from '../utils/mongo-database';

export default class StatsBase {

  constructor() {
    this.db = new MongoDatabase();
    this.getDailyStats = this.getDailyStats.bind(this);
    this.getMonthlyStats = this.getMonthlyStats.bind(this);
    this.getDistintCategory = this.getDistintCategory.bind(this);
    this.aggregateCollections = this.aggregateCollections.bind(this);
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
    const mapper = ['month', 'week', 'day'];
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

}
