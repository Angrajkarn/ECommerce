import React, { createContext, useState, useContext, useEffect } from 'react';
import sampleProducts from '../../sampleProducts'; // Assuming you have a sampleProducts file

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(sampleProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts(); // Initial fetch when component mounts
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    // Simulated async fetching logic
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Replace with actual API call to fetch products
      const response = await fetch('https://api.example.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();

      // Update products state
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const productContextValue = {
    products,
    loading,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
