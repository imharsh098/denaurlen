import {
  REMOVE_ERROR,
  COIN_ADD_FAIL,
  COIN_ADD_REQUEST,
  COIN_ADD_SUCCESS,
  COIN_GET_FAIL,
  COIN_GET_REQUEST,
  COIN_GET_SUCCESS,
} from "../types";

export const coinReducer = (state = {}, action) => {
  switch (action.type) {
    case COIN_ADD_REQUEST:
      return { loading: true };
    case COIN_ADD_SUCCESS:
      return { loading: false, coinData: action.payload };
    case COIN_ADD_FAIL:
      return { loading: false, error: action.payload };
    case REMOVE_ERROR:
      return { ...state, error: null };
    case COIN_GET_REQUEST:
      return { loading: true };
    case COIN_GET_SUCCESS:
      return { loading: false, coinData: action.payload };
    case COIN_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
