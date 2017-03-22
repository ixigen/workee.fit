import fetch from 'isomorphic-fetch';

// ACTIONS ----------------------------------------
export const REQUEST_WORKOUTS = 'REQUEST_WORKOUTS';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';

// ACTION CREATORS ----------------------------------------
export const requestWorkouts = () => ({
    type: REQUEST_WORKOUTS,
});

export const receiveWorkouts = (workouts) => ({
    type: RECEIVE_WORKOUTS,
    workouts,
});

export const fetchWorkouts = _ => dispatch => {
    dispatch(requestWorkouts());
    return fetch('/workouts.json')
        .then(response => response.json())
        .then(json => dispatch(receiveWorkouts(json)));
};