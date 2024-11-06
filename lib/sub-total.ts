import { cart } from "./types/query";

const subTotal = (cartItems: cart[]) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return subtotal;
};

export default subTotal;
