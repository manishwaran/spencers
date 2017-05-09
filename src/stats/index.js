import _ from 'lodash';

import week from './week';
import StatsBase from './base';

export default class Stats extends StatsBase {

  getWeeklyStatsParams(category) {
    const weeklyParams = _.cloneDeep(week);
    weeklyParams[2].$match.category = category;
    return weeklyParams;
  }

  getDistintCategory(req, res) {
    this.db.getConnection()
    .then(db => db.collection(this.collectionName).distinct('category'))
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Fetched all category' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in getting categories' })));
  }

  getDailyStats(req, res) {
    const category = req.query.category;
    const aggregateParams = this.getDailyStatsParams(category);
    this.aggregateCollections(aggregateParams)
    .then(this.formatAggregatedStats)
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Day stats fetched' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in fetching day stats' })));
  }

  getMonthlyStats(req, res) {
    const category = req.query.category;
    const aggregateParams = this.getMonthlyStatsParams(category);
    this.aggregateCollections(aggregateParams)
    .then(this.formatAggregatedStats)
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Monthly stats fetched' })))
    .catch(() => res.status(500).send(JSON.stringify({ serverError: 'Error in fetching monthly stats' })));
  }

  getWeeklyStats(req, res) {
    const category = req.query.category;
    const params = this.getWeeklyStatsParams(category);
    this.db.getConnection()
    .then(db => db.collection(this.collectionName).aggregate(params))
    .then(data => data.toArray())
    .then(this.performWeeklyAggregation)
    .then(data => res.status(200).send(JSON.stringify({ data, message: 'Monthly stats fetched' })))
    .catch(() => {
      res.status(500).send(JSON.stringify({ serverError: 'Error in fetching monthly stats' }));
    });
  }

}
