import React from 'react';

import { withRouter } from 'react-router-dom';

class PartEight extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-eight-section" className='part-hide'>

        <form className="part-eight-form" onSubmit={this.props.handleSubmit}>

          <p>Voluntary Self-Identification of Disability</p>
          <p>Form CC-305</p>
          <p>OMB Control Number 1250-0005</p>
          <p>Expires 1/31/2020</p>
          <p>Why are you being asked to complete this form?</p>

          <p>Because we do business with the government, we must reach out to, hire, and
          provide equal opportunity to qualified people with disabilities.i To help us
          measure how well we are doing, we are asking you to tell us if you have a
          disability or if you ever had a disability. Completing this form is voluntary,
          but we hope that you will choose to fill it out. If you are applying for a job,
          any answer you give will be kept private and will not be used against you in
          any way.</p>

          <p>If you already work for us, your answer will not be used against you in any
          way. Because a person may become disabled at any time, we are required to ask
          all of our employees to update their information every five years. You may
          voluntarily self-identify as having a disability on this form without fear of
          any punishment because you did not identify as having a disability earlier.</p>

          <p>How do I know if I have a disability?</p>

          <p>You are considered to have a disability if you have a physical or mental
          impairment or medical condition that substantially limits a major life activity,
          or if you have a history or record of such an impairment or medical condition.
          </p>

          <p>Disabilities include, but are not limited to:</p>

          <table>

            <tbody>
            <tr>
              <td>Blindness</td>
              <td>Autism</td>
              <td>Bipolar Disorder</td>
              <td>Post-traumatic stress disorder (PTSD)</td>
            </tr>
            <tr>
              <td>Deafness</td>
              <td>Cerebral palsy</td>
              <td>Major Depression</td>
              <td>Obsessive compulsive disorder</td>
            </tr>
            <tr>
              <td>Cancer</td>
              <td>HIV/AIDS</td>
              <td>Multiple sclerosis (MS)</td>
              <td>Impairments requiring the use of a wheelchair</td>
            </tr>
            <tr>
              <td>Diabetes</td>
              <td>Schizophrenia</td>
              <td>Missing limbs or partially missing limbs</td>
              <td>Intellectual disability (previously called mental retardation)</td>
            </tr>
            <tr>
              <td>Epilepsy</td>
              <td>Muscular dystrophy</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>


            <span className={appState.errors.includes('disability') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('disability') ? <p className="errors-text"> Do you have a disability?</p> : ""}
              <label htmlFor="disability">Please check one of the boxes below:<span className='red-star'>*</span></label>


              <div onChange={this.props.update('disability')}>
                <label className="input-radio">
                <input type="radio"
                  name="disability"
                  value="Yes, I have a disability(or previously had a disability)"
                  onChange={this.props.update('disability')}
                  checked={(appState.disability === "Yes, I have a disability(or previously had a disability)")}
                />
                Yes, I have a disability(or previously had a disability)
                </label>

                <label className="input-radio">
                <input type="radio"
                  name="disability"
                  value="No, I don't have a disability"
                  onChange={this.props.update('disability')}
                  checked={(appState.disability === "No, I don't have a disability")}
                />
                No, I don't have a disability
                </label>

                <label className="input-radio">
                <input type="radio"
                  name="disability"
                  value="I don't wish to answer"
                  onChange={this.props.update('disability')}
                  checked={(appState.disability === "I don't wish to answer")}
                />
                I don't wish to answer
                </label>

              </div>
            </span>

            <span className={appState.errors.includes('signature') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('signature') ? <p className="errors-text"> Please give us your signature</p> : ""}
              <label htmlFor="signature">Your Name</label>

              <input
                id = "signature"
                type="text"
                value={(appState.signature) ? appState.signature : " "}
                placeholder={(appState.signature) ? appState.signature : " "}
                onChange={this.props.update('signature')}
                />
            </span>

            <span className={appState.errors.includes('date') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('date') ? <p className="errors-text"> Fill in today's date</p> : ""}
              <label htmlFor="date">Today's Date</label>

              <input
                id = "date"
                type="date"
                value={(appState.date) ? appState.date : " "}
                placeholder={(appState.date) ? appState.date : " "}
                onChange={this.props.update('date')}
                />
            </span>

          <p>Reasonable Accommodation Notice</p>

          <p>Federal law requires employers to provide reasonable accommodation
           to qualified individuals with disabilities. Please tell us if you
           require a reasonable accommodation to apply for a job or to perform
           your job. Examples of reasonable accommodation include making a
           change to the application process or work procedures, providing
           documents in an alternate format, using a sign language interpreter,
           or using specialized equipment.</p>

          <p>i Section 503 of the Rehabilitation Act of 1973, as amended. For
          more information about this form or the equal employment obligations
          of Federal contractors, visit the U.S. Department of Labor's Office
          of Federal Contract Compliance Programs (OFCCP) website at
          www.dol.gov/ofccp.</p>

          <p>PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction Act
          of 1995 no persons are required to respond to a collection of
          information unless such collection displays a valid OMB control
          number. This survey should take about 5 minutes to complete.</p>

          <button
            id='part-eight-submit'
            className="button"
            value='8'
            onClick={this.props.handleSubmit}>
            Continue - Step 9
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartEight);
