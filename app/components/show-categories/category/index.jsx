import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import './style.scss';
import PropTypes from './proptypes';

export default class Categories extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.showDailyStats = this.showDailyStats.bind(this);
    this.showWeeklyStats = this.showWeeklyStats.bind(this);
    this.showMonthlyStats = this.showMonthlyStats.bind(this);
  }

  showDailyStats() {
    this.props.showDailyStats(this.props.category);
    this.props.viewStats(`Dalily stats for ${this.props.category}`);
  }

  showWeeklyStats() {
    this.props.showWeeklyStats(this.props.category);
    this.props.viewStats(`Weekly stats for ${this.props.category}`);
  }

  showMonthlyStats() {
    this.props.showMonthlyStats(this.props.category);
    this.props.viewStats(`Monthly stats for ${this.props.category}`);
  }

  render() {
    return (
      <div className="component-category-view panel panel-default">
        <div className="category-name">
          {this.props.category}
        </div>
        <FlatButton
          primary
          label="Daily Stats"
          disableTouchRipple
          style={{ margin: 12 }}
          onTouchTap={this.showDailyStats}
        />
        <FlatButton
          primary
          label="Weekly Stats"
          disableTouchRipple
          style={{ margin: 12 }}
          onTouchTap={this.showWeeklyStats}
        />
        <FlatButton
          primary
          disableTouchRipple
          label="Monthly Stats"
          style={{ margin: 12 }}
          onTouchTap={this.showDailyStats}
        />
      </div>
    );
  }

}
