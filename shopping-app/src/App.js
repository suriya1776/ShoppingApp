// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import Payment from './components/Payment';
import Order from './components/order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </Router>
  );
}

export default App;
