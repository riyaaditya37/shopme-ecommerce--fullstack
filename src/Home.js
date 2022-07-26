import React from 'react';
 import './Home.css'; 
 import Product from './Product';
  function Home() { 
    return ( 
    <div className='home'>
     <div className='home__container'>
        <img
         className='home__image' 
         src='https://img.freepik.com/premium-vector/happy-father-s-day-sale-banner-promotion-blue-background-online-shopping-store-with-mobile-credit-cards-shop-elements_62391-268.jpg?w=2000' 
         alt=""
          />
           <div className="home__row">

              <Product 
              id="12228900"
               title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
               price={399}
               image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
               rating={4}
                 />

               <Product id="49538094" 
               title="Philips Daily Collection HL7600 500-Watt Mixer Grinder with 2 Jar, Red"
                price={2679}
                 rating={4}
                  image="https://m.media-amazon.com/images/I/61DtBPGSmVL._SX679_.jpg"
                   /> 
                </div> 

                <div className="home__row">

                <Product id="23368977"
                title="Echo (4th Gen) | Spherical design with rich sound, smart home hub, and Alexa | Charcoal"
                 price={5925} 
                 rating={4} 
                image="https://m.media-amazon.com/images/I/61aKyPN+8PL._AC_SX679_.jpg"
                 /> 

                  <Product id="9865432345" 
                  title="Samsung T5 500GB Up to 540MB/s USB 3.1 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Alluring Blue (MU-PA500B)"
                  price={5999}
                  rating={5} 
                  image="https://m.media-amazon.com/images/I/81oYFsPwVrL._SX679_.jpg"
                    />

                  <Product id="98200318"
                  title="Boat Rockerz 550 Bluetooth Wireless Over Ear Headphones with Upto 20 Hours Playback, and Physical Noise Isolation with Mic (Black Symphony)" 
                  price={1499}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/61F5SXdi9jL._SX679_.jpg"
                  />

                  </div>
                  <div className="home__row">

                  <Product id="23368977"
                  title="Vega Crux Black Helmet-L |Black"
                  price={1165} 
                  rating={3} 
                  image="https://m.media-amazon.com/images/I/91Jg-E1tygL._SX679_.jpg"
                  /> 

                 <Product id="977389423" 
                   title="LG 1.5 Ton 4 Star DUAL Inverter Split AC ( Super Convertible 5-in-1 Cooling, 2022 Model, White)"
                   price={39990}
                   rating={5} 
                   image="https://m.media-amazon.com/images/I/51hbo8yQ1EL._SX679_.jpg"
                   />

                  <Product id="98200318"
                   title="Apple iPhone 13 (512GB) - Midnight" 
                  price={104900}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
                   />
                  <Product id="39142838"
                   title="HP Pavilion 15 12th Gen Intel Core i7 16GB SDRAM/1TB SSD 15.6 inch(39.6cm), Natural Silver" 
                   price={90990}
                   rating={5}
                   image="https://m.media-amazon.com/images/I/71nTsCNLNOL._SX679_.jpg"
                   />
                   </div>
                  <div className="home__row">

                  <Product id="890442139"
                   title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2022 Model) "
                  price={17359} 
                  rating={4}
                  image="https://m.media-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg" 
                 
                 />
                 
              </div>
            </div>
          </div> 
      );
 } 
export default Home;