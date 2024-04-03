// Payment.js
import React, { useState } from 'react';
import { postPayment } from './api';

function Payment() {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postPayment({ orderId, amount, referenceNumber, paymentMode });
      setMessage('Payment successful!');
    } catch (error) {
      setMessage('Error processing payment');
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="orderId">Order ID:</label>
        <input type="text" id="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} required /><br />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required /><br />

        <label htmlFor="referenceNumber">Reference Number:</label>
        <input type="text" id="referenceNumber" value={referenceNumber} onChange={(e) => setReferenceNumber(e.target.value)} required /><br />

        <label htmlFor="paymentMode">Payment Mode:</label>
        <input type="text" id="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required /><br />

        <button type="submit">Submit Payment</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default Payment;
