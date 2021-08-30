import { CartItem } from "../partials";
import "./CartScreen.css";

const CartScreen = ({
  cartItems,
  qtyChangeHandler,
  onRemoveItem,
  calTotal,
}) => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            data={item}
            onQuantityChange={qtyChangeHandler}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Total ({cartItems.length}) items</p>
          <p>$ {calTotal(cartItems)}</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
