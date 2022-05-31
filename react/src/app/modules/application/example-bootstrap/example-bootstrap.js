import React from 'react';
import { Link } from 'react-router-dom';

import ExampleBootstrapRouting from './example-bootstrap-routing';

import './example-bootstrap.css';

class ExampleBootstrap extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="main">main</Link></li>
          <li><Link to="accordions">accordions</Link></li>
          <li><Link to="alerts">alerts</Link></li>
        </ul>
        <h4>Child Routes Result</h4>
        <ExampleBootstrapRouting />
      </div>
    )
  }
}

export default ExampleBootstrap;