import { observer } from 'mobx-react';
import BarChartFunctions from './functions';

@observer
export default class ChartDataFunctions extends BarChartFunctions {

  getChartConfig() {
    const title = this.props.title;
    const timeSeries = this.props.chartData.timeSeries;
    return {
      chart: {
        type: 'bar',
        height: 400,
        width: 650,
      },
      title: {
        text: title,
        align: 'center',
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        categories: timeSeries,
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Spent',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          animation: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Amount ',
        data: this.props.chartData.total,
      }],
    };
  }


}
