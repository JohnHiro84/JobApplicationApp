import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className ='login-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Acumen Technologies
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {(this.props.errors.length > 0) ?this.renderErrors() : ""}
          <div className="login-form">
            <br/>
            <label>Username:</label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />

            <br/>
            <label>Password:</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />

            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
