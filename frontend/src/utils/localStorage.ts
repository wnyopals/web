import { cartState } from "../store/cart";

export function loadCartState(): cartState {
  try {
    const cart = localStorage.getItem("cart");
    console.log("Cart", cart)
    if (cart === null) return {cart: [], clientSecret: "", amount: 0.00};
    const parsedCartState: cartState = JSON.parse(cart);
    return parsedCartState;
  } catch (e) {
    console.error("Cart could not be loaded from local storage");
    return {cart: [], clientSecret: "", amount: 0.00};
  }
}

export function saveCartState(state: cartState) {
  try {
    const cart = JSON.stringify({cart: state.cart, clientSecret: state.clientSecret});
    localStorage.setItem("cart", cart);
  } catch (e) {
    console.error("Could not save cart to local storage", e);
  }
}
