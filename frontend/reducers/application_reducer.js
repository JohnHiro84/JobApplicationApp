import merge from 'lodash/merge';
import {
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_SINGLE_APPLICATION
} from '../actions/application_actions';


const applicationReducer = (state = {}, action) => {
  Object.freeze(state);

  let application;

  switch (action.type) {

    case RECEIVE_SINGLE_APPLICATION:
      application = action.application;
      return {'current_application' :application};

    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;

  }
};

export default applicationReducer;
