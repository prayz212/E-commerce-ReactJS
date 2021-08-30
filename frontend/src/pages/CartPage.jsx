import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import { CartScreen } from "../components/screens";

const CartPage = () => {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartDispatcher = useDispatch();

  const qtyChangeHandler = (item) => {
    cartDispatcher(addToCart(item));
  };

  const onRemoveItem = (id) => {
    cartDispatcher(removeFromCart(id));
  };

  const calTotal = (items) => {
    let totalPrices = 0;
    items.forEach((item) => {
      totalPrices += item.quantity * item.price;
    });

    return totalPrices;
  };

  return (
    <CartScreen
      cartItems={cartItems}
      qtyChangeHandler={qtyChangeHandler}
      onRemoveItem={onRemoveItem}
      calTotal={calTotal}
    />
  );
};
export default CartPage;
