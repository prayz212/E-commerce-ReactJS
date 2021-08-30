import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = ({ show, listOnClickHanlder }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={listOnClickHanlder}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">
                {cartItems ? cartItems.length : 0}
              </span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
