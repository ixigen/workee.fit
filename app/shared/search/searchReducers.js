import { SET_QUERY } from './searchActions';

const query = (state = 'ALL', action) => {
    switch (action.type) {
        case SET_QUERY:
            return action.query;
        default:
            return state;
    }
};

export default query;