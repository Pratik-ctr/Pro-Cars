import React from 'react';
import styles from './Hero.module.css';
// import buyCarImg from '../assets/buy-car.jpg';
// import sellCarImg from '../assets/sell-car.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Buy Car Section */}
        <div className={styles.heroCard}>
          <img src={'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSell/assets/buy_car_desktop.jpg'} alt="Happy car buyer" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.textGroup}>
              <h2>New beginnings<br />in a car of your own</h2>
              <p>Trusted by over 1 lakh customers</p>
              <p>Choose from 5000+ Spinny Assured cars</p>
            </div>
            <button className={styles.ctaButton}>BUY CAR</button>
          </div>
        </div>

        {/* Sell Car Section */}
        <div className={styles.heroCard}>
          <img src={'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSell/assets/sell_car_desktop.jpg'} alt="Selling car process" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.textGroup}>
              <h2>Sell your car for the best price</h2>
              <p>99% sellers get paid</p>
              <p>the same as the instant online quote</p>
            </div>
            <button className={styles.ctaButton}>SELL CAR</button>
          </div>
        </div>
      </div>

      <div className={styles.brandLogo}>
        <span className={styles.logoText}>Pro Drive</span>
      </div>
    </section>
  );
};

export default Hero;