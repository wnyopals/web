import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import "./Cart.css"
import { setAmount } from "../../store/cart";
import ImageSlideShow from "../../components/ImageSlideShow/ImageSlideShow";
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
            <div className="item-photos">
              <ImageSlideShow images={
                [
                  "https://i.ibb.co/yf6gYkm/F583-F9-CD-C3-B7-4803-A353-319-A3-F1-FB959-1-201-a.jpg",
                  "https://i.ibb.co/Y0fxXvb/9-B5-A39-F3-43-F3-48-B9-8-F7-F-E312-B6403-EF1-1-201-a.jpg",
                  "https://i.ibb.co/Nx7YMVB/5-A5-ED896-5317-46-D2-B6-B1-9-ECBE4-CE9535-1-201-a.jpg",
                ]
              } imageHeight={200} imageWidth={200} />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
              <p>{item.price}</p>
            </div>
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
