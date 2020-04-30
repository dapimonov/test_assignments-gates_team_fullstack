import { combineReducers } from 'redux';
import { metricsReducer } from "./metrics";

export const rootReducer = combineReducers ({
  metrics: metricsReducer,
});
