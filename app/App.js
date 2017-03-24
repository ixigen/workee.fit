import React from 'react';
import { connect } from 'react-redux';

// Common / shared modules
import TopBar from 'top-bar/TopBar';
import Footer from 'footer/Footer';
import Navigation from 'Navigation';

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
            <Workouts />
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