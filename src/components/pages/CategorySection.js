import React from 'react';
import './CategorySection.css';

import bestOfferIcon from '../../assets/images/bestq.png';
import mobileIcon from '../../assets/images/mobile.png';
import tvIcon from '../../assets/images/tv.png';
import fashionIcon from '../../assets/images/search.png';
import beautyIcon from '../../assets/images/makeuo.png';
import homeKitchenIcon from '../../assets/images/mobile.png';
import furnitureIcon from '../../assets/images/sofa.png';
import travelIcon from '../../assets/images/airplane.png';
import groceryIcon from '../../assets/images/basket.png';

const categories = [
    { name: 'Top Offer', icon: bestOfferIcon },
    { name: 'Mobiles & Tablets', icon: mobileIcon },
    { name: 'TVs & Appliances', icon: tvIcon },
    { name: 'Electronics', icon: mobileIcon },
    { name: 'Fashion', icon: fashionIcon },
    { name: 'Beauty', icon: beautyIcon },
    { name: 'Home & Kitchen', icon: homeKitchenIcon },
    { name: 'Furniture', icon: furnitureIcon },
    { name: 'Travel', icon: travelIcon },
    { name: 'Grocery', icon: groceryIcon },
];


const CategorySection = () => {
    return (
        <div className="category-section">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <img src={category.icon} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    );
}

export default CategorySection;
