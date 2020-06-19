import React from 'react';

import { withRouter } from 'react-router-dom';

class PartThree extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { appState } = this.props;


    return (
      <section id="part-three-section" className='part-hide'>

        <form className="part-three-form" onSubmit={this.props.handleSubmit}>


            <span className={appState.errors.includes('authorized') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('authorized') ? <p className="errors-text"> Are you authorized to work in the United States?</p> : ""}
              <label htmlFor="authorized">
                Are you authorized to work in the United States?
                <span className='red-star'>*</span>
              </label>

              <div >
                <label className="input-radio">
                  <input
                    type="radio"
                    name="authorized"
                    value="yes/any employer"
                    checked={(appState.authorized === "yes/any employer")}
                    onChange={this.props.update('authorized')}
                  />
                  I am authorized to work in this country for any employer.
                </label>
                <label className="input-radio">
                  <input type="radio"
                    name="authorized"
                    value="present employer only"
                    checked={(appState.authorized === "present employer only")}
                    onChange={this.props.update('authorized')}
                  />
                  I am authorized to work in this country for my present employer only.
                </label>
                <label className="input-radio">
                  <input type="radio"
                    name="authorized"
                    value="require sponsorship"
                    checked={(appState.authorized === "require sponsorship")}
                    onChange={this.props.update('authorized')}
                  />
                  I require sponsorship to work in this country.
                </label>
                <label className="input-radio">
                  <input type="radio"
                    name="authorized"
                    value="unknown status"
                    checked={(appState.authorized === "unknown status")}
                    onChange={this.props.update('authorized')}
                  />
                  My status to work in this country is unknown.
                </label>
              </div>
            </span>

            <span className={appState.errors.includes('countries_authorized') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('countries_authorized') ? <p className="errors-text">Are you authorized to work in any other countries?</p> : ""}
              <label htmlFor="countries">
                Additional countries authorized to work in.
                <span className='red-star'>*</span>
              </label>

              <input
                id = "countries"
                type="text"
                value={appState.countries_authorized}
                placeholder={appState.countries_authorized}
                onChange={this.props.update('countries_authorized')}
                />
            </span>

          <button id='part-three-submit' className="button" value='3' onClick={this.props.handleSubmit.bind(this)}>Continue - Step 4</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartThree);
