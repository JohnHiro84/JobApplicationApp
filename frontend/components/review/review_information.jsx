import React from 'react';

import { withRouter, Redirect } from 'react-router-dom';
import Footer from '../footer/footer';

class ReviewInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount(){
    this.props.requestUserApplication();
    window.scrollTo(0,0);

  }


  handleSubmit(e) {

    e.preventDefault();
    let copyState = this.props.application;

    copyState.application_complete = true;
    this.props.updateApplication(copyState)
    .then(this.props.history.push('/success'));

  }

  render() {

    const { application } = this.props;

    if(!application){
      return (<section  className='review-container container'>
                <p>Review information</p>
              </section>)
    }

    if(application.step_eight_validated === false){
        return <Redirect to='/application' />
    }

    if(application.application_complete === true){
        return <Redirect to='/success' />
    }
    return (
      <section className='review-container container' id="review">
        <h1>Review your information</h1>

        <h3> Contact Information</h3>

          <p><span className="review-heading-bold">First Name:</span> {application.first_name}</p>
          <p><span className="review-heading-bold">Last Name:</span> {application.last_name}</p>
          <p><span className="review-heading-bold">Middle:</span> {application.middle_name}</p>
          <p><span className="review-heading-bold">Suffix:</span> {application.suffix}</p>
          <p><span className="review-heading-bold">Country:</span> {application.country}</p>
          <p><span className="review-heading-bold">Address:</span> {application.address_line1}</p>
          <p> {application.address_line2}</p>
          <p><span className="review-heading-bold">City:</span> {application.city}</p>
          <p><span className="review-heading-bold">State/Location:</span> {application.state_location}</p>
          <p><span className="review-heading-bold">Postal Code:</span> {application.postal_code}</p>
          <p><span className="review-heading-bold">Contact Method:</span> {application.contact_method}</p>
          <p><span className="review-heading-bold">Primary Phone:</span> {application.primary_phone}</p>
          <p><span className="review-heading-bold">Secondary Phone:</span> {application.secondary_phone}</p>
          <p><span className="review-heading-bold">Email:</span> {application.email}</p>

        <h3>Job Preferences</h3>

          <p><span className="review-heading-bold">Date available to start:</span> {application.start_date}</p>

        <h3>Authorized to work in the U.S.</h3>

          <p><span className="review-heading-bold">Authorized to work in US:</span> {application.authorized}</p>
          <p><span className="review-heading-bold">Countries Authorized:</span> {application.countries_authorized}</p>

        <h3>Upload a resume/additional documents</h3>

          <p><span className="review-heading-bold">Resume File:</span> {application.resume_file}</p>

        <h3>Pre Employment Questionaire</h3>

          <p><span className="review-heading-bold">Undergrad Institution:</span> {application.undergrad_institution}</p>
          <p><span className="review-heading-bold">Major:</span> {application.undergrad_major}</p>
          <p><span className="review-heading-bold">GPA:</span> {application.undergrad_gpa}</p>
          <p><span className="review-heading-bold">Major GPA:</span> {application.undergrad_major_gpa}</p>
          <p><span className="review-heading-bold">Graduate Institution:</span> {application.grad_institution}</p>
          <p><span className="review-heading-bold">Major:</span> {application.grad_major}</p>
          <p><span className="review-heading-bold">GPA:</span>  {application.grad_gpa}</p>
          <p><span className="review-heading-bold">Interest in company:</span> {application.explain_interest}</p>
          <p><span className="review-heading-bold">Referred By:</span> {application.referred_by}</p>
          <p><span className="review-heading-bold">Relocate:</span> {application.relocate}</p>

        <h3>Resume/CV Content</h3>

          <p><span className="review-heading-bold">Resume Content:</span> {application.resume_text}</p>

        <h3>Equal Opportunity Employer</h3>

          <p><span className="review-heading-bold">Race:</span> {application.race}</p>
          <p><span className="review-heading-bold">Gender:</span> {application.gender}</p>
          <p><span className="review-heading-bold">Veteran Status:</span> {application.veteran}</p>

        <h3>Disability</h3>

          <p><span className="review-heading-bold">Disability:</span> {application.disability}</p>
          <p><span className="review-heading-bold">Signature:</span> {application.signature}</p>
          <p><span className="review-heading-bold">Date:</span> {application.date}</p>


        <button id='review-submit' className="button" onClick={this.handleSubmit}>Submit Application</button>

        <Footer />
      </section>
    );
  }
}

export default withRouter(ReviewInformation);
