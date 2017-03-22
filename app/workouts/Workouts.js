import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchWorkouts} from './workoutActions';

import Search from 'search/Search';
import Workout from './Workout';

const Workouts = React.createClass({
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchWorkouts());
    },

    render() {
        const {workouts} = this.props;
        return(
            <div>
                <Search
                    placeholderText="What's your setup?"
                    {...this.props} />
                <div className="mdl-grid">
                    {workouts.map((workout, i) => (<Workout key={i} {...workout} />))}
                </div>

                <Route path="/workout/:id" component={Workout} />
            </div>
        );
    }
});

const filterWorkouts = (workouts, query) => workouts.filter((workout) => query === 'ALL' || workout.name.indexOf(query) !== -1);

const mapStateToProps = (state) => ({
    workouts: filterWorkouts(state.workouts, state.query)
});

export default connect(mapStateToProps)(Workouts);