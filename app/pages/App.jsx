import React, {Component} from 'react';
import { connect } from 'react-redux'

import LineGraph from '../components/LineGraph.jsx';
import AreaGraph from '../components/AreaGraph.jsx';
import SpreadGraph from '../components/SpreadGraph.jsx';
import TableCores from '../components/TableCores.jsx';
import { tickAction } from '../stores/actions.jsx';

const makeStateToPropsDiffY = (...ys) => state => ({
    data: ys.map(
      y => state.summary.map(
        o => ({ x: parseInt(o.timestamp), y: parseInt(o[y]) })
      )
    )
})

/*
const makeStateToPropsUserSpread = (state) => ({
    data: state.users.map( u => ({ name: u.longname.substring(0, 13) + '...', data: [ parseInt(u.cores) ] }) )
})
*/

const makeStateToPropsUserSpread = (state) => ({
    data: Object.keys(state.users).map( u => ({ name: state.users[u].longname.substring(0, 13) + '...', data: [ parseInt(state.users[u].cores) ] }) )
})

/*
const makeStateToPropsPASS = (state) => ({ data: state.users })
*/

const makedicttoArray =  (d) => (state) => ({ data: Object.keys(state[d]).map( u => state[d][u] ) })

const CoreLineGraph = connect(makeStateToPropsDiffY("cores"), {})(LineGraph)
const MemLineGraph = connect(makeStateToPropsDiffY("mem", "mem_reservation"), {})(LineGraph)
const JobsAreaGraph = connect(makeStateToPropsDiffY("pending_jobs", "running_jobs"), {})(AreaGraph)
const WaitLineGraph = connect(makeStateToPropsDiffY("pending_time_avg"), {})(LineGraph)
const UserSpreadGraph = connect(makeStateToPropsUserSpread, {})(SpreadGraph)
const UserTableCores = connect(makedicttoArray("users"),{})(TableCores)
const ProjectTableCores = connect(makedicttoArray("projects"),{})(TableCores)

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
          <UserSpreadGraph
            title="User Spread"
            subtitle="relative core usage by user" />

          <div id="topcorestablecontainer" className="table-containers">
            <UserTableCores
              title="Top Minerva Users Running"
              subject="User" />
          </div>
          <div id="topprojectstablecontainer" className="table-containers">
            <ProjectTableCores
              title="Top Minerva Projects Running"
              subject="Project" />
          </div>
        </div>
      </div>
    );
  }

}
