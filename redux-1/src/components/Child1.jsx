import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../features/cart/cartSlice";

export default function Child1() {
  const dispatch = useDispatch();

  const { cart, cart1, added } = useSelector((state) => state.cart);

  function handleAdd() {
    dispatch(addCart());
  }

  function handleRemove() {
    dispatch(removeCart());
  }

  return (
    <>
      <p>Cart: {cart}</p>
      <p>cart1: {cart1}</p>
      <p>added: {added ? "true" : "false"}</p>

      <button onClick={handleAdd}>addCart</button>
      <button onClick={handleRemove}>removeCart</button>
    </>
  );
}
