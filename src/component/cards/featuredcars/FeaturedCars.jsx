// import React, { useState, useEffect, useRef } from 'react';
// import styles from './FeaturedCars.module.css';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const FeaturedCars = () => {
//   const [activeCategory, setActiveCategory] = useState('best');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState({});
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const carGridRef = useRef(null);

//   const cars = {
//     best: [
//       {
//         id: 1,
//         year: '2022',
//         make: 'Hyundai',
//         model: 'Creta SX',
//         details: '25K km · Petrol · Automatic',
//         price: '₹14.25 Lakh',
//         emi: 'EMI from ₹23,540/m',
//         location: 'Delhi · Spinny Hub, Pacific Mall',
//         images: [
//           'https://i.pinimg.com/736x/43/61/90/4361900107eb5a5eed171b9150baf2ae.jpg',
//           'https://i.pinimg.com/736x/af/c5/82/afc582465675abf2ee5f4145efd5d1e5.jpg',
//           'https://i.pinimg.com/736x/ae/c0/79/aec079cfb09f3265c60bcb7f80d93d9d.jpg',
//           'https://i.pinimg.com/736x/ff/52/b7/ff52b7fa975fee1211887ad4cd5fe2f7.jpg'
//         ]
//       },
//       {
//         id: 2,
//         year: '2021',
//         make: 'Kia',
//         model: 'Seltos HTK',
//         details: '18K km · Diesel · Manual',
//         price: '₹12.50 Lakh',
//         emi: 'EMI from ₹20,650/m',
//         location: 'Mumbai · Spinny Hub, Infinity Mall',
//         images: [
//           'https://i.pinimg.com/736x/43/d7/59/43d7593e89376ec1099019258be5a5f9.jpg',
//           'https://i.pinimg.com/736x/bf/ec/c4/bfecc498d6a9e68189af912ace0c9d27.jpg',
//           'https://i.pinimg.com/736x/a1/59/8f/a1598f9f115629b16a9fd7a8914b572a.jpg',
//           'https://i.pinimg.com/736x/cd/e9/b7/cde9b777da43e637c0aa1e0a112f070b.jpg'
//         ]
//       },
//       {
//         id: 3,
//         year: '2020',
//         make: 'Maruti Suzuki',
//         model: 'Swift ZDI',
//         details: '22K km · Diesel · Manual',
//         price: '₹6.75 Lakh',
//         emi: 'EMI from ₹11,150/m',
//         location: 'Bangalore · Spinny Hub, Orion Mall',
//         images: [
//           'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-front-view.jpeg?q=80',
//           'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-left-front-three-quarter.jpeg?q=80',
//           'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-left-side-view.jpeg?q=80',
//           'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-rear-view.jpeg?q=80'
//         ]
//       },
//       {
//         id: 4,
//         year: '2019',
//         make: 'Honda',
//         model: 'City VX',
//         details: '30K km · Petrol · Automatic',
//         price: '₹10.20 Lakh',
//         emi: 'EMI from ₹16,850/m',
//         location: 'Hyderabad · Spinny Hub, Inorbit Mall',
//         images: [
//             'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-left-front-three-quarter9.jpeg?isig=0&wm=4&q=80',
//             'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-front-view3.jpeg?isig=0&wm=4&q=80',
//             'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-left-rear-three-quarter4.jpeg?isig=0&wm=4&q=80',
//             'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-rear-view1.jpeg?isig=0&wm=4&q=80'
//         ]
//       },
//       {
//         id: 5,
//         year: '2021',
//         make: 'Tata',
//         model: 'Nexon XZ+',
//         details: '15K km · Diesel · Automatic',
//         price: '₹9.80 Lakh',
//         emi: 'EMI from ₹16,190/m',
//         location: 'Pune · Spinny Hub, Phoenix Mall',
//         images: [
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/front-view-118.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/side-view-(left)-90.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/side-view-(right)-38.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/rear-left-view-121.jpg'
//         ]
//       }
//     ],
//     new: [
//       {
//         id: 6,
//         year: '2023',
//         make: 'Hyundai',
//         model: 'Venue N Line',
//         details: '5K km · Petrol · Manual',
//         price: '₹13.50 Lakh',
//         emi: 'EMI from ₹22,300/m',
//         location: 'Chennai · Spinny Hub, Express Avenue',
//         images: [
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/front-view-118.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/11083/1749444648190/front-left-side-47.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/side-view-(left)-90.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/rear-right-side-48.jpg'
//         ]
//       },
//       {
//         id: 7,
//         year: '2023',
//         make: 'Kia',
//         model: 'Sonet HTX',
//         details: '8K km · Petrol · Automatic',
//         price: '₹11.75 Lakh',
//         emi: 'EMI from ₹19,410/m',
//         location: 'Kolkata · Spinny Hub, South City Mall',
//         images: [
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/12347/1739618959645/exterior-image-165.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/12347/1739618959645/exterior-image-166.jpg',
//         'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688466133190/exterior-image-167.jpg'        
//     ]
//       },
//       {
//         id: 8,
//         year: '2023',
//         make: 'Tata',
//         model: 'Punch Adventure',
//         details: '3K km · Petrol · Manual',
//         price: '₹7.25 Lakh',
//         emi: 'EMI from ₹11,980/m',
//         location: 'Ahmedabad · Spinny Hub, AlphaOne Mall',
//         images: [
//         'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/front-view-118.jpg',
//         'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/side-view-(left)-90.jpg',
//         'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/side-view-(right)-38.jpg',      
//         'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/rear-left-view-121.jpg'
//         ]
//       },
//       {
//         id: 9,
//         year: '2023',
//         make: 'Mahindra',
//         model: 'XUV700 AX5',
//         details: '7K km · Diesel · Automatic',
//         price: '₹18.90 Lakh',
//         emi: 'EMI from ₹31,220/m',
//         location: 'Jaipur · Spinny Hub, World Trade Park',
//         images: [
//         'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-mahindra-xuv-700-primary-image.jpg',
//         'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-11-2025-mahindra-xuv700-black-edition-review-hero-16x9-1.jpg',
//         'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-05-2024-mahindra-xuv700-hero-16x9-1.jpg',
//         'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2023-06-mahindra-xuv700-hero-16x9-1.jpg'
//         ]
//       },
//       {
//         id: 10,
//         year: '2023',
//         make: 'Toyota',
//         model: 'Innova Hycross',
//         details: '6K km · Hybrid · Automatic',
//         price: '₹22.50 Lakh',
//         emi: 'EMI from ₹37,170/m',
//         location: 'Lucknow · Spinny Hub, Phoenix Mall',
//         images: [
//           'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/front-left-side-47.jpg',
//           'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/exterior-image-164.jpg',
//           'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/exterior-image-166.jpg',
//           'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1707376992390/rear-left-view-121.jpg'
//         ]
//       }
//     ]
//   };

//   // Initialize current image indexes
//   useEffect(() => {
//     const initialIndexes = {};
//     cars.best.concat(cars.new).forEach(car => {
//       initialIndexes[car.id] = 0;
//     });
//     setCurrentImageIndex(initialIndexes);
//   }, []);

//   // Handle automatic slideshow for hovered card
//   useEffect(() => {
//     let interval;
//     if (hoveredCard) {
//       interval = setInterval(() => {
//         setCurrentImageIndex(prev => {
//           const car = cars.best.concat(cars.new).find(c => c.id === hoveredCard);
//           return {
//             ...prev,
//             [hoveredCard]: (prev[hoveredCard] + 1) % car.images.length
//           };
//         });
//       }, 1500); // Change image every 1.5 seconds
//     }
//     return () => clearInterval(interval);
//   }, [hoveredCard]);

//   const handleMouseEnter = (cardId) => {
//     setHoveredCard(cardId);
//     setCurrentImageIndex(prev => ({ ...prev, [cardId]: 0 }));
//   };

//   const handleMouseLeave = () => {
//     setHoveredCard(null);
//   };

//   const scrollLeft = () => {
//     if (carGridRef.current) {
//       const newPosition = Math.max(scrollPosition - 300, 0);
//       carGridRef.current.scrollTo({
//         left: newPosition,
//         behavior: 'smooth'
//       });
//       setScrollPosition(newPosition);
//     }
//   };

//   const scrollRight = () => {
//     if (carGridRef.current) {
//       const maxScroll = carGridRef.current.scrollWidth - carGridRef.current.clientWidth;
//       const newPosition = Math.min(scrollPosition + 300, maxScroll);
//       carGridRef.current.scrollTo({
//         left: newPosition,
//         behavior: 'smooth'
//       });
//       setScrollPosition(newPosition);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h2 className={styles.title}>Featured Spinny cars</h2>
//         <div className={styles.categorySelector}>
//           <button
//             className={`${styles.categoryButton} ${activeCategory === 'best' ? styles.active : ''}`}
//             onClick={() => setActiveCategory('best')}
//           >
//             Best busy for you
//           </button>
//           <button
//             className={`${styles.categoryButton} ${activeCategory === 'new' ? styles.active : ''}`}
//             onClick={() => setActiveCategory('new')}
//           >
//             Newly added
//           </button>
//         </div>
//       </div>
      
//       <div className={styles.carSliderContainer}>
//         <button 
//           className={styles.scrollButton} 
//           onClick={scrollLeft}
//           disabled={scrollPosition === 0}
//         >
//           <FiChevronLeft size={24} />
//         </button>
        
//         <div className={styles.carGrid} ref={carGridRef}>
//           {cars[activeCategory].map((car) => (
//             <div 
//               key={car.id} 
//               className={styles.carCard}
//               onMouseEnter={() => handleMouseEnter(car.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className={styles.imageSlider}>
//                 <img 
//                   src={car.images[currentImageIndex[car.id] || 0]} 
//                   alt={`${car.make} ${car.model}`} 
//                   className={styles.carImage}
//                 />
//                 <div className={styles.sliderDots}>
//                   {car.images.map((_, index) => (
//                     <span 
//                       key={index}
//                       className={`${styles.dot} ${currentImageIndex[car.id] === index ? styles.activeDot : ''}`}
//                     ></span>
//                   ))}
//                 </div>
//               </div>
//               <div className={styles.carDetails}>
//                 <h3>{car.year} {car.make} {car.model}</h3>
//                 <p className={styles.specs}>{car.details}</p>
//                 <div className={styles.pricing}>
//                   <span className={styles.price}>{car.price}</span>
//                   <span className={styles.emi}>{car.emi}</span>
//                 </div>
//                 <p className={styles.location}>© {car.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <button 
//           className={styles.scrollButton} 
//           onClick={scrollRight}
//           disabled={scrollPosition >= (carGridRef.current?.scrollWidth - carGridRef.current?.clientWidth)}
//         >
//           <FiChevronRight size={24} />
//         </button>
//       </div>
      
//       <div className={styles.footer}>
//         <button className={styles.viewAllBtn}>View all Spinny cars</button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedCars;
















import React, { useState, useEffect, useRef } from 'react';
import styles from './FeaturedCars.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState('best');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const carGridRef = useRef(null);

  const cars = {
    best: [
      {
        id: 1,
        year: '2022',
        make: 'Hyundai',
        model: 'Creta SX',
        details: '25K km · Petrol · Automatic',
        price: '₹14.25 Lakh',
        emi: 'EMI from ₹23,540/m',
        location: 'Delhi · Pro-Drive Hub, Pacific Mall',
        images: [
          'https://i.pinimg.com/736x/43/61/90/4361900107eb5a5eed171b9150baf2ae.jpg',
          'https://i.pinimg.com/736x/af/c5/82/afc582465675abf2ee5f4145efd5d1e5.jpg',
          'https://i.pinimg.com/736x/ae/c0/79/aec079cfb09f3265c60bcb7f80d93d9d.jpg',
          'https://i.pinimg.com/736x/ff/52/b7/ff52b7fa975fee1211887ad4cd5fe2f7.jpg'
        ]
      },
      {
        id: 2,
        year: '2021',
        make: 'Kia',
        model: 'Seltos HTK',
        details: '18K km · Diesel · Manual',
        price: '₹12.50 Lakh',
        emi: 'EMI from ₹20,650/m',
        location: 'Mumbai · Pro-Drive Hub, Infinity Mall',
        images: [
          'https://i.pinimg.com/736x/43/d7/59/43d7593e89376ec1099019258be5a5f9.jpg',
          'https://i.pinimg.com/736x/bf/ec/c4/bfecc498d6a9e68189af912ace0c9d27.jpg',
          'https://i.pinimg.com/736x/a1/59/8f/a1598f9f115629b16a9fd7a8914b572a.jpg',
          'https://i.pinimg.com/736x/cd/e9/b7/cde9b777da43e637c0aa1e0a112f070b.jpg'
        ]
      },
      {
        id: 3,
        year: '2020',
        make: 'Maruti Suzuki',
        model: 'Swift ZDI',
        details: '22K km · Diesel · Manual',
        price: '₹6.75 Lakh',
        emi: 'EMI from ₹11,150/m',
        location: 'Bangalore · Pro-Drive Hub, Orion Mall',
        images: [
          'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-front-view.jpeg?q=80',
          'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-left-front-three-quarter.jpeg?q=80',
          'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-left-side-view.jpeg?q=80',
          'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/26742/swift-exterior-rear-view.jpeg?q=80'
        ]
      },
      {
        id: 4,
        year: '2019',
        make: 'Honda',
        model: 'City VX',
        details: '30K km · Petrol · Automatic',
        price: '₹10.20 Lakh',
        emi: 'EMI from ₹16,850/m',
        location: 'Hyderabad · Pro-Drive Hub, Inorbit Mall',
        images: [
            'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-left-front-three-quarter9.jpeg?isig=0&wm=4&q=80',
            'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-front-view3.jpeg?isig=0&wm=4&q=80',
            'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-left-rear-three-quarter4.jpeg?isig=0&wm=4&q=80',
            'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/143725/honda-city-rear-view1.jpeg?isig=0&wm=4&q=80'
        ]
      },
      {
        id: 5,
        year: '2021',
        make: 'Tata',
        model: 'Nexon XZ+',
        details: '15K km · Diesel · Automatic',
        price: '₹9.80 Lakh',
        emi: 'EMI from ₹16,190/m',
        location: 'Pune · Pro-Drive Hub, Phoenix Mall',
        images: [
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/front-view-118.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/side-view-(left)-90.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/side-view-(right)-38.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tata-Nexon/7064/1565092829146/rear-left-view-121.jpg'
        ]
      }
    ],
    new: [
      {
        id: 6,
        year: '2023',
        make: 'Hyundai',
        model: 'Venue N Line',
        details: '5K km · Petrol · Manual',
        price: '₹13.50 Lakh',
        emi: 'EMI from ₹22,300/m',
        location: 'Chennai · Pro-Drive Hub, Express Avenue',
        images: [
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/front-view-118.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/11083/1749444648190/front-left-side-47.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/side-view-(left)-90.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue-N-Line/10122/1684401325267/rear-right-side-48.jpg'
        ]
      },
      {
        id: 7,
        year: '2023',
        make: 'Kia',
        model: 'Sonet HTX',
        details: '8K km · Petrol · Automatic',
        price: '₹11.75 Lakh',
        emi: 'EMI from ₹19,410/m',
        location: 'Kolkata · Pro-Drive Hub, South City Mall',
        images: [
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/12347/1739618959645/exterior-image-165.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/12347/1739618959645/exterior-image-166.jpg',
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688466133190/exterior-image-167.jpg'        
    ]
      },
      {
        id: 8,
        year: '2023',
        make: 'Tata',
        model: 'Punch Adventure',
        details: '3K km · Petrol · Manual',
        price: '₹7.25 Lakh',
        emi: 'EMI from ₹11,980/m',
        location: 'Ahmedabad · Pro-Drive Hub, AlphaOne Mall',
        images: [
        'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/front-view-118.jpg',
        'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/side-view-(left)-90.jpg',
        'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/side-view-(right)-38.jpg',      
        'https://img.gaadicdn.com/images/carexteriorimages/large/Tata/Punch/10681/1749705980533/rear-left-view-121.jpg'
        ]
      },
      {
        id: 9,
        year: '2023',
        make: 'Mahindra',
        model: 'XUV700 AX5',
        details: '7K km · Diesel · Automatic',
        price: '₹18.90 Lakh',
        emi: 'EMI from ₹31,220/m',
        location: 'Jaipur · Pro-Drive Hub, World Trade Park',
        images: [
        'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-mahindra-xuv-700-primary-image.jpg',
        'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-11-2025-mahindra-xuv700-black-edition-review-hero-16x9-1.jpg',
        'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2024-05-2024-mahindra-xuv700-hero-16x9-1.jpg',
        'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2023-06-mahindra-xuv700-hero-16x9-1.jpg'
        ]
      },
      {
        id: 10,
        year: '2023',
        make: 'Toyota',
        model: 'Innova Hycross',
        details: '6K km · Hybrid · Automatic',
        price: '₹22.50 Lakh',
        emi: 'EMI from ₹37,170/m',
        location: 'Lucknow · Pro-Drive Hub, Phoenix Mall',
        images: [
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/front-left-side-47.jpg',
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/exterior-image-164.jpg',
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1749732632021/exterior-image-166.jpg',
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/10929/1707376992390/rear-left-view-121.jpg'
        ]
      }
    ]
  };

  // Initialize current image indexes
  useEffect(() => {
    const initialIndexes = {};
    cars.best.concat(cars.new).forEach(car => {
      initialIndexes[car.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);

  // Handle automatic slideshow for hovered card
  useEffect(() => {
    let interval;
    if (hoveredCard) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const car = cars.best.concat(cars.new).find(c => c.id === hoveredCard);
          return {
            ...prev,
            [hoveredCard]: (prev[hoveredCard] + 1) % car.images.length
          };
        });
      }, 1500); // Change image every 1.5 seconds
    }
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
    setCurrentImageIndex(prev => ({ ...prev, [cardId]: 0 }));
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const scrollLeft = () => {
    if (carGridRef.current) {
      const newPosition = Math.max(scrollPosition - 300, 0);
      carGridRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (carGridRef.current) {
      const maxScroll = carGridRef.current.scrollWidth - carGridRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 300, maxScroll);
      carGridRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Spinny cars</h2>
        <div className={styles.categorySelector}>
          <button
            className={`${styles.categoryButton} ${activeCategory === 'best' ? styles.active : ''}`}
            onClick={() => setActiveCategory('best')}
          >
            Best buys for you
          </button>
          <button
            className={`${styles.categoryButton} ${activeCategory === 'new' ? styles.active : ''}`}
            onClick={() => setActiveCategory('new')}
          >
            Newly added
          </button>
        </div>
      </div>
      
      <div className={styles.carSliderContainer}>
        <button 
          className={styles.scrollButton} 
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
          aria-label="Scroll left"
        >
          <FiChevronLeft size={24} />
        </button>
        
        <div className={styles.carGrid} ref={carGridRef}>
          {cars[activeCategory].map((car) => (
            <div 
              key={car.id} 
              className={styles.carCard}
              onMouseEnter={() => handleMouseEnter(car.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.imageSlider}>
                <img 
                  src={car.images[currentImageIndex[car.id] || 0]} 
                  alt={`${car.year} ${car.make} ${car.model}`} 
                  className={styles.carImage}
                  loading="lazy"
                />
                <div className={styles.sliderDots}>
                  {car.images.map((_, index) => (
                    <span 
                      key={index}
                      className={`${styles.dot} ${currentImageIndex[car.id] === index ? styles.activeDot : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.carDetails}>
                <h3>{car.year} {car.make} {car.model}</h3>
                <p className={styles.specs}>{car.details}</p>
                <div className={styles.pricing}>
                  <span className={styles.price}>{car.price}</span>
                  <span className={styles.emi}>{car.emi}</span>
                </div>
                <div className={styles.locationContainer}>
                  <span className={styles.locationIcon}>📍</span>
                  <p className={styles.location}>{car.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={styles.scrollButton} 
          onClick={scrollRight}
          disabled={scrollPosition >= (carGridRef.current?.scrollWidth - carGridRef.current?.clientWidth)}
          aria-label="Scroll right"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      
      <div className={styles.footer}>
        <button className={styles.viewAllBtn}>
          View all Pro-Drive cars <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedCars;