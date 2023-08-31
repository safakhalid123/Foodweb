// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col } from 'react-bootstrap';
// import RestaurantItem from './RestaurantItem';
// import { restaurant } from './Restdetails'
// function Restaurant() {
// //  const [restaurants, setRestaurants] = useState(restaurant);
// const [restaurants, setRestaurants] = useState(restaurant);


//   useEffect(() => {
//     axios.get('https://abuabz.github.io/restoapii/resto.json')
//       .then(response => {
//         setRestaurants(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const decrement = (id) => {
//     const updatedRestaurants = restaurants.map(restaurant =>
//       restaurant.id === id && restaurant.qty > 1
//         ? { ...restaurant, qty: restaurant.qty - 1 }
//         : restaurant
//     );
//     setRestaurants(updatedRestaurants);
//   };

//   const increment = (id) => {
//     const updatedRestaurants = restaurants.map(restaurant =>
//       restaurant.id === id
//         ? { ...restaurant, qty: restaurant.qty + 1 }
//         : restaurant
//     );
//     setRestaurants(updatedRestaurants);
//   };

//   return (
//     <Container>
//       <h1 className='mt-4 mb-4 bg-info text-white'>Restaurants</h1>
//       <Row>
//         {restaurants.map(restaurant => (
//           <Col key={restaurant.id} md={4}>
//             <RestaurantItem
//               restaurant={restaurant}
//               onDecrement={decrement}
//               onIncrement={increment}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Restaurant;
