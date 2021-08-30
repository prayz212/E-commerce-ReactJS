import * as actionTypes from "../constants/productConstant";

const productInitialState = {
  loading: null,
  productList: [],
  error: null,
};

export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case actionTypes.product.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: [...action.payload],
        loading: false,
      };
    case actionTypes.product.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.product.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const productDetailInitialState = {
  product: {},
  error: null,
};

export const productDetailReducer = (
  state = productDetailInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.productDetail.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.productDetail.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
