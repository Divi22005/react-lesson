import React, { useState } from "react";

export default function App10() {
  const productsData = [
    { name: "Product1", price: 25 },
    { name: "Product2", price: 50 },
  ];

  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    const existing = cart.find((item) => item.name === product.name);
    if (existing) {
      const updated = cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <div>
      <h1>Products</h1>
      {productsData.map((product) => (
        <div key={product.name}>
          {product.name} - ${product.price}{" "}
          <button onClick={() => handleAdd(product)}>Add</button>
        </div>
      ))}

      <hr />
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ol>
          {cart.map((item) => (
            <li key={item.name}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => decrement(item.name)}>-</button>{" "}
              {item.quantity}{" "}
              <button onClick={() => increment(item.name)}>+</button>{" "}
              = Total: ${item.price * item.quantity}{" "}  
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
