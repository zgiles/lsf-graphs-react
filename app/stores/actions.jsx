import { getSummary, getUsersTable, getProjectsTable } from '../utils/LSFapi.jsx'

export const TICK = 'TICK'
export const RECEIVE_SUMMARY_DATA = 'RECEIVE_SUMMARY_DATA'
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA'
export const RECEIVE_PROJECT_DATA = 'RECEIVE_PROJECT_DATA'
export const REQUEST_DONE = 'REQUEST_DONE'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export function tickAction() {
  return (dispatch) => {
    dispatch( { type: TICK } );
    return dispatch(requestData())
  }
}

function receiveSummaryData(data) {
  return {
    type: RECEIVE_SUMMARY_DATA,
    data
  }
}

function receiveUserData(data) {
  return {
    type: RECEIVE_USER_DATA,
    data
  }
}


function receiveProjectData(data) {
  return {
    type: RECEIVE_PROJECT_DATA,
    data
  }
}

function requestData() {
  return dispatch => {
    // dispatch( { type: REQUEST_DATA } );
    let a = getSummary().then( json => dispatch(receiveSummaryData(json)) );
    let b = getUsersTable().then( json => dispatch(receiveUserData(json)) );
    let c = getProjectsTable().then( json => dispatch(receiveProjectData(json)) );
    // should return something else... maybe a promise that fulfills when all the promises return
    return a;
  }
}
