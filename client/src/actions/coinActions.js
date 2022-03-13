import axios from "axios";
import {
  COIN_ADD_FAIL,
  COIN_ADD_REQUEST,
  COIN_ADD_SUCCESS,
  COIN_GET_FAIL,
  COIN_GET_REQUEST,
  COIN_GET_SUCCESS,
  REMOVE_ERROR,
} from "../types";

export const coinAdd = (coinData) => async (dispatch) => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    dispatch({ type: COIN_ADD_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-key": userInfo.token,
      },
    };
    const { data } = await axios.post("/api/coins", coinData, config);
    dispatch({ type: COIN_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COIN_ADD_FAIL,
      payload: error.response.data.msg,
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ERROR,
      });
    }, 7000);
  }
};

export const coinGet = () => async (dispatch) => {
  try {
    dispatch({ type: COIN_GET_REQUEST });
    const { data } = await axios.get(`/api/coins`);
    dispatch({
      type: COIN_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: COIN_GET_FAIL, payload: error.response });
  }
};

export const removeError = () => (dispatch) => {
  dispatch({ type: REMOVE_ERROR });
};
