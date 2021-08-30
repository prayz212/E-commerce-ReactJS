import { Link } from "react-router-dom";
import ErrorScreen from "./ErrorScreen";
import "./ProductScreen.css";

const ProductScreen = ({
  productDetail,
  error,
  quantity,
  setQuantity,
  existInCart,
  addToCartHandler,
}) => {
  return (
    <>
      {error ? (
        <ErrorScreen error={error} />
      ) : (
        <div className="productscreen">
          <div className="productscreen__left">
            <div className="left__image">
              <img src={productDetail.imageUrl} alt={productDetail.name} />
            </div>

            <div className="left__info">
              <p className="left__name">{productDetail.name}</p>
              <p>Price: ${productDetail.price}</p>
              <p>{productDetail.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${productDetail.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {productDetail.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Quantity:
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[...Array(productDetail.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                {existInCart === undefined ? (
                  <button type="button" onClick={addToCartHandler}>
                    Add to cart
                  </button>
                ) : (
                  <button type="button">
                    <Link to="/cart">Go to cart</Link>
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductScreen;
