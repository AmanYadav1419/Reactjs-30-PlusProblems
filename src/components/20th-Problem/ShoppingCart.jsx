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
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: ItemId })
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
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-3xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Catalog */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Catalog</h2>
          <ul className="flex flex-col gap-2">
            {products.map((product) => (
              <li key={product.id} className="flex items-center justify-between px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl">
                <span className="text-sm text-zinc-200 font-medium">{product.name}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg font-medium transition-all"
                >
                  + Add
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Cart</h2>
            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
              {cartState.cartItems.length} items
            </span>
          </div>
          {cartState.cartItems.length === 0 ? (
            <p className="text-center text-zinc-600 text-sm py-6">Cart is empty. Add items from the catalog.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {cartState.cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl gap-2">
                  <span className="text-sm text-zinc-200 font-medium flex-1 truncate">{item.name}</span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 text-lg flex items-center justify-center transition-colors">-</button>
                    <span className="w-6 text-center text-sm font-mono font-medium text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 text-lg flex items-center justify-center transition-colors">+</button>
                  </div>
                  <button onClick={() => RemoveFromCart(item.id)} className="text-xs text-zinc-600 hover:text-red-400 font-medium transition-colors ml-1">✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
