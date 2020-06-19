import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';

import ApplicationContainer from './application/application_container';
import ReviewInformationContainer from './review/review_information_container';
import Success from './review/success';

const App = () => (
  <div>

    <header>
      <GreetingContainer />
    </header>

    <Switch>

      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <ProtectedRoute exact path="/application" component={ApplicationContainer} />
      <ProtectedRoute exact path="/review_information" component={ReviewInformationContainer} />
      <ProtectedRoute exact path="/success" component={Success} />

      <ProtectedRoute exact path="/" component={Home} />

    </Switch>

  </div>
);

export default App;
