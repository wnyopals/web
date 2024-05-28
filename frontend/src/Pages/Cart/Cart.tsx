import { useSelector } from "react-redux";
import { RootState } from "../../store";

import "./Cart.css"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const subtotal: number = Math.round(cart.reduce<number>(
    (sum, current) => sum + current.price,
    0
  ));
  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div className="cart-item">
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="cart-overview">
        <div className="total">
            <h2>Subtotal</h2>
            <p>{subtotal}</p>
        </div>
        <div className="actions">
            <button>Checkout now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
