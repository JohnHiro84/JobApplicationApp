import React from 'react';

import { withRouter } from 'react-router-dom';
import {validateInformation, isPreviousSectionValid} from '../../util/validation.js';
import { sectionTransition, jumpToRecentSection } from '../../util/sectionTransition';

import PartOne from '../part/part_one';
import PartTwo from '../part/part_two';
import PartThree from '../part/part_three';
import PartFour from '../part/part_four';
import PartFive from '../part/part_five';
import PartSix from '../part/part_six';
import PartSeven from '../part/part_seven';
import PartEight from '../part/part_eight';
import Footer from '../footer/footer';

import merge from 'lodash/merge';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        user_id : "",
        prefix: "",
        first_name : "",
        last_name : "",
        middle_name : "",
        suffix : "",
        country : "",
        address_line1 : "",
        address_line2 : "",
        city : "",
        state_location : "",
        postal_code : "",
        contact_method : "",
        primary_phone : "",
        secondary_phone : "",
        email : "",
        errors: [],
        status: 'new',
        part_one_validated: "",
        part_two_validated: "",
        part_three_validated: "",
        part_four_validated: "",
        part_five_validated: "",
        part_six_validated: "",
        part_seven_validated: "",
        part_eight_validated: "",
        part_nine_validated: "",
        start_date: "",
        authorized: " ",
        countries_authorized: " "
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
    this.handleApplication = this.handleApplication.bind(this);
    this.hideErrorsMessage = this.hideErrorsMessage.bind(this);
    this.modalErrors = this.modalErrors.bind(this);
    this.jumpToNextSection = this.jumpToNextSection.bind(this);
  }


  jumpToNextSection(value){
    if(Number(value) === 8){
      this.props.history.push('/review_information');
    }
    sectionTransition(value);
  }


  handleApplication(validInfo, value){

        //remove errors
        if(validInfo.errors.length === 0){
          this.setState({errors: []})
        }

        //if there are errors
        if(validInfo.errors.length > 0){
          this.setState({errors: validInfo.errors})
          document.getElementById('errors-modal').className = "";

        //updating the applicaiton
        } else if(Object.values(validInfo).includes(true) && this.state.user_id){
          let copyState = this.state;
          let merged = merge(copyState, validInfo);
          this.props.updateApplication(merged);

          this.jumpToNextSection(value);


        //creating a new application
        } else if (Object.values(validInfo).includes(true) && !this.state.user_id){
          let copyState = this.state;
          copyState.user_id = this.props.session.id;
          let merged = merge(copyState, validInfo);

          this.props.createApplication(merged).then(res => this.setState(res));

          this.jumpToNextSection(value);

        }
  }

  handleSubmit(e) {
    e.preventDefault();

    let validInfo = validateInformation(this.state, e.target.value);

    this.handleApplication(validInfo, e.target.value);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  toggleSection(e){
      e.preventDefault();

      if(isPreviousSectionValid(e.target.id, this.state)){

        let section = (e.target.id + "-section");
        let ele = document.getElementById(section);
        (ele.className !== 'part-hide') ? (ele.className = 'part-hide') : (ele.className = 'part-container');

      };
  }

  componentDidMount(){

    let thisApplication = this.props.application;

    let key;

      if(!thisApplication){
        let tempApp;

        this.props.requestUserApplication().then(res => {

          let keys = Object.keys(res);
          tempApp = res[keys[0]];

          this.setState(tempApp);
          (tempApp) ? jumpToRecentSection(tempApp) : window.scrollTo(0,0)

        });
      }
  }

  hideErrorsMessage(e){
    e.preventDefault();
      document.getElementById('errors-modal').className = 'errors-modal-hide';
  }

  modalErrors(){
    let errors = "";
    if(this.state.errors){
      errors = this.state.errors.map((error,idx) =>
        <li className="errors-item" key={idx} >
          <h3>{error}</h3>
        </li>
      )
    }
    return errors;
  }


  render() {

    return (
      <section className="application-container container">

        <div id="errors-modal" className='errors-modal-hide' onClick={this.hideErrorsMessage}>

          <h1>Errors</h1>

          <ul>
            <li>There were one or more issues with data provided that prevented
            the submission of the form.</li>
            <li>Additional Information about each field's issue can be found in
            the fields above.</li>
            <li>Please review and updated the fields in red and submit the form again.</li>
          </ul>

          <button className="button-thin-line" onClick={this.hideErrorsMessage}>Close</button>
        </div>

        <h4 id="part-one" onClick={this.toggleSection}>Step 1: Contact Information</h4>
        <PartOne appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-two" onClick={this.toggleSection}>Step 2: Job Preferences</h4>
        <PartTwo appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-three" onClick={this.toggleSection}>Step 3: Authorized to work in the U.S.</h4>
        <PartThree appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-four" onClick={this.toggleSection}>Step 4: Upload a resume/additional documents</h4>
        <PartFour appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-five" onClick={this.toggleSection}>Step 5: Pre Employment Questionaire</h4>
        <PartFive appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-six" onClick={this.toggleSection}>Step 6: Resume/CV Content</h4>
        <PartSix appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-seven" onClick={this.toggleSection}>Step 7: Equal Opportunity Employer</h4>
        <PartSeven appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <h4 id="part-eight" onClick={this.toggleSection}>Step 8: Disability</h4>
        <PartEight appState={this.state} update={this.update.bind(this)} handleSubmit={this.handleSubmit}/>

        <Footer />

      </section>
    );
  }
}

export default withRouter(Application);
