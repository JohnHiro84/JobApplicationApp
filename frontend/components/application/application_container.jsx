import { connect } from 'react-redux';

import Application from './application';
import { updateApplication, requestUserApplication, createApplication } from '../../actions/application_actions';

const mapStateToProps = ({ session, errors, entities }) => ({

    application: entities.application.current_application,
    errors: errors.applicationErrors,
    session : entities.users[session.id]


});

const mapDispatchToProps = dispatch => ({
  requestUserApplication: () => dispatch(requestUserApplication()),
  createApplication: application => dispatch(createApplication(application)),
  updateApplication: application => dispatch(updateApplication(application))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
