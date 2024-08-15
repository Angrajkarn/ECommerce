import { createContext, useContext, useState } from 'react';
import sampleProducts from '../sampleProducts'; // Assuming you have a sampleProducts file

// Create context for product management
const ProductContext = createContext();

// Custom hook to use product context
export const useProducts = () => useContext(ProductContext);

// Product provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(sampleProducts);
  const [loading, setLoading] = useState(false);

  // Fetch products function
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
