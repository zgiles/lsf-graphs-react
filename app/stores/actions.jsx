import { getSummary } from '../utils/LSFapi.jsx'

export const TICK = 'TICK'
export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DONE = 'REQUEST_DONE'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export function tickAction() {
  return (dispatch) => {
    dispatch( { type: TICK } );
    return dispatch(requestData())
  }
}

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}

function requestData() {
  return dispatch => {
    dispatch( { type: REQUEST_DATA } );
    getSummary( (err,res) => { dispatch(receiveData(JSON.parse(res.text))) } )
    return dispatch( { type: REQUEST_DONE } );
  }
}
