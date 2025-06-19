import React, { useRef } from 'react';
import styles from './CitySlider.module.css';

const cityData = [
  {
    name: 'Bangalore',
    hubs: 7,
    cars: '730+',
    image: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
    bgColor: '#A99CF1',
  },
  {        
    name: 'Hyderabad',
    hubs: 4,
    cars: '730+',
    image: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
    bgColor: '#2D074C',
  },
  {
    name: 'Pune',
    hubs: 3,
    cars: '590+',
    image: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
    bgColor: '#4DA68A',
  },
  {
    name: 'Mumbai',
    hubs: 5,
    cars: '540+',
    image: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
    bgColor: '#EF3959',
  },
  {
    name: 'Chennai',
    hubs: 6,
    cars: '610+',
    image: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
    bgColor: '#FFB84C',
  },
];

const CitySlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = window.innerWidth < 600 ? 220 : 340;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.title}>Cars across India</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.navButton} onClick={() => scroll('left')}>&lt;</button>
        <div className={styles.cardsWrapper} ref={sliderRef}>
          {cityData.map((city, index) => (
            <div key={index} className={styles.cityCard} style={{ backgroundColor: city.bgColor }}>
              <h3>{city.name}</h3>
              <div className={styles.imageWrapper}>
                <img src={city.image} alt={city.name} />
              </div>
              <p><strong>{city.hubs} hubs</strong> • {city.cars} cars</p>
            </div>
          ))}
        </div>
        <button className={styles.navButton} onClick={() => scroll('right')}>&gt;</button>
      </div>
      <div className={styles.viewAllBtn}>
        <button>View all locations</button>
      </div>
    </section>
  );
};

export default CitySlider;