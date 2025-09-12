import { useContext } from "react";
import image from "../Assets/p_img1.png";
import { CartContext } from "../Components/Context/CartContext";
const Cart = () => {
  const { removeFromCart, cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="container">
      <h3 className="mt-3 text-center">
        <span style={{ color: "#989797ff" }}>YOUR </span>CART
      </h3>
      <hr
        style={{
          width: "120px",
          height: "2px",
          backgroundColor: "#515a69ff",
          margin: "0 auto 20px",
          borderRadius: "10px",
        }}
      />
      <div className="cart d-flex justify-content-between align-items-center pt-4 fw-semibold fs-5">
        <p>Product Image</p>
        <p className="d-none d-md-block">Product Name</p>
        <p>Product Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="my-1" />
      {cartItems.map((item) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center px-2">
              <img
                style={{ width: "60px" }}
                className="rounded-1"
                src={item.image}
                alt="Product Image"
              />
              <p className="d-none d-md-block">{item.name}</p>
              <p>$ {item.price}</p>
              <p className="border py-2 px-3">{item.quantity}</p>
              <p>$ {item.price * item.quantity}</p>
              <i
                onClick={() => removeFromCart(item.id)}
                className="fa fa-trash fs-5"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <hr className="my-1" />
          </>
        );
      })}
      <div className="w-100">
        <h3 className="mt-5">
          <span style={{ color: "#989797ff" }}>CART </span>TOTAL
        </h3>
        <hr
          style={{
            width: "120px",
            height: "2px",
            backgroundColor: "#515a69ff",
            margin: "0 20px 20px",
            borderRadius: "10px",
          }}
        />
        <div className="cart-total w-50">
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <hr className="mt-0 mb-1" />
          <div className="d-flex justify-content-between">
            <p>Shipping Fee</p>
            <p>$ 10.00</p>
          </div>
          <hr className="mt-0 mb-1" />
          <div className="d-flex justify-content-between fw-bold">
            <p>Total</p>
            <p>${totalPrice !== 0 ? totalPrice + 10 : 0}</p>
          </div>
          <button className="bg-black border border-2 border-black text-white px-3 py-2 mt-4 mb-5">
            PROCCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
