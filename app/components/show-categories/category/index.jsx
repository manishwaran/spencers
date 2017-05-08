import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import './style.scss';
import PropTypes from './proptypes';

export default class Categories extends Component {

  static propTypes = PropTypes;

  constructor(props) {
    super(props);
    this.showDailyStats = this.showDailyStats.bind(this);
    this.showMonthlyStats = this.showMonthlyStats.bind(this);
  }

  showDailyStats() {
    this.props.showDailyStats(this.props.category);
  }

  showMonthlyStats() {
    this.props.showMonthlyStats(this.props.category);
  }

  render() {
    return (
      <div className="component-category panel panel-default">
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
          disableTouchRipple
          label="Monthly Stats"
          style={{ margin: 12 }}
          onTouchTap={this.showDailyStats}
        />
      </div>
    );
  }

}