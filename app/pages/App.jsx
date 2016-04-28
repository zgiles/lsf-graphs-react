import React, {Component} from 'react';
import { connect } from 'react-redux'

import LineGraph from '../components/LineGraph.jsx';
import AreaGraph from '../components/AreaGraph.jsx';
import SpreadGraph from '../components/SpreadGraph.jsx';
import { tickAction } from '../stores/actions.jsx';

const mapStateToProps_cores = (state) => {
  return {
    data: [
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.cores) }; } )
    ]
  }
}

const mapStateToProps_mem = (state) => {
  return {
    data: [
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.mem) }; } ),
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.mem_reservation) }; } )
    ]
  }
}

const mapStateToProps_jobs = (state) => {
  return {
    data: [
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.pending_jobs) }; } ),
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.running_jobs) }; } )
    ]
  }
}

const mapStateToProps_wait = (state) => {
  return {
    data: [
      state.summary.map( (o) => { return { x: parseInt(o.timestamp), y:parseInt(o.pending_time_avg) }; } )
    ]
  }
}

const CoreLineGraph = connect(mapStateToProps_cores, {})(LineGraph)
const MemLineGraph = connect(mapStateToProps_mem, {})(LineGraph)
const JobsAreaGraph = connect(mapStateToProps_mem, {})(AreaGraph)
const WaitLineGraph = connect(mapStateToProps_wait, {})(LineGraph)

export default class App extends Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.props.dispatch(tickAction());
    setTimeout(this.tick, 30000);
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-12">
        	<div className="text-center">
        	<img src="https://live.hpc.mssm.edu/MSSMLogo.png" />
        	<img src="https://live.hpc.mssm.edu/scientificcomputinglogo75pt.png" width="483" height="69" />
        	<img src="https://live.hpc.mssm.edu/minervalogo75pt.png" width="174" height="69" />
        	</div>
        </div>
        <div className="col-md-6">
          <CoreLineGraph
            title="Cores in use on Minerva"
            subtitle="number of cores in use"
            yaxistitle="cores"
            colors={[ '#FF0000' ]} />
          <MemLineGraph
            title="Memory in use on Minerva"
            subtitle="total memory allocated to jobs and in use by jobs"
            yaxistitle="TB" />
          <JobsAreaGraph
            title="Number of Jobs on Minerva"
            subtitle="running vs pending"
            yaxistitle="quantity"
            colors={[ '#FFFF00', '#00FF00' ]} />
          <WaitLineGraph
            title="Waiting Time on Minerva"
            subtitle="average time running jobs waited to run"
            yaxistitle="hours" />
        </div>
        <div className="col-md-6">
          <SpreadGraph
            data={ [ [ 1,2,3,4 ] ] }
            title="User Spread"
            subtitle="relative core usage by user" />

          <div id="topcorestablecontainer" className="table-containers">
          	<table id='topcorestable' className="table table-condensed">
          		<caption className="text-center"><h4>Top Minerva Users Running</h4></caption>
          		<thead><tr><th className="col-md-1">Rank</th><th>User</th><th className="col-md-1">Cores</th><th className="col-md-1"></th></tr></thead>
          		<tbody>
          		</tbody>
          	</table>
          </div>
          <div id="topprojectstablecontainer" className="table-containers">
          	<table id='topprojectstable' className="table table-condensed">
          		<caption className="text-center"><h4>Top Minerva Projects Running</h4></caption>
          		<thead><tr><th className="col-md-1">Rank</th><th>Project</th><th class="col-md-1">Cores</th><th className="col-md-1"></th></tr></thead>
          		<tbody>
          		</tbody>
          	</table>
          </div>
        </div>
      </div>
    );
  }

}
