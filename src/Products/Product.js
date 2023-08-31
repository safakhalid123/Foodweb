

import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Product() {
    const [item, setItem] = useState([]);

    const decrement = (id) => {
        const newItem = item.map((items) =>
            items.id === id && items.qty > 1 ? { ...items, qty: items.qty - 1 } : items
        );
        setItem(newItem);
    };

    const increment = (id) => {
        const newItem = item.map((items) =>
            items.id === id ? { ...items, qty: items.qty + 1 } : items
        );
        setItem(newItem);
    };

    useEffect(() => {
        axios.get('https://abuabz.github.io/restoapii/resto.json')
            .then(
              (response) => {
                setItem(response.data[0].table_menu_list)
                console.log(response.data[0].table_menu_list[0].category_dishes);
              }
              )
            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <h1 className='bg-info text-white'>Restaurant</h1>
            {item.map((items) => (
                <div className='d-inline-flex' key={items.id}>
                    <Card className='shadow p-3 m-2 bg-body-tertiary rounded' style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={items.image} style={{ width: '13rem' }} className='p-2' />
                        <Card.Body>
                            <Card.Title>{items.model}</Card.Title>
                            <Card.Text>
                                <h5>{items.price}</h5>
                            </Card.Text>
                            <div>
                                <p>
                                    Qty:
                                    <Button onClick={() => decrement(items.id)} className='m-1'>
                                        -
                                    </Button>
                                    {items.qty}
                                    <Button onClick={() => increment(items.id)} className='m-1'>
                                        +
                                    </Button>
                                </p>
                            </div>
                            <Button variant='primary'>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
         
    );
}

export default Product;









// import React, {useState}from 'react'
// import { restaurant } from "./Productdata";
// import {Button,Card} from 'react-bootstrap';



// function Product() {
//     const [item, setitem] = useState(restaurant);
//     const decrement=(id)=>{
//         const newItem=item.map((items)=>
//         items.id===id && items.qty > 1?{...items,qty:items.qty-1}:items
//         );
//         setitem(newItem);
//     };
//     const increment=(id)=>{
//         const newItem=item.map((items)=>
//         items.id===id?{...items,qty:items.qty+1}:items
//         );
//         setitem(newItem);
//     };

//   return (
//     <div>
//         <h1 className='bg-info text white'>Restaurant</h1>
//         {item.map((items)=>(
//             <div className='d-inline-flex' key={item.id}>
//              <Card className='shadow p-3 m-2 bg-body-tertiary rounded' 
//              style={{ width: '18rem' }}>

//              <Card.Img variant="top" 
//              src={items.image} 
//              style={{width:'13rem'}}
//              className='p-2'
//              />
//              <Card.Body>
//                <Card.Title>{items.model}</Card.Title>
//                <Card.Text>
//                <h5>{items.price}</h5>  
//                </Card.Text>

//                <div>
//                 <p>
//                     Qty:
//                     <Button onClick={()=>decrement(items.id)} className='m-1'>-</Button>
//                     {items.qty}
//                     <Button onClick={()=>increment(items.id)} className='m-1'>+</Button>

//                 </p>
//                </div>
//                <Button variant="primary">Add to cart</Button>
//              </Card.Body>
//            </Card>
//            </div>

//         ))}
       
//     </div>
//   )
// }

// export default Product







// import React, {useState}from 'react'
// import { cosmetics } from "./Productdata";
// import {Button,Card} from 'react-bootstrap';



// function Product() {
//     const [item, setitem] = useState(cosmetics);
//     const decrement=(id)=>{
//         const newItem=item.map((items)=>
//         items.id===id && items.qty > 1?{...items,qty:items.qty-1}:items
//         );
//         setitem(newItem);
//     };
//     const increment=(id)=>{
//         const newItem=item.map((items)=>
//         items.id===id?{...items,qty:items.qty+1}:items
//         );
//         setitem(newItem);
//     };

//   return (
//     <div>
//         <h1 className='bg-info text white'>COSMETICS</h1>
//         {item.map((items)=>(
//             <div className='d-inline-flex' key={item.id}>
//              <Card className='shadow p-3 m-2 bg-body-tertiary rounded' 
//              style={{ width: '18rem' }}>

//              <Card.Img variant="top" 
//              src={items.image} 
//              style={{width:'13rem'}}
//              className='p-2'
//              />
//              <Card.Body>
//                <Card.Title>{items.model}</Card.Title>
//                <Card.Text>
//                <h5>{items.price}</h5>  
//                </Card.Text>

//                <div>
//                 <p>
//                     Qty:
//                     <Button onClick={()=>decrement(items.id)} className='m-1'>-</Button>
//                     {items.qty}
//                     <Button onClick={()=>increment(items.id)} className='m-1'>+</Button>

//                 </p>
//                </div>
//                <Button variant="primary">Add to cart</Button>
//              </Card.Body>
//            </Card>
//            </div>

//         ))}
       
//     </div>
//   )
// }

// export default Product