// api.js

import { PRODUCT_URL, PAYMENT_URL,ORDER_URL  } from './apiConfig.js';

export async function submitProduct(productName, productPrice, productQuantity) {
    const productData = {
      name: productName,
      price: productPrice,
      quantity: productQuantity
    };
  
    const response = await fetch(`${PRODUCT_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
  
    return response.json();
  }
  
  export async function getProductById(productId) {
    const response = await fetch(`${PRODUCT_URL}/product/${productId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
  
    return response.json();
  }


// api.js// Change this to your actual API URL

export async function postPayment(paymentData) {
  try {
    console.log(paymentData)
    const response = await fetch(`${PAYMENT_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
      throw new Error('Failed to process payment');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error processing payment: ' + error.message);
  }
}


export async function postOrder(productId, totalAmount, quantity, paymentMode) {
    const orderData = {
      productId,
      totalAmount,
      quantity,
      paymentMode
    };
  
    const response = await fetch(`${ORDER_URL}/order/placeorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to place order');
    }
  
    return response.json();
  }

  