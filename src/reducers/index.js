import { combineReducers } from 'redux';

const usersReducer = (state = ["UNO", "DOS", "TRES"], action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    users : usersReducer
})