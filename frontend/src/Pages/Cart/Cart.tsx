import { useSelector } from "react-redux";
import { RootState } from "../../store";

import "./Cart.css"
import { AddressElement, Elements, PaymentElement} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const subtotal: number = Math.round(cart.reduce<number>(
    (sum, current) => sum + current.price,
    0
  ));
  const stripePromise = loadStripe(`pk_test_51PLDstP6YFbHfJ6EmtPaRqVgEGcNRtx7fnYjiDUQSuTOGplgoM5H11LtpXlE1XbiSqH0O6E33i7xx8f1qJnswx7Y00S69kQ4Eb`);
  return (
    <div className="cart-page">
        <AddressElement options={{mode: 'billing'}}/>
        <PaymentElement />
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
        {/* <div className="actions">
            <button>Checkout now</button>
        </div> */}
        <Elements stripe={stripePromise}> 
            <AddressElement options={{mode: "billing"}}/>
        </Elements>
      </div>
    </div>
  );
};

export default Cart;
