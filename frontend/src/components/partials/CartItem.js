import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ data, onQuantityChange, onRemoveItem }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={data.imageUrl} alt={data.name} />
      </div>

      <Link to={`product/${data._id}`} className="cartitem__name">
        <p>{data.name}</p>
      </Link>

      <p className="cartitem__price">${data.price}</p>

      <select
        value={data.quantity}
        onChange={(e) =>
          onQuantityChange({ ...data, quantity: parseInt(e.target.value) })
        }
        className="cartItem__select"
      >
        {[...Array(data.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartitem__deleteBtn"
        onClick={() => onRemoveItem(data._id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
