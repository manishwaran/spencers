import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import Modal from '../modal';
import Category from './category';
import PropTypes from './proptypes';
import CustomBarChart from '../charts';

@observer
export default class Categories extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.viewStats = this.viewStats.bind(this);
    this.onStatsViewed = this.onStatsViewed.bind(this);
    this.state = {
      showStats: false,
      statsTitle: '',
    };
  }

  onStatsViewed() {
    this.setState({ showStats: false, statsTitle: '' });
  }

  getCategoryComponent() {
    const data = this.props.data;
    return data.map(item => (
      <Category
        key={item}
        category={item}
        viewStats={this.viewStats}
        showDailyStats={this.props.showDailyStats}
        showWeeklyStats={this.props.showWeeklyStats}
        showMonthlyStats={this.props.showMonthlyStats}
      />
    ));
  }

  viewStats(statsTitle) {
    this.setState({ showStats: true, statsTitle });
  }

  render() {
    const allCategories = this.getCategoryComponent();
    const chartData = { timeSeries: [], total: [] };
    this.props.stats.forEach((item) => {
      chartData.timeSeries.push(item.time);
      chartData.total.push(item.total);
    });
    return (
      <div className="component-categories">
        <h4>Stats</h4>
        <div className="categories">
          {allCategories}
        </div>
        <Modal
          title="Add New Expense"
          onAccept={this.onStatsViewed}
          show={this.state.showStats && this.props.stats.length}
        >
          <CustomBarChart
            chartData={chartData}
            title={this.state.statsTitle}
          />
        </Modal>
      </div>
    );
  }

}
