import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
  isLoading = true,
  name = null,
  description = null,
  price = null,
  imageUrl = null,
  productId = null,
}) => {
  return (
    <div className="product">
      <img
        className={isLoading ? "skeleton skeleton__image" : ""}
        src={imageUrl}
        alt={name}
      />

      <div className="product__info">
        <p
          className={
            isLoading ? "skeleton skeleton__single_line" : "info__name"
          }
        >
          {name}
        </p>
        <p
          className={
            isLoading ? "skeleton skeleton__multiple_line" : "info__description"
          }
        >
          {description}
        </p>
        <p
          className={
            isLoading ? "skeleton skeleton__single_line" : "info__price"
          }
        >
          {price ? "$" + price : ""}
        </p>

        <Link
          to={`/product/${productId}`}
          className={
            isLoading ? "skeleton skeleton__single_line" : "info__button"
          }
        >
          {isLoading ? "" : "View"}
        </Link>
      </div>
    </div>
  );
};

export default Product;
