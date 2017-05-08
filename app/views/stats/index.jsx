import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.scss';
import { StatsActions } from '../../actions';
import { Categories } from '../../components';
import { StatsStore } from '../../stores';

@observer
export default class Stats extends Component {

  constructor(props) {
    super(props);
    this.statsActions = new StatsActions();
  }

  componentWillMount() {
    this.statsActions.getCategories();
  }

  render() {
    return (
      <div className="view-stats">
        <Categories
          stats={StatsStore.STATS || []}
          data={StatsStore.CATEGORIES || []}
          showDailyStats={this.statsActions.getDailyStats}
          showWeeklyStats={this.statsActions.getWeeklyStats}
          showMonthlyStats={this.statsActions.getMonthlyStats}
        />
      </div>
    );
  }

}
