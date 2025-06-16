import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const benefits = [
    {
      title: "200 POINTS",
      bgImage: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/SpinnyAssured/assets/200-inspection-point.png",
      icon: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/200_point_inspection_desktop.png?q=85&w=240&dpr=1.3",
      description: "Comprehensive inspection"
    },
    {
      title: "1 YEAR WARRANTY",
      bgImage: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/SpinnyAssured/assets/5-day-money-back-guarentee.png",
      icon: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/one_year_warranty_desktop.png?q=85&w=240&dpr=1.3",
      description: "Assured protection"
    },
    {
      title: "5 DAYS BACK GUARANTEE",
      bgImage: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/SpinnyAssured/assets/1-year-spinny-warranty.png",
      icon: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/money_back_desktop.png",
      description: "No questions asked"
    },
    {
      title: "FREE TRANSFER",
      bgImage: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/SpinnyAssured/assets/fixed-price-assurance.png",
      icon: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/fixed_price_desktop.png",
      description: "Hassle-free ownership"
    }
  ];

  return (
    <div className={styles.benefitsSection}>
      <div className={styles.sectionHeader}>
        <h2>Spinny Assured<span>*</span> Benefits</h2>
        <p>The sure road to Car Joy</p>
      </div>

      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={styles.benefitCard}
            style={{ backgroundImage: `url(${benefit.bgImage})` }}
          >
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <img src={benefit.icon} alt="" className={styles.cardIcon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Learn More button below all cards */}
      <div className={styles.learnMoreContainer}>
        <button className={styles.learnMore}>
          <span className={styles.circle} aria-hidden="true">
            <span className={styles.iconArrow}></span>
          </span>
          <span className={styles.buttonText}>Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Benefits;