import * as actionTypes from "../constants/productConstant";

export const requestProductsSuccess = (data) => {
  return {
    type: actionTypes.product.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const requestProductsFail = (error) => {
  return {
    type: actionTypes.product.GET_PRODUCTS_FAIL,
    payload: error,
  };
};

export const requestProducts = () => {
  return {
    type: actionTypes.product.GET_PRODUCTS_REQUEST,
    payload: null,
  };
};

export const requestProductDetailSuccess = (product) => {
  return {
    type: actionTypes.productDetail.GET_PRODUCT_DETAILS_SUCCESS,
    payload: product,
  };
};

export const requestProductDetailFail = (error) => {
  return {
    type: actionTypes.productDetail.GET_PRODUCT_DETAILS_FAIL,
    payload: error,
  };
};
