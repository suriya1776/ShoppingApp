// order.js

import React, { useState } from 'react';
import { postOrder } from './api';

function Order() {
  const [productId, setProductId] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postOrder(productId, totalAmount, quantity, paymentMode);
      setMessage('Order placed successfully!');
    } catch (error) {
      setMessage('Error placing order');
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
      <h1>Place Order</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required /><br />

        <label htmlFor="totalAmount">Total Amount:</label>
        <input type="number" id="totalAmount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required /><br />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /><br />

        <label htmlFor="paymentMode">Payment Mode:</label>
        <input type="text" id="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required /><br />

        <button type="submit">Place Order</button>
      </form>
      <div id="message">{message}</div>
    </div>
  );
}

export default Order;
