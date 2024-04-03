// ProductDetails.js
import React, { useState } from 'react';
import { getProductById } from './api';

function ProductDetails() {
  const [productId, setProductId] = useState('');
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const product = await getProductById(productId);
      setProductDetails(product);
    } catch (error) {
      setError('Error fetching product details');
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productId">Enter Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required /><br />
        <button type="submit">Get Product Details</button>
      </form>
      {error && <div>{error}</div>}
      {productDetails && (
        <div>
          <p>Product ID: {productDetails.productId}</p>
          <p>Name: {productDetails.productName}</p>
          <p>Price: {productDetails.price}</p>
          <p>Quantity: {productDetails.quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
