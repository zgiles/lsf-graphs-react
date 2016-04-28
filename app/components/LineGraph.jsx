import React, {Component, PropTypes} from 'react';
import Highchart from './Highchart.jsx';
import Highcharts from 'highcharts';

let LineGraph = ({ data, colors, title, subtitle, yaxistitle }) => {
  let series = data.map(function(d) {
    return { data: d };
  })
  let config = {
    colors: colors || ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
    legend: { enabled: false },
    title: {
        text: title || "no title"
    },
    subtitle: {
        text: subtitle || "no title"
    },
    plotOptions : {
      line: {
        marker: {
          enabled: false
        },
        states: {
          hover: {
            enabled: false
          }
        },
        animation: false
      },
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
    ],
  };
  return React.createElement(Highchart, { config: config });
}

LineGraph.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  yaxistitle: PropTypes.string
}

export default LineGraph

/*
export default class OneLineGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let series = this.props.data.map(function(d) {
      return { data: d };
    })
    let config = {
      colors: this.props.colors || ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      legend: { enabled: false },
      title: {
          text: this.props.title || "no title"
      },
      subtitle: {
          text: this.props.subtitle || "no title"
      },
      plotOptions : {
        line: {
          marker: {
            enabled: false
          },
          states: {
            hover: {
              enabled: false
            }
          },
          animation: false
        },
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
      ],
    };
    return React.createElement(Highchart, { config: config });
  }

}
*/
