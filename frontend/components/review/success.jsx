import React from 'react';

import { withRouter } from 'react-router-dom';

class Success extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {

    return (
      <section id="success" className="container">

        <p>Your application has been successfully submitted</p>
        <p>Thank you for applying to Acumen</p>

      </section>
    );
  }
}

export default withRouter(Success);
