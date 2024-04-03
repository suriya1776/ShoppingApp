// ProductForm.js
import React, { useState } from 'react';
import { submitProduct } from './api';
import '../styles/main.css'

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitProduct(productName, productPrice, productQuantity);
      setMessage('Product added successfully!');
      // Clear input fields after successful submission
      setProductName('');
      setProductPrice('');
      setProductQuantity('');
    } catch (error) {
      setMessage('Error adding product');
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="product-form">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="productPrice">Price:</label>
          <input type="number" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="productQuantity">Quantity:</label>
          <input type="number" id="productQuantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} required />
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default ProductForm;
