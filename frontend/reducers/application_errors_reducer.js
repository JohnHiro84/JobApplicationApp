import {
  RECEIVE_APPLICATION_ERRORS
} from '../actions/application_actions';

const applicationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPLICATION_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

export default applicationErrorsReducer;
