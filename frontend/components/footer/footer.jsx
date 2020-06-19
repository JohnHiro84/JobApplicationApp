import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (

        <div className="footer">

          <p>Acumen, LLC & The SPHERE Institute is an Equal Opportunity Employer that complies with the laws and regulations set forth in the following EEO Is The Law Poster.</p>
          <p>If you need assistance with the application process due to a disability, please email or call (650) 558-8882 x265.</p>
          <p>Copyright © 2018 Acumen, LLC | All Rights Reserved | Privacy Policy</p>

        </div>
    );
  }
}

export default withRouter(Footer);
