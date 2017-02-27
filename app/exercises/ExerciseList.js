import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = React.createClass({
    render() {
        const { exercises }  = this.props;
        return (
            <div>
                { 
                    exercises.map((exercise, i) => (<ExerciseCard key={i} {...exercise} />))
                }
            </div>
        );
    },
});

export default ExerciseList;