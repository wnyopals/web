import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import "./Cart.css"
import { setAmount } from "../../store/cart";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const subtotal: number = useSelector((state: RootState) => state.cart.amount)
  dispatch(setAmount(subtotal))



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
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
