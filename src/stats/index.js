/* eslint-disable no-underscore-dangle */

import _ from 'lodash';
import template from './template';
import config from '../../config/default';
import MongoDatabase from '../utils/mongo-database';

export default class Stats {

  constructor() {
    this.db = new MongoDatabase();
    this.getDailyStats = this.getDailyStats.bind(this);
    this.getMonthlyStats = this.getMonthlyStats.bind(this);
    this.getDistintCategory = this.getDistintCategory.bind(this);
    this.aggregateCollections = this.aggregateCollections.bind(this);
    this.collectionName = config.expenseCollectionName;
  }

  getDistintCategory(req, res) {
    this.db.getConnection()
    .then(db => db.collection(this.collectionName).distinct('category'))
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Fetched all category' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in getting categories' })));
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

  getDailyStats(req, res) {
    const category = req.query.category;
    const aggregateParams = this.getDailyStatsParams(category);
    this.aggregateCollections(aggregateParams)
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Day stats fetched' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in fetching day stats' })));
  }

  getMonthlyStats(req, res) {
    const category = req.query.category;
    const aggregateParams = this.getMonthlyStatsParams(category);
    this.aggregateCollections(aggregateParams)
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Monthly stats fetched' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in fetching monthly stats' })));
  }

}
