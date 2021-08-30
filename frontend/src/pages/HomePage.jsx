import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeScreen } from "../components/screens";
import {
  requestProductsSuccess,
  requestProducts,
  requestProductsFail,
} from "../redux/actions/productAction";

const HomePage = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { productList, loading, error } = useSelector((state) => state.product);
  const BASE_URL = process.env.REACT_APP_BASE_API_URL;

  useEffect(() => {
    dispatch(requestProducts());
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        dispatch(requestProductsSuccess(res.data));
      })
      .catch((err) => dispatch(requestProductsFail(err)));
  }, [dispatch, BASE_URL]);

  return <HomeScreen products={productList} loading={loading} error={error} />;
};

export default HomePage;
