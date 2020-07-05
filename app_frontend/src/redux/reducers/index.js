import { combineReducers } from 'redux';
import missingPersons from './MissingPerson';
import userReducer from './userReducer';
import SearchReducer from './searchReducer';
import colorReducer from './colorReducer';
const rootReducer = combineReducers({
        missingPersons,
        userReducer,
        SearchReducer,
        colorReducer
});

export default rootReducer;
