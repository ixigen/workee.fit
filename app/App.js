import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router';

import TopBar from 'top-bar/TopBar';
import Footer from 'footer/Footer';
import Navigation from 'Navigation';

import Stretches from './stretches/Stretches';
import Workouts from './workouts/Workouts';

import './App.css';

const App = React.createClass({

  render() {
    const title="Workee.fit"
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <TopBar title={title} />
          <Navigation title={title}/>

          <div className="mdl-layout__content">
            <Route path="/stretching" component={Stretches} />
            <Route path="/workout" component={Workouts} />
          </div>

          <Footer />
      </div>
    );
  }
})

const mapStateToProps = (state, ownProps) => {
  const { query } = state || {
    query: 'ALL',
  };

  return {
    query,
  };
};

export default connect(mapStateToProps)(App);