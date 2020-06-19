import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render(){

    return (
      <section className="home-container container">
        <h1>Job Description</h1>

        <h1>The Front-End Application Developer I, under the direction of the
        AppDev Manager of Development, will work with an agile software development
        team on front-end requirements, delivering technical application solutions
        to internal and external clients.
        </h1>
        <h2>Responsibilities</h2>

        <p>Design and develop features to meet customer requirements and business goals
        Build high quality and highly reliable software to meet the needs of the product owners
        Write clean, elegant, and reusable code that solves complex problems
        Participate in design & code review processes</p>

        <h2>Qualifications</h2>
        <ul>
          <li>Excellent problem solving skills</li>
          <li>HTML, CSS, JavaScript</li>
          <li>AngularJS, React JS, Vue JS, D3</li>
          <li>Relational databases like PostgreSQL</li>
          <li>At least one MVC server side framework like rails or Django</li>
        </ul>

        <h2>Education & Experience</h2>
        <ul>
          <li>Bachelors degree in Computer Science / related field or equivalent experience</li>
          <li>0-2+ years of software development experience</li>
        </ul>

        <h2>Location</h2>
        <p>The AppDev department is located in our headquarters in Burlingame, CA –
        just south of the San Francisco International Airport.
        We do have a Washington, DC office and are currently in the process of
        opening an office in Los Angeles, CA.</p>

        <p>While Burlingame is the preferred location for most AppDev positions,
        we are willing to consider our other offices for exceptionally qualified
        and experienced candidates. Candidates looking to start in Burlingame and
        potentially transfer to another location are also encouraged.</p>

        <ul>
          <li>Job Location</li>
          <li>Burlingame, California, United States</li>
          <li>Position Type</li>
          <li>Full-Time/Regular</li>
        </ul>
        <Link className="apply-link" to="/application">Apply</Link>

        <Footer />

      </section>
    );
  }
}

export default Home;
