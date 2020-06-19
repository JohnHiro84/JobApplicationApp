import * as ApplicationAPIUtil from '../util/application_util';
//
export const RECEIVE_SINGLE_APPLICATION = "RECEIVE_SINGLE_APPLICATION";
export const RECEIVE_APPLICATION_ERRORS = "RECEIVE_APPLICATION_ERRORS";

export const receiveSingleApplication = application => ({
  type: RECEIVE_SINGLE_APPLICATION,
  application
});


export const receiveApplicationErrors = errors => ({
  type: RECEIVE_APPLICATION_ERRORS,
  errors
});


export const requestUserApplication = () => (dispatch) => {

  return ApplicationAPIUtil.fetchUserApplication().then(application => {
    dispatch(receiveSingleApplication(application));
    return application;
  });
}

export const updateApplication = application => dispatch => (
  ApplicationAPIUtil.updateApplication(application)
  .then(application => dispatch(requestUserApplication(application)))
);


export const createApplication = (application) => (dispatch) => (
  ApplicationAPIUtil.createApplicationUtil(application)
    .then(application => { dispatch(receiveSingleApplication(application));
    return application;
  }).fail(err => dispatch(receiveApplicationErrors(err.response.JSON)))
);
