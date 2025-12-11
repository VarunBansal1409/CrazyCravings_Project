import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, increaseQty, decreaseQty, removeFromCart, totalAmount } =
    useCart();

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [name, setName] = useState(user.name || "");

  return (
    <>
      <div className="nav">
        <div className="logo-text" onClick={() => navigate("/")}>
          CrazyCravings
        </div>

        <div className="checkout">SECURE CHECKOUT</div>

        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <button className="signin">Sign in</button>
        </div>
      </div>

      <div className="delivery-details">
        {/* LEFT — DELIVERY FORM */}
        <div className="details-container">
          <h2>Delivery Details</h2>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />

            <label>Address</label>
            <input type="text" placeholder="Enter your address" />

            <label>Special Instructions</label>
            <textarea placeholder="Any special instructions?" rows="3"></textarea>
          </div>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="checkout-container">
          <h2>Order Summary</h2>

         
              {/* CART ITEMS BELOW */}
               
         <div className="cart-container">
        {cart.length === 0 && <p>Your cart is empty.</p>}

        <div className="checkout-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image.startsWith("http") ? item.image : `/images/${item.image}`}
              alt={item.name}
              className="cart-img"
            /> 

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

              <div className="qty-buttons">
                <button onClick={() => decreaseQty(item.id)}>
                  <FaMinus size={10}/>
                </button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>
                  <FaPlus size={10}/>
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}>
                REMOVE
              </button>
               </div>
        ))}
        </div>

              {/* TOTAL AT BOTTOM */}
              <div className="bottom">
              <div className="checkout-total">Total: ₹{totalAmount}</div>
              <div className="checkout-btn">CHECKOUT</div>
              </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
