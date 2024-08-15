
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import sampleProducts from '../../sampleProducts';
import './HomePage.css';
import slide1 from '../../assets/images/k10.jpg';
import slide2 from '../../assets/images/k12.jpg';
import slide3 from '../../assets/images/k11.jpg';
import offer from '../../assets/images/k16.jpg';
import offers from '../../assets/images/k17.jpg';
import offer1 from '../../assets/images/k18.avif';
import offer2 from '../../assets/images/k24.webp';
import offer3 from '../../assets/images/k19.avif';
import offer4 from '../../assets/images/k20.avif';
// import brand from '../../assets/images/brand1.png';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand3.jpg';
import brand3 from '../../assets/images/brand2.webp';
import CategorySection from './CategorySection';


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-page">
    <CategorySection/>
      {/* Slider Section */}
      <header className="hero-section">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <h1>Discover the Best Deals!</h1>
          <Link to="/products" className="shop-now-button">
            Shop Now
          </Link>
        </div>
      </header>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          {['Men', 'Women', 'Appliances', 'Fashion', 'Fitness', 'Combo Packs'].map((category, index) => (
            <div key={index} className="category-card">
              <Link to={`/category/${category}`}>
                <img src={`https://via.placeholder.com/600x300?text=${category}`} alt={category} />
                <div className="category-overlay">
                  <h3>{category}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promotional-banners">
        <h2>Today's Deals</h2>
        <div className="banner-grid">
          <div className="banner-item">
            <img src={offer} alt="Deal 1" />
            <div className="banner-content">
              <h3>Exclusive Offer!</h3>
              <Link to="/offers" className="banner-link">Shop Now</Link>
            </div>
          </div>
          <div className="banner-item">
            <img src={offers} alt="Deal 2" />
            <div className="banner-content">
              <h3>Seasonal Sale</h3>
              <Link to="/seasonal" className="banner-link">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Category Posters Section */}
      <section className="new-category-posters">
        <h2>Featured Collections</h2>
        <div className="poster-grid">
          <div className="poster-item">
            <Link to="/collection/1">
              <img src={offer1} alt="Collection 1" />
              <div className="poster-overlay">
                <h3>Collection 1</h3>
              </div>
            </Link>
          </div>
          <div className="poster-item">
            <Link to="/collection/2">
              <img src={offer2} alt="Collection 2" />
              <div className="poster-overlay">
                <h3>Collection 2</h3>
              </div>
            </Link>
          </div>
          <div className="poster-item">
            <Link to="/collection/3">
              <img src={offer3} alt="Collection 3" />
              <div className="poster-overlay">
                <h3>Collection 3</h3>
              </div>
            </Link>
          </div>
          <div className="poster-item">
            <Link to="/collection/4">
              <img src={offer4} alt="Collection 4" />
              <div className="poster-overlay">
                <h3>Collection 4</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers">
        <h2>Bestselling Products</h2>
        <div className="product-grid">
          {/* Placeholder for product display */}
          <div className="product-grid">
          {sampleProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="featured-brands">
        <h2>Featured Brands</h2>
        <div className="brand-grid">
          {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={`https://via.placeholder.com/150x150?text=${brand}`} alt={brand} />
            </div>
          ))}
        </div>
      </section>
      <section className="new-arrivals">
  <h2>New Arrivals</h2>
  <div className="new-arrivals-carousel">
    {sampleProducts.slice(0, 6).map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`} className="view-details-button">View Details</Link>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="trending-now">
  <h2>Trending Now</h2>
  <div className="trending-now-carousel">
    <div className="carousel-item">
      <img src={brand1} alt="Trending 1" />
      <div className="carousel-overlay">
        <h3>Trending Product 1</h3>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={brand3} alt="Trending 2" />
      <div className="carousel-overlay">
        <h3>Trending Product 2</h3>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={brand3} alt="Trending 2" />
      <div className="carousel-overlay">
        <h3>Trending Product 3</h3>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={brand1} alt="Trending 1" />
      <div className="carousel-overlay">
        <h3>Trending Product 1</h3>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
    </div>
  </div>
</section>
<section className="seasonal-offers">
  <h2>Seasonal Offers</h2>
  <div className="offer-grid">
    <div className="offer-item">
      <img src={brand2} alt="Offer 1" />
      <div className="offer-overlay">
        <h3>Special Discount!</h3>
        <p>Up to 50% off on selected items.</p>
        <Link to="/offers" className="explore-offers-button">Explore Offers</Link>
      </div>
    </div>
    <div className="offer-item">
      <img src={brand3} alt="Offer 2" />
      <div className="offer-overlay">
        <h3>Limited Time Deal</h3>
        <p>Grab the best deals before they’re gone!</p>
        <Link to="/offers" className="explore-offers-button">Explore Offers</Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
