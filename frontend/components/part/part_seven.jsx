import React from 'react';

import { withRouter } from 'react-router-dom';

class PartSeven extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-seven-section" className='part-hide'>

        <form className="part-seven-form" onSubmit={this.props.handleSubmit}>

          <p className="input-general-text-part7">Non-Discrimination: Acumen, LLC is an Equal Opportunity Employer and
          applicants are treated without regard to race, creed, religion, color,
          national origin/nationality, ancestry, age, sex/gender, marital status,
          familial status, sexual orientation, gender identity or expression,
          domestic partnership status, atypical hereditary cellular or blood
          trait, genetic information, disability or liability for service in the
          Armed Forces of the United States. Instructions: This is an optional
          questionnaire. If you chose to fill it out, this information will not
          be included with your application during the selection process. Your
          responses to the items below will be used solely to assist Acumen in
          evaluating its recruitment procedures to ensure that the process is fair
          to all applicants and for record-keeping requirements that have been
          established for Federal contractors. Disabled applicants may request
          accommodation, if necessary.
         </p>

            <span className={appState.errors.includes('gender') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('gender') ? <p className="errors-text"> Please tell us your gender</p> : ""}
              <label htmlFor="gender">What is your gender?<span className='red-star'>*</span></label>

              <div >
                <label className="input-radio">
                  <input type="radio"
                    name="gender"
                    value="Male"
                    onChange={this.props.update('gender')}
                    checked={(appState.gender === "Male")}
                  />
                  Male
                </label>
                <label className="input-radio">
                  <input type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.props.update('gender')}
                    checked={(appState.gender === "Female")}
                  />
                  Female
                </label>
                <label className="input-radio">
                  <input type="radio"
                    name="gender"
                    value="I choose not to self identify"
                    onChange={this.props.update('gender')}
                    checked={(appState.gender === "I choose not to self identify")}
                  />
                  I choose not to self identify
                </label>
              </div>


            </span>


            <span id="part-seven-race" className={appState.errors.includes('race') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('race') ? <p className="errors-text"> Please tell us your race/ethnicity</p> : ""}
              <label htmlFor="race">What is your race/ethnicity?<span className='red-star'>*</span></label>

              <div>
                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="Hispanic"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "Hispanic")}
                  />
                  Hispanic or Latino

                </label>
                <p className="ethnicity-description-part7">A person of Mexican, Puerto Rican, Cuban, Central or South American,
                or other Spanish culture or origin, regardless of race.
                </p>
                <p>If not then I am:</p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="White"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "White")}
                  />
                  White (Not Hispanic or Latino)
                </label>
                <p className="ethnicity-description-part7"> A person having origins in any of the original peoples of
                Europe, North Africa, or the middle East.
                </p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="Black"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "Black")}
                  />
                  Black or African American(Not Hispanic or Latino.)
                </label>

                <p className="ethnicity-description-part7">A person having origins in any of the Black
                racial groups of Africa.
                </p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="Asian"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "Asian")}
                  />
                  Asian (Not Hispanic or Latino)
                </label>
                <p className="ethnicity-description-part7">A person having origins in any of the original peoples
                of the Far East, Southeast Asia, or the Indian subcontinent
                including, for example, Cambodia, China, India, Japan, Korea,
                Malaysia, Pakistan, the Phillipine Islands, Thailand, and Vietnam.
                </p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="Native Hawaiian or Other Pacific Islander"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "Native Hawaiian or Other Pacific Islander")}
                  />
                  Native Hawaiian or Other Pacific Islander(Not Hispanic or Latino)
                </label>
                <p className="ethnicity-description-part7">A person having origins in any of the original peoples of
                Hawaii, Guam, Samoa, or other Pacific Islands.
                </p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="American Indian or Alaskan Native"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "American Indian or Alaskan Native")}
                  />
                  American Indian or Alaskan Native(Not Hispanic or Latino)
                </label>
                <p className="ethnicity-description-part7">A person having origins in any of the original peoples of
                North America and South America(including Central America),
                and who maintains tribal affiliation or community attachment.
                </p>

                <label className="input-radio">
                  <input type="radio"
                  name="race"
                  value="Two or more races"
                  onChange={this.props.update('race')}
                  checked={(appState.race === "Two or more races")}
                  />
                  Two or More Races(Not Hispanic or Latino)
                </label>
                <p className="ethnicity-description-part7">A person who identifies with more than one of the above six races.</p>
              </div>

            </span>

            <h1 className="input-general-text-part7">Pre-Offer Invitation to Self-Identify as a Protected Veteran</h1>
            <p className="input-general-text-part7">This employer is a Government contractor or subcontractor subject
            to the Vietnam Era Veterans' Readjustment Assistance Act of 1974, as
             amended by the Jobs for Veterans Act of 2002, 38 U.S.C. 4212
             (VEVRAA), which requires Government contractors to take affirmative
             action to employ and advance in employment “protected veterans":
             (1) disabled veterans; (2) recently separated veterans; (3) active
             duty wartime or campaign badge veterans; and (4) Armed Forces
             service medal veterans. (See Descriptions)</p>

             <p className="input-general-text-part7">This employer is subject to certain governmental recordkeeping
             and reporting requirements under VEVRAA. In order to comply with
             these requirements, we invite you to check the appropriate box
             below. Submission of this information is voluntary and refusal to
             provide it will not subject you to any adverse treatment. The
             information you provide will be kept confidential and will only be
             used in ways that are consistent with VEVRAA.</p>

            <span className={appState.errors.includes('veteran') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('veteran') ? <p className="errors-text"> Are you a protected veteran?</p> : ""}
              <label htmlFor="veteran">Are you a protected veteran?<span className='red-star'>*</span></label>

              <div>
                <label className="input-radio">
                  <input type="radio"
                    name="veteran"
                    value="I identify as one or more of the classifications of protected veteran listed above."
                    onChange={this.props.update('veteran')}
                    checked={(appState.veteran === "I identify as one or more of the classifications of protected veteran listed above.")}
                  />
                  I identify as one or more of the classifications of protected veteran listed above.
                </label>

                <label className="input-radio">
                  <input type="radio"
                    name="veteran"
                    value="I am not a protected veteran"
                    onChange={this.props.update('veteran')}
                    checked={(appState.veteran === "I am not a protected veteran")}
                  />
                  I am not a protected veteran
                </label>

                <label className="input-radio">
                  <input type="radio"
                    name="veteran"
                    value="I choose not to self-identify"
                    onChange={this.props.update('veteran')}
                    checked={(appState.veteran === "I choose not to self-identify")}
                  />
                  I choose not to self-identify
                </label>
              </div>
            </span>

            <p className="input-general-text-part7">This employer is committed to the goal of equal opportunity in
            employment. To further this goal, this employer maintains an
            affirmative action program that includes policies and practices to
            assure non-discrimination and affirmative action for protected
            veterans.
            </p>

          <button id='part-seven-submit' className="button" value='7' onClick={this.props.handleSubmit}>Continue - Step 8</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartSeven);
