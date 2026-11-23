 import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(

    (total, item) => total + item.quantity, 0

  );

  const totalCost = cartItems.reduce(

    (total, item) => total + item.price * item.quantity, 0

  );

  const handleIncrease = (item) => {

    dispatch(updateQuantity({

      id: item.id,

      quantity: item.quantity + 1

    }));

  };

  const handleDecrease = (item) => {

    if (item.quantity > 1) {

      dispatch(updateQuantity({

        id: item.id,

        quantity: item.quantity - 1

      }));

    } else {

      dispatch(removeItem(item.id));

    }

  };

  const handleDelete = (id) => {

    dispatch(removeItem(id));

  };

  return (

    <div className="cart-container">

      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalItems}</h2>

      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>

      {cartItems.map((item) => (

        <div className="cart-item" key={item.id}>

          <img

            src={item.image}

            alt={item.name}

            width="100"

 />

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => handleDecrease(item)}>

            -

          </button>

          <button onClick={() => handleIncrease(item)}>

            +

          </button>

          <button onClick={() => handleDelete(item.id)}>

            Delete

          </button>

          <p>

            Subtotal: ${(item.price * item.quantity).toFixed(2)}

          </p>

        </div>

      ))}

      <button onClick={() => alert('Coming Soon!')}>

        Checkout

      </button>

      <button onClick={() => window.history.back()}>

        Continue Shopping

      </button>

    </div>

  );

}

export default CartItem;
