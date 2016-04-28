import { RECEIVE_SUMMARY_DATA, RECEIVE_USER_DATA, RECEIVE_PROJECT_DATA  } from './actions.jsx'

const initialState = {
  summary: [],
  users: [],
  projects: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PROJECT_DATA:
      return Object.assign({}, state, { projects: action.data });
    case RECEIVE_SUMMARY_DATA:
      return Object.assign({}, state, { summary: action.data });
    case RECEIVE_USER_DATA:
      return Object.assign({}, state, { users: action.data });
    default:
      return state;
  }
}
