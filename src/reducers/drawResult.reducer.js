import { createReducer } from './utils';
import { FETCH_LATEST_LOTTO } from '../actions/types';

const initialState = {};

const fetchLatestLotto = (currentState, action) => {
  const { drawResults } = action;
  return {
    ...drawResults,
  };
};

export const drawResultReducer = createReducer(initialState, {
  [FETCH_LATEST_LOTTO]: fetchLatestLotto,
});
export default drawResultReducer;
