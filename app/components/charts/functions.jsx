import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactHighcharts from 'react-highcharts';
import propTypes from './proptypes';

@observer
export default class BarChartFunctions extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.generateChart = this.generateChart.bind(this);
  }

  onClickHandler(category) {
    this.props.onClick(category, this.props.chartKey);
  }

  generateChart() {
    return (
      <ReactHighcharts config={this.getChartConfig()} />
    );
  }


}
