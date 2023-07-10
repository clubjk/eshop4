import React from 'react';
import './Home.css';
import Product from './Product';




function Home () {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    
                    <img src="https://www.shutterstock.com/image-vector/ecommerce-asset-presentation-social-media-600w-1274843788.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="Fitbit Inspire 3 Health & Fitness Tracker with Stress Management, Workout Intensity, Sleep Tracking, 24/7 Heart Rate and more, Midnight Zen/Black One Size (S & L Bands Included)"
                            price={79.95}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                        />
                         
                        <Product 
                            id="49538094"
                            title="All the Light We Cannot See: A Novel"
                            price={11.98}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/51pNBRwj74L.jpg"
                        />
                        
  
                    </div>

                    <div className="home__row">
                        <Product 
                            id="4903850"
                            title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Black/Black, One Size (S & L Bands Included)"
                            price={229.95}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61B+-+rvUzL._AC_SY300_SX300_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Farberware Countertop Microwave 700 Watts, 0.7 cu ft - Microwave Oven With LED Lighting and Child Lock - Perfect for Apartments and Dorms - Easy Clean Stainless Steel"
                            price={64.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/81cDkavQ1wS._AC_SL1500_.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal"
                            price={49.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61y4J2vTwFL._AC_SL1000_.jpg"
                        />
  
                    </div>

                    <div className="home__row">
                        <Product 
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={1094.98}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/51vXuwpF-QL._AC_.jpg"
                        />
                        
  
                    </div>
                </div>

            </div>
            


        </div>
    )
}

export default Home