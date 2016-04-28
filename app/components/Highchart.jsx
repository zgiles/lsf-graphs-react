import React, {Component} from 'react';
import Highcharts from 'highcharts';
// require('highcharts/modules/exporting')(Highchartlib);

export default class Highchart extends Component {

  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
    this.makeConfig = this.makeConfig.bind(this);
  }

  makeConfig(config) {
    if (!config) {
      throw new Error('Config must be specified');
    }
    let chartConfig = config.chart || {};
    return {
      ...config,
      credits: {
        enabled: false
      },
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart
      }
    };
  }

  renderChart(config) {
    this.chart = new Highcharts[this.props.type || "Chart"](this.makeConfig(config));
    global.requestAnimationFrame && requestAnimationFrame(() => {
      this.chart && this.chart.options && this.chart.reflow();
    });
  }

  shouldComponentUpdate(nextProps) {
    this.renderChart(nextProps.config);
    return false;
  }

  componentDidMount() {
    this.renderChart(this.props.config);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  //Create the div which the chart will be rendered to.
  render() {
    return React.createElement('div', { id: this.props.container, ref: 'chart', className: 'graph-container' });
  }
}

Highcharts.propTypes = {
  config: React.PropTypes.object.isRequired
}
