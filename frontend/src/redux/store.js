import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import {
  productReducer,
  productDetailReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productDetail: productDetailReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
