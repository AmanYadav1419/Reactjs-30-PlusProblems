// question :- Implement a shopping cart using context and a reducer, with features like adding,removing, and updating items in cart.

import React, { useState } from "react";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    // checcking if product is existed already or not
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };

  //   update quantity
  const updateQuantity = (ItemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: ItemId, quantity },
      });
    }
  };

// remove from cart
const RemoveFromCart = (ItemId) => {
    cartDispatch({type:'REMOVE_FROM_CART', payload:ItemId})
} 

  // sample products for this
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product E" },
    { id: 6, name: "Product F" },
    { id: 7, name: "Product G" },
    { id: 8, name: "Product H" },
  ];
  return (
    <div>
      <h2>ShoppingCart</h2>

      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={()=> RemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Product list</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
