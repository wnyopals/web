import { cartState } from "../store/cart";

export function loadCartState(): cartState {
  try {
    const cart = localStorage.getItem("cart");
    console.log("Cart", cart)
    if (cart === null) return {cart: [], amount: 0.00};
    const parsedCartState: cartState = JSON.parse(cart);
    return parsedCartState;
  } catch (e) {
    console.error("Cart could not be loaded from local storage");
    return {cart: [], amount: 0.00};
  }
}

export function saveCartState(state: cartState) {
  try {
    const cart = JSON.stringify({cart: state.cart, amount: state.amount});
    localStorage.setItem("cart", cart);
  } catch (e) {
    console.error("Could not save cart to local storage", e);
  }
}
