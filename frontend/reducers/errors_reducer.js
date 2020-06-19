import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import applicationErrors from './application_errors_reducer';

export default combineReducers({
  session,
  applicationErrors
});
