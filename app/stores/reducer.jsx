import { RECEIVE_SUMMARY_DATA, RECEIVE_USER_DATA, RECEIVE_PROJECT_DATA  } from './actions.jsx'

const initialState = {
  summary: [],
  users: {},
  projects: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PROJECT_DATA:
      let projects = action.data.map( (i) => ({
        [i.token]: {
          ...i,
          diff: i.cores - ( state.projects[i.token] ? state.projects[i.token].cores : 0 )
        }
      })).reduce( (previousValue, currentValue, currentIndex, array) => ({
        ...previousValue,
        ...currentValue
      }), {} );
      return Object.assign({}, state, { projects });
    case RECEIVE_SUMMARY_DATA:
      return Object.assign({}, state, { summary: action.data });
    case RECEIVE_USER_DATA:
      let users = action.data.map( (i) => ({
        [i.token]: {
          ...i,
          diff: i.cores - ( state.users[i.token] ? state.users[i.token].cores : 0 )
        }
      })).reduce( (previousValue, currentValue, currentIndex, array) => ({
        ...previousValue,
        ...currentValue
      }), {} );
      return Object.assign({}, state, { users });
    default:
      return state;
  }
}
