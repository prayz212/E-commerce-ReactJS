import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductScreen } from "../components/screens";
import { addToCart } from "../redux/actions/cartAction";
import {
  requestProductDetailSuccess,
  requestProductDetailFail,
} from "../redux/actions/productAction";

const ProductPage = ({ match }) => {
  // @ts-ignore
  const { product, error } = useSelector((state) => state.productDetail);
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const BASE_URL = process.env.REACT_APP_BASE_API_URL;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      axios
        .get(`${BASE_URL}/products/${match.params.id}`)
        .then((res) => {
          dispatch(requestProductDetailSuccess(res.data));
        })
        .catch((err) => dispatch(requestProductDetailFail(err)));
    }
  }, [dispatch, match.params.id, product, BASE_URL]);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const existInCart = cartItems.find((item) => item._id === product._id);

  return (
    <ProductScreen
      productDetail={product}
      error={error}
      addToCartHandler={addToCartHandler}
      existInCart={existInCart}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
};
export default ProductPage;
