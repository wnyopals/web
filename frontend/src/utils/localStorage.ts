import { listing } from "../../types/Listing";
import { cartState } from "../store/cart";

export function loadCartState(): listing[] {
  try {
    const cart = localStorage.getItem("cart");
    console.log("Cart", cart)
    if (cart === null) return [];
    const parsedCart: listing[] = JSON.parse(cart);
    return parsedCart;
  } catch (e) {
    console.error("Cart could not be loaded from local storage");
    return [];
  }
}

export function saveCartState(state: cartState) {
  try {
    const cart = JSON.stringify(state.cart);
    localStorage.setItem("cart", cart);
  } catch (e) {
    console.error("Could not save cart to local storage", e);
  }
}
