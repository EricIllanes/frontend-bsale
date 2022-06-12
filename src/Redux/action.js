import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CLEAN_RESULT = "CLEAN_RESULT";
export const GET_CATEGORY = "GET_CATEGORY";
export const FILTERED_PRODUCT = "FILTERED_PRODUCT";
export const ORDER_PRODUCT = "ORDER_PRODUCT";
const {REACT_APP_BACKEND_URL} = process.env

export function getAllProduct() {
  return async function (dispatch) {
    try {
      let allProduct = await axios.get(`${REACT_APP_BACKEND_URL}/product`);
      return dispatch({
        type: GET_PRODUCT,
        payload: allProduct.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchProduct(search) {
  return async function (dispatch) {
    try {
      let productFound = await axios.get(
        `${REACT_APP_BACKEND_URL}/productsearch?name=` + search
      );
      return dispatch({
        type: SEARCH_PRODUCT,
        payload: productFound.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCategory() {
  return async function (dispatch) {
    try {
      let allCategory = await axios.get(`${REACT_APP_BACKEND_URL}/category`);
      return dispatch({
        type: GET_CATEGORY,
        payload: allCategory.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanSearch() {
  return function (dispatch) {
    try {
      return dispatch({
        type: CLEAN_RESULT,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterProduct(payload) {
  return {
    type: FILTERED_PRODUCT,
    payload: payload,
  };
}

export function orderProduct(payload) {
  return {
    type: ORDER_PRODUCT,
    payload: payload,
  };
}
