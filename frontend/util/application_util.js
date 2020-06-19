export const fetchUserApplication = () => {
 let application_promise = $.ajax({
    method: 'GET',
    url: `/api/applications/`
  })
  return application_promise;
};


export const updateApplication = (application) => {
  let apromise = $.ajax({
    method: 'PATCH',
    url: `/api/applications/${application.id}`,
    data: { application }
  });
  return apromise;
}


export const createApplicationUtil = (application) => {

 let application_promise = $.ajax({
    method: 'POST',
    url: `/api/applications/`,
    data: { application }
  })
  return application_promise;
};
