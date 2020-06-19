import { connect } from 'react-redux';

import ReviewInformation from './review_information';

import { updateApplication, requestUserApplication} from '../../actions/application_actions';

const mapStateToProps = ({ session, errors, entities }) => {

    let currentApp = entities.application.current_application;
    let keys = Object.keys(currentApp);
    let recentApp = currentApp[keys[0]];

  return {

    application: recentApp,
    errors: errors.applicationErrors,
    session : entities.users[session.id]
  }
};

const mapDispatchToProps = dispatch => ({

  requestUserApplication: () => dispatch(requestUserApplication()),
  updateApplication: application => dispatch(updateApplication(application))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewInformation);
