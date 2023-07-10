import React from 'react';
import './Product.css';



function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Fitbit Inspire 3 Health & Fitness Tracker with Stress Management, Workout Intensity, Sleep Tracking, 24/7 Heart Rate and more, Midnight Zen/Black One Size (S & L Bands Included)</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>79.95</strong>
                    </p>
                    <div className="product__rating">⭐⭐</div>
                </div>

                <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" alt="product-image"/>

                <button>Add to Basket</button>

            </div>
        </div>
    )   
}

export default Product