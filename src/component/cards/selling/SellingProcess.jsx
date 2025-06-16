import React from 'react';
import styles from './SellingProcess.module.css';


const steps = [
  {
    number: 1,
    title: "Instant online estimate",
    description: "Fill in a few details about your car for an instant estimate",
    buttonText: "Get estimate >",
    image: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png?q=85&w=500',
  },
  {
    number: 2,
    title: "Free evaluation",
    description: "Schedule the evaluation at your convenience, from the comfort of your home or workplace",
    buttonText: "Schedule evaluation >",
    image: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png?q=85&w=500',
  },
  {
    number: 3,
    title: "Same day payment",
    description: "Complete payment and paper work on the spot",
    buttonText: "Sell Car >",
    image: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-3.png?q=85&w=500',
  },
];

const SellingProcess = () => {
  return (
    <section className={styles.sellingSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Selling your car made simple</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div className={styles.stepCard} key={step.number}>
              <div className={styles.stepNumber}>{step.number}</div>
              <img src={step.image} alt={`Step ${step.number}`} className={styles.stepImage} />
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <button className={styles.stepButton}>{step.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.learnMoreContainer}>
          <button className={styles.learnMore}>
            <span className={styles.circle} >
              <span className={styles.iconArrow}></span>
            </span>
            <span className={styles.buttonText}>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellingProcess;
