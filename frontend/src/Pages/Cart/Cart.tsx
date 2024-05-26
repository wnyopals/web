import { useSelector } from "react-redux"
import { RootState } from "../../store"

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const subtotal: number = cart.reduce<number>((sum, current) => sum + current.price, 0)
    return (
    <div>
      <h1>Cart</h1>
      {
        cart.map(item => (
            <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <p>{item.price}</p>
            </div>
        ))
      }
      <h2>Subtotal</h2>
      <p>{subtotal}</p>
    </div>
  )
}

export default Cart
