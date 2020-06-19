import React from 'react';

import { withRouter } from 'react-router-dom';

class PartSix extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-six-section" className='part-hide'>

        <form className="part-six-form" onSubmit={this.props.handleSubmit}>


            <span className={appState.errors.includes('resume_text') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('resume_text') ? <p className="errors-text"> Please add the content of your resume</p> : ""}
              <label htmlFor="resume-text">Please upload the content of your resume or CV</label>

              <textarea
                id = "resume-text"
                type="text"
                value={(appState.resume_text) ? appState.resume_text : " "}
                placeholder={(appState.resume_text) ? appState.resume_text : " "}
                onChange={this.props.update('resume_text')}
                />
            </span>


          <button id='part-six-submit' className="button" value='6' onClick={this.props.handleSubmit}>Continue - Step 7</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartSix);
