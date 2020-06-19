import { combineReducers } from 'redux';

import users from './users_reducer';
import application from './application_reducer';


export default combineReducers({
  application,
  users

});
