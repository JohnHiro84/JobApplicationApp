import React from 'react';

import { withRouter } from 'react-router-dom';

class PartFive extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-five-section" className='part-hide'>

        <form className="part-five-form" onSubmit={this.props.handleSubmit}>

        <p>Candidate, we ask that you answer the following question(s) related
        to this position. Please take your time and fill out all relevant
        questions completely.
        </p>

            <span className={appState.errors.includes('undergrad_institution') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('undergrad_institution') ? <p className="errors-text"> Please fill in the undergraduate institution you attended</p> : ""}
              <label htmlFor="undergrad-institution">Undergraduate institution: <span className='red-star'>*</span></label>

              <textarea
                id = "undergrad-institution"
                type="text"
                value={(appState.undergrad_institution) ? appState.undergrad_institution : " "}
                placeholder={(appState.undergrad_institution) ? appState.undergrad_institution : " "}
                onChange={this.props.update('undergrad_institution')}
                />
            </span>

            <span className={appState.errors.includes('undergrad_major') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('undergrad_major') ? <p className="errors-text"> Please fill in your major</p> : ""}
              <label htmlFor="undergrad-major">Undergraduate Major: <span className='red-star'>*</span></label>

              <textarea
                id = "undergrad-major"
                type="text"
                value={(appState.undergrad_major) ? appState.undergrad_major : " "}
                placeholder={(appState.undergrad_major) ? appState.undergrad_major : " "}
                onChange={this.props.update('undergrad_major')}
                />
            </span>

            <span className={appState.errors.includes('undergrad_gpa') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('undergrad_gpa') ? <p className="errors-text"> Please fill in your gpa</p> : ""}
              <label htmlFor="undergrad-gpa">Undergraduate GPA: <span className='red-star'>*</span></label>

              <textarea
                id = "undergrad-gpa"
                type="text"
                value={(appState.undergrad_gpa) ? appState.undergrad_gpa : " "}
                placeholder={(appState.undergrad_gpa) ? appState.undergrad_gpa : " "}
                onChange={this.props.update('undergrad_gpa')}
                />
            </span>

            <span className={appState.errors.includes('undergrad_major_gpa') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('undergrad_major_gpa') ? <p className="errors-text">Please fill in your major gpa</p> : ""}
              <label htmlFor="grad-institution">Undergraduate Major GPA: <span className='red-star'>*</span></label>

              <textarea
                id = "undergrad-major-gpa"
                type="text"
                value={(appState.undergrad_major_gpa) ? appState.undergrad_major_gpa : " "}
                placeholder={(appState.undergrad_major_gpa) ? appState.undergrad_major_gpa : " "}
                onChange={this.props.update('undergrad_major_gpa')}
                />
            </span>

            <span className={appState.errors.includes('grad_institution') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('grad_institution') ? <p className="errors-text">  What Graduate School did you attend?</p> : ""}
              <label htmlFor="grad-institution">Graduate Institution: <span className='red-star'>*</span></label>

              <textarea
                id = "grad-institution"
                type="text"
                value={(appState.grad_institution) ? appState.grad_institution : " "}
                placeholder={(appState.grad_institution) ? appState.grad_institution : " "}
                onChange={this.props.update('grad_institution')}
                />
            </span>


            <span className={appState.errors.includes('grad_major') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('grad_major') ? <p className="errors-text">  What was your major/degree in graduate school?</p> : ""}
              <label htmlFor="grad-major">Graduate Degree: <span className='red-star'>*</span></label>

              <textarea
                id = "grad-major"
                type="text"
                value={(appState.grad_major) ? appState.grad_major : " "}
                placeholder={(appState.grad_major) ? appState.grad_major : " "}
                onChange={this.props.update('grad_major')}
                />
            </span>

            <span className={appState.errors.includes('grad_gpa') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('grad_gpa') ? <p className="errors-text">  What was your gpa in graduate school?</p> : ""}
              <label htmlFor="grad-gpa">Graduate GPA: <span className='red-star'>*</span></label>

              <textarea
                id = "grad-gpa"
                type="text"
                value={(appState.grad_gpa) ? appState.grad_gpa : " "}
                placeholder={(appState.grad_gpa) ? appState.grad_gpa : " "}
                onChange={this.props.update('grad_gpa')}
                />
            </span>

            <span className={appState.errors.includes('explain_interest') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('explain_interest') ? <p className="errors-text">  Why do you want to work for Acumen?</p> : ""}
              <label htmlFor="explain-interest">In 400 Characters or less, please describe why you are interested in Acumen, LLC.<span className='red-star'>*</span></label>
              <span id="explain-interest-chars">
                Character Count:{(appState.explain_interest) ? appState.explain_interest.length : ""}
              </span>
              <textarea
                id = "explain-interest"
                type="text"
                value={(appState.explain_interest) ? appState.explain_interest : " "}
                placeholder={(appState.explain_interest) ? appState.explain_interest : " "}
                onChange={this.props.update('explain_interest')}
                />
            </span>

            <span className={appState.errors.includes('referred_by') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('referred_by') ? <p className="errors-text">  Did any Acumen employee refer you to apply?</p> : ""}
              <label htmlFor="referred-by">Were you referred to this position by a current Acumen, LLC employee? If yes, please list thier name and provide additional details.<span className='red-star'>*</span></label>

              <textarea
                id = "referred-by"
                type="text"
                value={(appState.referred_by) ? appState.referred_by : " "}
                placeholder={(appState.referred_by) ? appState.referred_by : " "}
                onChange={this.props.update('referred_by')}
                />
            </span>

            <span className={appState.errors.includes('relocate') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('relocate') ? <p className="errors-text">  The office is in Burlingame. Are you willing to relocate?</p> : ""}
              <label htmlFor="relocate">This job is located in our Burlingame, CA office. Are you willing to relocate if necessary?<span className='red-star'>*</span></label>

              <textarea
                id = "relocate"
                type="text"
                value={(appState.relocate) ? appState.relocate : " "}
                placeholder={(appState.relocate) ? appState.relocate : " "}
                onChange={this.props.update('relocate')}
                />
            </span>

          <button id='part-five-submit' className="button"  value='5' onClick={this.props.handleSubmit}>Continue - Step 6</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartFive);
