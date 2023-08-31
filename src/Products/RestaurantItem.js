// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// function RestaurantItem({ restaurant, onDecrement, onIncrement }) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={restaurant.image} alt={restaurant.name} style={{ height: '200px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>{restaurant.name}</Card.Title>
//         <Card.Text>{restaurant.cuisine}</Card.Text>
//         <Card.Text>Location: {restaurant.location}</Card.Text>
//         <Card.Text>Rating: {restaurant.rating}</Card.Text>
//         <div>
//           <p>
//             Qty:
//             <Button onClick={() => onDecrement(restaurant.id)} className='m-1'>
//               -
//             </Button>
//             {restaurant.qty}
//             <Button onClick={() => onIncrement(restaurant.id)} className='m-1'>
//               +
//             </Button>
//           </p>
//         </div>
//         <Button variant='primary'>Visit</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default RestaurantItem;
