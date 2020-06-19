import React from 'react';

import { withRouter } from 'react-router-dom';

class PartFour extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-four-section" className='part-hide'>

        <form className="part-four-form" onSubmit={this.props.handleSubmit}>


            <span className={appState.errors.includes('resume_file') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('resume_file') ? <p className="errors-text"> Please select a resume to upload</p> : ""}
              <label htmlFor="resume-file">Please upload a resume </label>

              <input
                id = "resume-file"
                type="text"
                value={(appState.resume_file) ? appState.resume_file : " "}
                placeholder={(appState.resume_file) ? appState.resume_file : " "}
                onChange={this.props.update('resume_file')}
                />
            </span>
            <button id='part-four-submit' className='upload-file-button button' value='4' onClick={this.props.handleSubmit}>Upload File</button>


          <button id='part-four-submit' className="button" value='4' onClick={this.props.handleSubmit}>Continue - Step 5</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartFour);
