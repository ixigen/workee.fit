import fetch from 'isomorphic-fetch';

export const REQUEST_EXERCISES = 'REQUEST_EXERCISES';
export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';

export const requestExercises = () => ({
    type: REQUEST_EXERCISES,
});

export const receiveExercises = (exercises) => ({
    type: RECEIVE_EXERCISES,
    exercises,
});

export const fetchExercises = () => dispatch => {
    dispatch(requestExercises());
    return fetch('../resources/data/exercises.json')
        .then(response => response.json())
        .then(json => dispatch(receiveExercises(json)))
}