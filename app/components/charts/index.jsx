import React from 'react';
import { observer } from 'mobx-react';
import ChartDataFunctions from './data-functions';
import './style.scss';


@observer
export default class CustomBarChart extends ChartDataFunctions {

  render() {
    const noData = (
      <div className="component-chart-no-data">
        <h5>No Data to display</h5>
      </div>
    );
    const component = !this.props.chartData.timeSeries.length
      ? noData
      : this.generateChart();
    return (
      <div className="component-chart">
        {component}
      </div>
    );
  }

}
