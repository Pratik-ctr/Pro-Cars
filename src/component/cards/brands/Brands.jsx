import React from 'react';
import styles from './Brands.module.css';

// Brand logos (replace with your actual imports)
const brandLogos = {
    'Maruti Suzuki': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfaZLakjNCmT6K1oEsrYC3u-AuWVyUpDTLA&s',
    'Hyundai': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bLDZ_uRSEueAUuNQjCnwIJKe7Ml71Kq66g&s',
    'Honda': 'https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_640.png',
    'Tata': 'https://i.pinimg.com/originals/5b/ac/94/5bac942d02e70ce67498bf2ff04efe97.png',
    'Kia': 'https://i.pinimg.com/736x/8b/77/c6/8b77c6e96a295c21bb85286017345af7.jpg',
    'Renault': 'https://i.pinimg.com/736x/83/db/90/83db90e6a60f6c26b8b16a47bee7ab4b.jpg',
    'Ford': 'https://i.pinimg.com/736x/00/ae/fd/00aefde957666bd6b90316615c3cc498.jpg',
    'Mahindra': 'https://i.pinimg.com/736x/6b/32/30/6b32305a98c5d3dfbfef4349040bdad8.jpg',
    'Volkswagen': 'https://i.pinimg.com/736x/ff/00/88/ff008847be76dd4fbc72154ee85e5756.jpg',
    'Toyota': 'https://i.pinimg.com/736x/2e/7f/00/2e7f0006c9e0138ca020c8d895c0c620.jpg',
    'MG Motors': 'https://upload.wikimedia.org/wikipedia/en/6/67/MG_Cars_%28logo%29.png',
    'BMW': 'https://i.pinimg.com/736x/57/ab/d5/57abd564bdc8ff6070e35ec4067421ab.jpg'

};

const Brands = () => {
    const brands = [
        { name: 'Maruti Suzuki', count: '340+ cars' },
        { name: 'Hyundai', count: '290+ cars' },
        { name: 'Honda', count: '140+ cars' },
        { name: 'Tata', count: '130+ cars' },
        { name: 'Kia', count: '70+ cars' },
        { name: 'Renault', count: '70+ cars' },
        { name: 'Ford', count: '40+ cars' },
        { name: 'Mahindra', count: '40+ cars' },
        { name: 'Volkswagen', count: '30+ cars' },
        { name: 'Toyota', count: '30+ cars' },
        { name: 'MG Motors', count: '10+ cars' },
        { name: 'BMW', count: '15+ cars' }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore Popular Brands</h2>

            <div className={styles.brandsGrid}>
                {brands.map((brand, index) => (
                    <div key={index} className={styles.brandCard}>
                        <div className={styles.logoContainer}>
                            <img
                                src={brandLogos[brand.name]}
                                alt={brand.name}
                                className={styles.brandLogo}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            {/* <div className={styles.logoFallback}>{brand.name.charAt(0)}</div> */}
                        </div>
                        <h3 className={styles.brandName}>{brand.name}</h3>
                        <p className={styles.carCount}>{brand.count}</p>
                    </div>
                ))}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.footer}>
                <button className={styles.viewAllBtn}>
                    View all Hatchback <span className={styles.arrow}>→</span>
                </button>
            </div>
        </div>
    );
};

export default Brands;