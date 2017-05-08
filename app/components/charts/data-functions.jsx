import { observer } from 'mobx-react';
import BarChartFunctions from './functions';

@observer
export default class ChartDataFunctions extends BarChartFunctions {

  getChartConfig() {
    const minHeight = 400;
    const timeSeries = this.props.chartData.timeSeries;
    const height = timeSeries.length * 30;
    const title = this.props.title;
    return {
      chart: {
        type: 'bar',
        height: height > minHeight ? height : minHeight,
        width: window.innerWidth / 2,
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
