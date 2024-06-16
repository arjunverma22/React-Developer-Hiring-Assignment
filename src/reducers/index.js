import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  // Add more reducers here if needed
});

export default rootReducer;
