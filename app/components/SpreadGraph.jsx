import React, {PropTypes} from 'react';
import Highchart from './Highchart.jsx';
import Highcharts from 'highcharts';

let SpreadGraph = ({ data, colors, title, subtitle, yaxistitle }) => {
    let series = data.map(function(d) {
      return { data: d };
    })
    let config = {
      colors: colors || ['#CC0000', '#996600', '#FFCC00', '#3333FF'],
      chart: {
        type: 'bar'
      },
      legend: {
        enabled: false
      },
      title: {
          text: title || "no title"
      },
      subtitle: {
          text: subtitle || "no title"
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


SpreadGraph.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  yaxistitle: PropTypes.string
}

export default SpreadGraph
