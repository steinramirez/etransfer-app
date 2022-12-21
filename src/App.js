import * as React from 'react';
import './Appx.css';
import image from './assets/logoetransfer.png';
import { TickerTape } from "react-ts-tradingview-widgets";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faFire, faUserClock, faShieldHalved } from '@fortawesome/free-solid-svg-icons';


library.add(faWandMagicSparkles);

function App() {
  const currentYear = new Date().getFullYear();
 

  
  return (
    <div className="App">

      <TickerTape colorTheme="dark"></TickerTape>
      <nav className='navbar'>
        <div className='logo'><img src={image} alt='Logo' className='imageLogo' /></div>
        <div className='btns'>
          <button className="navButton">Home</button>
          <button className="navButton">About</button>
          <button className="navButton">What is</button>
          <button className="navButton">FAQ</button>
          
        </div>
      </nav>
      <section className='content' id='home'><img src={image} alt='Logo' className='imgContent' />
      </section>
      <section className='serviceSection'>
        <h1 className='titleService'>Services</h1>
        <div className='cards'>
          <div className='card'>
            <FontAwesomeIcon icon={faFire} size='3x' className='fireIcon' />
            <h2>Etransfer</h2>
            <p>We send money from Colombia to anywhere using cryptos.</p></div>
          <div className='card'>
            <FontAwesomeIcon icon={faUserClock} size='3x' className='timeIco' />
            <h2>Save Time</h2><p>We work for giving to you a good experience sending money to your family very easy.</p></div>
          <div className='card'>
            <FontAwesomeIcon icon={faShieldHalved} size='3x' className='supportIco' />
            <h2>Help 24/7</h2><p>You have support to all transaction you make with us. If you have any question, we will be here to help you out.</p></div>
        </div>
      </section>
      <section className='aboutSection' id='about'>
        <div className='sectionL'>
          <h1>About</h1>
        </div>
        <div className='sectionR'>
          <p>
            etransfer.trade is a small organization. Where you can send money to your family and friends from anywhere to any country. We are located in Colombia. Using the best technology to perform it.
          </p>
        </div>
      </section>
      <section className='whatis' id='whatis'>
        <div className='sectionL'>
          <h1>
            What is?
          </h1>
          <p>Is a payment proccessor between cryptocurrencies and fiat. We try to give our best rate to you to convert your money.</p>
        </div>

      </section>
      <footer>
        <div className='footersection'>
          <div className='btnfooter' href='#home'style={{ flex: 1 }}>
            Home
          </div>
          <div className='btnfooter' href='#about' style={{ flex: 1 }}>
            About
          </div>
          <div className='btnfooter' style={{ flex: 1 }}>
            What is?
          </div>
        </div>
        <div style={{ width: '100%', textAlign: 'center', color: 'white' }}>
          etransfer.trade. All rights reserved. {currentYear} , made in React. 
        </div>
      </footer>
    </div>
  );
}

export default App;