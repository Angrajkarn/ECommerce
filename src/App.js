import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/Product/ProductList';
import CartSummary from './components/Cart/CartSummary';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/pages/HomePage';
import { AuthProvider } from './components/services/AuthContext';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
// import CartPage from './components/pages/CartPage';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route path="/LoginPage"  element={<LoginPage/>}/>
          <Route path='/SignupPage' element={<SignupPage/>}/>
          <Route path='/ForgotPasswordPage' element={<ForgotPasswordPage/>}/>
          {/* <Route path='/CartPage' element={<CartPage/>}/> */}
          <Route path="/cartSummary" element={
            <CartSummary
              cartItems={cartItems}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
            />
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
