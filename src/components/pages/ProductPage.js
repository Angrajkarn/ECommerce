import React, { useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/Product/ProductCard';

const ProductPage = () => {
  const { products, loading, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount
  }, [fetchProducts]);

  return (
    <div>
      <h2>Product Page</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
