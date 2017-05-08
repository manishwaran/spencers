import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.scss';
import propTypes from './proptypes';
import { StatsActions } from '../../actions';
import { Categories } from '../../components';
import { StatsStore } from '../../stores';

@observer
export default class Stats extends Component {

  static propTypes = propTypes;

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
          stasts={StatsStore.STATS || []}
          data={StatsStore.CATEGORIES || []}
          showDailyStats={this.statsActions.getDailyStats}
          showMonthlyStats={this.statsActions.getMonthlyStats}
        />
      </div>
    );
  }

}
