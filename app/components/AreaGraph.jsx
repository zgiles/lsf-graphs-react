import React, {Component} from 'react';
import Highchart from './Highchart.jsx';
import Highcharts from 'highcharts';

export default class AreaGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let series = this.props.data.map(function(d) {
      return { data: d };
    })
    let config = {
      colors: this.props.colors || ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      chart: {
        type: 'area'
      },
      legend: {
				labelFormat: '{name}',
				borderWidth: 1,
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				floating: true,
				x: 100,
				y: 50
			},
      title: {
          text: this.props.title || "no title"
      },
      subtitle: {
          text: this.props.subtitle || "no title"
      },
      plotOptions : {
        area: {
          marker: {
            enabled: false
          },
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          animation: false
        },
        series: {
          dataLabels: {
            enabled: false,
            crop: false,
            overflow: 'none',
            style: {
              color: 'black'
            },
            formatter: function() {
              return this.y;
            }
          }
        }
      },
      series: series,
      xAxis : {
        type: 'datetime'
      },
      yAxis : [
        {
          title: {
            text: this.props.yaxistitle || "no title"
          },
        }, {
          title: {
            text: this.props.yaxistitle || "no title"
          },
          opposite: true,
        }
      ]
    };
    return React.createElement(Highchart, { config: config });
  }

}
