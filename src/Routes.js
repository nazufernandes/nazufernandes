import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './header';
import Footer from './Footer';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
