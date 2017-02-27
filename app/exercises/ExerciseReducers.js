import { REQUEST_EXERCISES, RECEIVE_EXERCISES } from './ExerciseActions';

const exercises = (state = { 
    exercises: [],
}, action) => {
    switch (action.type) {
        case REQUEST_EXERCISES:
            return state;
        case RECEIVE_EXERCISES:
            return Object.assign({}, state, {
                exercises: action.exercises,
            });
        default:
            return state;
    }
}

export default exercises;