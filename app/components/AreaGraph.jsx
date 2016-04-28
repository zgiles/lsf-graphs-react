import React, {PropTypes} from 'react';
import Highchart from './Highchart.jsx';
import Highcharts from 'highcharts';

let AreaGraph = ({ data, colors, title, subtitle, yaxistitle }) => {
  let series = data.map(function(d) {
    return { data: d };
  })
  let config = {
    colors: colors || ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
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
        text: title || "no title"
    },
    subtitle: {
        text: subtitle || "no title"
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
          text: yaxistitle || "no title"
        },
      }, {
        title: {
          text: yaxistitle || "no title"
        },
        opposite: true,
      }
    ]
  };
  return React.createElement(Highchart, { config: config });
}


AreaGraph.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  yaxistitle: PropTypes.string
}

export default AreaGraph
