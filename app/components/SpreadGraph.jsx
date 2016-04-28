import React, {Component} from 'react';
import Highchart from './Highchart.jsx';
import Highcharts from 'highcharts';

export default class SpreadGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let series = this.props.data.map(function(d) {
      return { data: d };
    })
    let config = {
      colors: this.props.colors || ['#CC0000', '#996600', '#FFCC00', '#3333FF'],
      chart: {
        type: 'bar'
      },
      legend: {
        enabled: false
      },
      title: {
          text: this.props.title || "no title"
      },
      subtitle: {
          text: this.props.subtitle || "no title"
      },
      series: series,
      xAxis: {
				categories: [''],
				gridLineColor: 'transparent',
				lineColor: 'transparent',
			},
			yAxis: {
				lineWidth: 0,
				minorGridLineWidth: 0,
				gridLineColor: 'transparent',
				lineColor: 'transparent',
				labels: {
					enabled: false
				},
				minorTickLength: 0,
				tickLength: 0,
				title: {
					text: ''
				},
				min: 0,
				stackLabels: {
					enabled: false,
				}
			},
      tooltip: {
        formatter: function() {
          return '<b>' + this.series.name + '<br />' + this.y + ' cores</b>';
        }
      },
      plotOptions: {
        series: {
          animation: false,
          stacking: 'percent',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor || 'white'),
            formatter: function() {
              if (this.percentage > 10) {
                return '<center>' + this.series.name + '<br />' + this.y + ' cores</center>';
              } else {
                return '';
              }
            }
          }
        }
      },
    };
    return React.createElement(Highchart, { config: config });
  }

}
