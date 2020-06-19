import React from 'react';

import { withRouter } from 'react-router-dom';
// import {validatePart1Information} from './validation.js';

class PartOne extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { appState } = this.props;

    return (
      <section id="part-one-section">

        <form className="part-one-form" onSubmit={this.props.handleSubmit}>

            <p>Required fields are marked with an asterisk (<span className='red-star'>*</span>). </p>

            <span className="input-cell">
              <label htmlFor="prefix">Prefix:</label>

              <select name='prefix' id="prefix" value={appState.prefix} onChange={this.props.update('prefix')}>
                <option value="" disabled > -- select -- </option>
                <option value="Dr." >Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Miss">Miss</option>

              </select>
            </span>


            <span className={appState.errors.includes('first_name') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('first_name') ? <p className="errors-text"> Please Enter First Name</p> : ""}
              <label htmlFor="first-name">First Name <span className='red-star'>*</span></label>

              <input
                id = "first-name"
                type="text"
                value={appState.first_name}
                placeholder={appState.first_name}
                onChange={this.props.update('first_name')}
                />
            </span>


            <span className="input-cell">

              <label htmlFor="middle-name">Middle Name</label>

              <input
                id = 'middle-name'
                type="text"
                value={appState.middle_name}
                placeholder={appState.middle_name}
                onChange={this.props.update('middle_name')}
                />
            </span>

            <span className={appState.errors.includes('last_name') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('last_name') ? <p className="errors-text"> Please Enter Last Name</p> : ""}
              <label htmlFor="last-name">Last Name <span className='red-star'>*</span></label>
              <input
                id= 'last-name'
                type="text"
                value={appState.last_name}
                placeholder={appState.last_name}
                onChange={this.props.update('last_name')}
              />
            </span>


            <span className="input-cell">
              <label htmlFor="suffix">Suffix:</label>
              <input
                id="suffix"
                type="text"
                value={appState.suffix}
                placeholder={appState.suffix}
                onChange={this.props.update('suffix')}
              />
            </span>

            <span className={appState.errors.includes('country') ? "input-cell errors" : "input-cell"}>
              {appState.errors.includes('country') ? <p className="errors-text"> Please select a Country</p> : ""}
              <label htmlFor="country">Country of residence <span className='red-star'>*</span></label>

              <select name='country' id="country" value={appState.country} onChange={this.props.update('country')}>
                <option value="" disabled > -- select -- </option>
                <option value="United States" >United States</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Turkey">Turkey</option>
                <option value="Sweden">Sweden</option>
                <option value="South Africa">South Africa</option>
                <option value="Romania">Romania</option>
                <option value="Phillipines">Phillipines</option>
                <option value="Morocco">Morocco</option>
              </select>
            </span>


            <span className={appState.errors.includes('address_line1') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('address_line1') ? <p className="errors-text"> Please Enter Your Address</p> : ""}
              <label htmlFor="address_line1">Address <span className='red-star'>*</span></label>
              <input
                id= 'address_line1'
                type="text"
                value={appState.address_line1}
                placeholder={appState.address_line1}
                onChange={this.props.update('address_line1')}
                />
            </span>

            <span className="input-cell">

              <input
                id= 'address_line2'
                type="text"
                value={appState.address_line2}
                placeholder={appState.address_line2}
                onChange={this.props.update('address_line2')}
              />
            </span>

            <span className={appState.errors.includes('city') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('city') ? <p className="errors-text"> Please Enter Your City</p> : ""}

              <label htmlFor="last-name">City <span className='red-star'>*</span></label>
              <input
                id= 'city'
                type="text"
                value={appState.city}
                placeholder={appState.city}
                onChange={this.props.update('city')}
              />
            </span>

            <span className={appState.errors.includes('state_location') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('state_location') ? <p className="errors-text"> Please Enter Your State/Location</p> : ""}
              <label htmlFor="state_location">State/Location <span className='red-star'>*</span></label>

              <select name='state_location' id="state_location" value={appState.state_location} onChange={this.props.update('state_location')}>
                <option value="" disabled > -- select -- </option>
                <option value="California" >California</option>
                <option value="Alabama">Alabama</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Kansas">Kansas</option>
                <option value="Maryland">Maryland</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New York">New York</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Ohio">Ohio</option>
              </select>
            </span>

            <span className="input-cell">

              <label htmlFor="postal-code">Postal Code</label>
              <input
                id= 'postal_code'
                type="text"
                value={(appState.postal_code) ? appState.postal_code : " " }
                placeholder={""}
                onChange={this.props.update('postal_code')}
              />
            </span>

            <span className={appState.errors.includes('contact_method') ? "input-cell errors" : "input-cell"}>

              {appState.errors.includes('contact_method') ? <p className="errors-text"> Please Enter Your Preferred Mode of Contact</p> : ""}
              <label htmlFor="contact-method">Primary Contact Method <span className='red-star'>*</span></label>

              <select name='contact_method' id="contact_method" value={appState.contact_method} onChange={this.props.update('contact_method')}>
                <option value="" disabled > -- select -- </option>
                <option value="Primary Phone" >Primary Phone</option>
                <option value="Email">Email</option>
                <option value="Secondary Phone">Secondary Phone</option>
                <option value="Home Address">Home Address</option>

              </select>
            </span>

            <span className={appState.errors.includes('primary_phone') ? "input-cell errors" : "input-cell"}>
              {appState.errors.includes('primary_phone') ? <p className="errors-text"> Please Enter a valid phone number</p> : ""}
              <label htmlFor="primary_phone">Primary Phone <span className='red-star'>*</span></label>
              <input
                id= 'primary_phone'
                type="text"
                value={appState.primary_phone}
                placeholder={""}
                onChange={this.props.update('primary_phone')}
              />

            </span>

            <span className="input-cell">

              <label htmlFor="secondary_phone">Secondary Phone:</label>
              <input
                id= 'secondary_phone'
                type="text"
                value={appState.secondary_phone}
                placeholder={""}
                onChange={this.props.update('secondary_phone')}
              />

            </span>

            <p className="input-general-text">In order to update your submission at a later time or to submit
            the same profile for interest in another position, you will need to
            provide an email address.
            </p>

            <span className={appState.errors.includes('email') ? "input-cell errors" : "input-cell"}>
              {appState.errors.includes('email') ? <p className="errors-text"> Please Enter Your Email</p> : ""}
              <label htmlFor="email">Email Address<span className='red-star'>*</span></label>
              <input
                id= 'email'
                type="text"
                value={appState.email}
                placeholder={""}
                onChange={this.props.update('email')}
              />

            </span>


          <button id='part-one-submit' className="button" value='1' onClick={this.props.handleSubmit}>Continue - Step 2</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PartOne);
