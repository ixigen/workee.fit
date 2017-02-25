import { REQUEST_EXERCISES, RECEIVE_EXERCISES } from './ExerciseActions';

export const exercises = (state = { 
    isFetching: false, 
    didInvalidate: false, 
    items: [],
}, action) => {
    switch (action.type) {
        case REQUEST_EXERCISES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case RECEIVE_EXERCISES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.exercises,
            });
        default:
            return state;
    }
}
