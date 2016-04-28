import { RECEIVE_DATA } from './actions.jsx'

const initialState = {
  summary: [],
  users: [],
  project: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, state, { summary: action.data });
    default:
      return state;
  }
}
