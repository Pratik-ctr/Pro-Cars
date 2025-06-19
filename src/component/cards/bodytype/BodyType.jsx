import React, { useState } from 'react';
import styles from './BodyType.module.css';

const BodyType = () => {
    const [selectedBodyType, setSelectedBodyType] = useState('Hatchback');

    const bodyTypes = [
        'Hatchback',
        'Sedan',
        'SUV',
        'MUV',
        'Luxury Sedan',
        'Luxury SUV'
    ];

    const carsData = {
        'Hatchback': [
            { name: 'Maruti Suzuki Baleno', price: '₹3.94 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1740991832965/exterior-image-164.jpg' },
            { name: 'Hyundai Elite i20', price: '₹3.56 Lakh', image: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/highlights_innerkv_pc.jpg' },
            { name: 'Maruti Suzuki Wagon R 1.0', price: '₹2.24 Lakh', image: 'https://imgcdn.zigwheels.com.bd/large/gallery/exterior/9/66/maruti-suzuki-wagon-r-front-angle-low-view-739431.jpg?tr=w-510,h-340' },
            { name: 'Maruti Suzuki Swift', price: '₹2.83 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg' }
        ],
        'Sedan': [
            { name: 'Honda City', price: '₹11.50 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9421/1739862184352/exterior-image-168.jpg' },
            { name: 'Hyundai Verna', price: '₹10.90 Lakh', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter-100.jpeg?isig=0&q=80' },
            { name: 'Maruti Suzuki Ciaz', price: '₹9.30 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ciaz/10340/1744089241295/exterior-image-171.jpg' },
            { name: 'Skoda Slavia', price: '₹11.85 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Slavia/11810/1749703595725/exterior-image-165.jpg' }
        ],
        'SUV': [
            { name: 'Hyundai Creta', price: '₹14.25 Lakh', image: 'https://content.carlelo.com/uploads/model/creta-1.webp' },
            { name: 'Kia Seltos', price: '₹12.50 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688466133190/exterior-image-167.jpg' },
            { name: 'Tata Nexon', price: '₹9.80 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/9675/1743060431849/front-left-side-47.jpg' },
            { name: 'Mahindra XUV700', price: '₹18.90 Lakh', image: 'https://editorial.pxcrush.net/carsales/general/editorial/xuv700_black-edition-tall.jpg?width=1024&height=682' }
        ],
        'MUV': [
            { name: 'Toyota Innova Crysta', price: '₹22.50 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1749729290040/exterior-image-165.jpg' },
            { name: 'Maruti Suzuki Ertig', price: '₹10.20 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg' },
            { name: 'Kia Carens', price: '₹11.75 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Carens/11623/1747303335547/front-left-side-47.jpg' },
            { name: 'Mahindra Marazzo', price: '₹13.85 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Marazzo/7948/1632224129922/front-left-side-47.jpg' }
        ],
        'Luxury Sedan': [
            { name: 'Mercedes-Benz C-Class', price: '₹55.00 Lakh', image: 'https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/mercedes-benz-c-class-2.jpg' },
            { name: 'BMW 3 Series', price: '₹52.00 Lakh', image: 'https://www.livemint.com/lm-img/img/2024/05/29/1600x900/P90549616_lowRes_the-new-bmw-330i-sed_1717003320995_1717003329202.jpg' },
            { name: 'Audi A4', price: '₹49.00 Lakh', image: 'https://media.audi.com/is/image/audi/nemo/models/a4/a4-limousine/my-2022/NeMo-Derivative-Startpage/highlighted-car-teaser/883x883-ha4_2020_1974_1.jpg?auto=webp' },
            { name: 'Jaguar XE', price: '₹58.20 Lakh', image: 'https://img.etimg.com/thumb/msid-72397991,width-480,height-360,imgsize-248438,resizemode-75/jlr-drives-in-new-xe-in-india.jpg' }
        ],
        'Luxury SUV': [
            { name: 'Mercedes-Benz GLC', price: '₹65.00 Lakh', image: 'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/1138363-17.jpg' },
            { name: 'BMW X3', price: '₹68.00 Lakh', image: 'https://www.topgearmag.in/uploads/News/Image/1737179907-P90554824_highRes_the-new-bmw-x3-20xdr.jpg' },
            { name: 'Audi Q5', price: '₹62.00 Lakh', image: 'https://hips.hearstapps.com/hmg-prod/images/2025-audi-q5-112-66d1c3a5d34fd.jpg?crop=0.761xw:0.505xh;0.0737xw,0.375xh&resize=1200:*' },
            { name: 'Range Rover Velar', price: '₹85.00 Lakh', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Velar-2023/10584/1689741801024/front-left-side-47.jpg' }
        ],
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore by Body Type</h2>

            <div className={styles.bodyTypeList}>
                {bodyTypes.map((type) => (
                    <div
                        key={type}
                        className={`${styles.bodyTypeItem} ${selectedBodyType === type ? styles.active : ''}`}
                        onClick={() => setSelectedBodyType(type)}
                    >
                        {type}
                    </div>
                ))}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.carGrid}>
                {carsData[selectedBodyType]?.map((car, index) => (
                    <div key={index} className={styles.carCard}>
                        <img src={car.image} alt={car.name} className={styles.carImage} />
                        <div className={styles.carDetails}>
                            <h3 className={styles.carName}>{car.name}</h3>
                            <p className={styles.carPrice}>{car.price} <span className={styles.onwards}>onwards</span></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <button className={styles.viewAllBtn}>
                    View all Hatchback <span className={styles.arrow}>→</span>
                </button>
            </div>
        </div>
    );
};

export default BodyType;