import React from 'react';

import { withRouter } from 'react-router-dom';

class PartTwo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { appState } = this.props;

    return (
      <section id="part-two-section" className='part-hide'>

        <form className="part-two-form" onSubmit={this.props.handleSubmit}>


            <span className={appState.errors.includes('start_date') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('start_date') ? <p className="errors-text"> Please Enter your available start date</p> : ""}
              <label htmlFor="start-date">Date you are available:</label>

              <input
                id = "start-date"
                type="date"
                value={appState.start_date}
                placeholder={appState.start_date}
                onChange={this.props.update('start_date')}
                />
            </span>

          <button id='part-two-submit' className="button" value='2' onClick={this.props.handleSubmit.bind(this)}>Continue - Step 3</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartTwo);
