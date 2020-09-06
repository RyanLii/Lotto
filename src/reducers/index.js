import { combineReducers } from 'redux';
import { drawResultReducer } from './drawResult.reducer';

const rootReducer = combineReducers({
  drawResults: drawResultReducer,
});
export default rootReducer;
