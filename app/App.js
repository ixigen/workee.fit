import React from 'react';
import { connect } from 'react-redux';
import Search from './search/Search';
import ExerciseList from './exercises/ExerciseList';
import { fetchExercises } from './exercises/ExerciseActions';

const App = React.createClass({
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchExercises());
  },
  
  render() {
    return (
      <div>
        <h1>Workee.fit</h1>
        <Search />
        <ExerciseList { ...this.props }/>
      </div>
    );
  }
})

const mapStateToProps = (state, ownProps) => {
  const { exercises } = state || {
    exercises: [],
  };

  return {
    exercises,
  };
};

export default connect(mapStateToProps)(App);