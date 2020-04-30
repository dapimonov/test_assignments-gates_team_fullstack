import * as constants from '../constants';

const initialState = {
  metrics: {},
  loading: false,
  error: '',
};

export function metricsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.METRICS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case constants.METRICS_SUCCESS:
      return {
        ...state,
        loading: false,
        metrics: action.payload,
      };
    case constants.METRICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
