import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from 'screens';

export class App extends Component {
  render() {
    // Checks if homepage in package.json exists
    const basename = process.env.PUBLIC_URL || undefined;

    return (
      <Router basename={basename}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
