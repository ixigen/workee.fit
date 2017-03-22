import { REQUEST_WORKOUTS, RECEIVE_WORKOUTS } from './workoutActions';

const workouts = (state = {
    workouts: [],
}, action) => {
    switch (action.type) {
        case REQUEST_WORKOUTS:
            return state;
        case RECEIVE_WORKOUTS:
            return [...action.workouts];
        default:
            return state;
    }
}

export default workouts;