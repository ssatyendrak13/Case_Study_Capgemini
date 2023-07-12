


// import React, { useEffect, useState } from 'react';
// import { Table, Button } from 'reactstrap';
// import CartComponent from './CartComponent';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CartItem = ({ item, updateQuantity, removeFromCart }) => {
//   const { product, quantity } = item;
//   const currAmount = product.price * quantity;

//   const handleQuantityChange = (event) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     updateQuantity(item, newQuantity);
//   };

//   return (
//     <tr>
//       <td>
//         <img src={product.image} alt="Product" style={{ width: '50px', height: '50px' }} />
//       </td>
//       <td>{product.name}</td>
//       <td>{product.price}</td>
//       <td>
//         <input
//           type="number"
//           name="pqty"
//           value={quantity}
//           style={{ maxWidth: '70px' , borderRadius: 4,  textAlign: 'center' }}
//           min="0"
//           onChange={handleQuantityChange}
//         />
//       </td>
//       <td>{currAmount}</td>
//       <td>
//         <Button
//           size="sm"
//           outline
//           color="danger"
//           onClick={() => removeFromCart(item)}
//           disabled={quantity <= 0}
//         >
//           {quantity <= 0 ? 'Remove' : '-'}
//         </Button>
//         <Button size="sm" outline color="success" onClick={() => updateQuantity(item, quantity + 1)}>
//           +
//         </Button>
//       </td>
//     </tr>
//   );
// };

// const Cart = ({ userName }) => {
//   const [cartItems, setCartItems] = useState([
//   ]);


//   useEffect(() => {
//     axios.get(`${base_URL}/cart`)
//       .then((response) => {
//         if (response.data) {
//           setCartItems(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   }, []);

//   const updateQuantity = (item, newQuantity) => {
//     const updatedCartItems = cartItems.map((cartItem) =>
//       cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
//     );
//     setCartItems(updatedCartItems);
//   };

//   const removeFromCart = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
//     setCartItems(updatedCartItems);
//   };

//   const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

//   return (
//     <div className="container">
//       <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
//         Cart Items
//       </div>
//       <Table>
//         <thead style={{ backgroundColor: 'black', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
//           <tr>
//             <th>Picture</th>
//             <th>Products</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Amount</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody style={{ backgroundColor: 'white', fontSize: '15px', fontWeight: 'bold' }}>
//           {cartItems.map((item, index) => (
//             <CartItem
//               key={index}
//               item={item}
//               updateQuantity={updateQuantity}
//               removeFromCart={removeFromCart}
//             />
//           ))}
//           <tr className='ddddd' style={{ backgroundColor: 'black', color: 'white' }}>
//             <td colSpan="5" style={{ textAlign: 'center' }}>
//               Total Amount to Pay (in Rupees)
//             </td>
//             <td>{totalAmount}</td>
//           </tr>
//           <tr style={{ backgroundColor: 'black', color: 'white' }}>
//             <td colSpan="4" style={{ textAlign: 'center' }}></td>
//             <td></td>
//             <td colSpan="2" align="center">
//               <Button color="dark">Pay Now</Button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>



//       <CartComponent />
//     </div>


    
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from 'react';
// import { Table, Button } from 'reactstrap';
// import CartComponent from './CartComponent';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CartItem = ({ item, updateQuantity, removeFromCart }) => {
//   const { product, quantity } = item;
//   const currAmount = product.price * quantity;

//   const handleQuantityChange = (event) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     updateQuantity(item, newQuantity);
//   };

//   return (
//     <tr>
//       <td>
//         <img src={product.image} alt="Product" style={{ width: '50px', height: '50px' }} />
//       </td>
//       <td>{product.name}</td>
//       <td>{product.price}</td>
//       <td>
//         <input
//           type="number"
//           name="pqty"
//           value={quantity}
//           style={{ maxWidth: '70px', borderRadius: 4, textAlign: 'center' }}
//           min="0"
//           onChange={handleQuantityChange}
//         />
//       </td>
//       <td>{currAmount}</td>
//       <td>
//         <Button
//           size="sm"
//           outline
//           color="danger"
//           onClick={() => removeFromCart(item)}
//           disabled={quantity <= 0}
//         >
//           {quantity <= 0 ? 'Remove' : '-'}
//         </Button>
//         <Button size="sm" outline color="success" onClick={() => updateQuantity(item, quantity + 1)}>
//           +
//         </Button>
//       </td>
//     </tr>
//   );
// };

// const Cart = ({ userName }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         if (response.data) {
//           setCartItems(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const updateQuantity = (item, newQuantity) => {
//     const updatedCartItems = cartItems.map((cartItem) =>
//       cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
//     );
//     setCartItems(updatedCartItems);
//   };

//   const removeFromCart = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
//     setCartItems(updatedCartItems);
//   };

//   const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

//   const handlePayNow = () => {
//     // Implement the logic to process the payment here
//     console.log('Payment processed!');
//   };

//   return (
//     <div className="container">
//       <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
//         Cart Items
//       </div>
//       <Table>
//         <thead style={{ backgroundColor: 'black', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
//           <tr>
//             <th>Picture</th>
//             <th>Products</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Amount</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody style={{ backgroundColor: 'white', fontSize: '15px', fontWeight: 'bold' }}>
//           {cartItems.map((item, index) => (
//             <CartItem
//               key={index}
//               item={item}
//               updateQuantity={updateQuantity}
//               removeFromCart={removeFromCart}
//             />
//           ))}
//           <tr className="ddddd" style={{ backgroundColor: 'black', color: 'white' }}>
//             <td colSpan="5" style={{ textAlign: 'center' }}>
//               Total Amount to Pay (in Rupees)
//             </td>
//             <td>{totalAmount}</td>
//           </tr>
//           <tr style={{ backgroundColor: 'black', color: 'white' }}>
//             <td colSpan="4" style={{ textAlign: 'center' }}></td>
//             <td></td>
//             <td colSpan="2" align="center">
//               <Button color="dark" onClick={handlePayNow}>
//                 Pay Now
//               </Button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>

//       <CartComponent />
//     </div>
//   );
// };

// export default Cart;



import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import CartComponent from './CartComponent';
import axios from 'axios';
import base_URL from '../api/BootAPI';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { product, quantity } = item;
  const currAmount = product ? product.price * quantity : 0;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateQuantity(item, newQuantity);
  };

  return (
    <tr>
      <td>
        <img src={product?.image} alt="Product" style={{ width: '50px', height: '50px' }} />
      </td>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td>
        <input
          type="number"
          name="pqty"
          value={quantity}
          style={{ maxWidth: '70px', borderRadius: 4, textAlign: 'center' }}
          min="0"
          onChange={handleQuantityChange}
        />
      </td>
      <td>{currAmount}</td>
      <td>
        <Button
          size="sm"
          outline
          color="danger"
          onClick={() => removeFromCart(item)}
          disabled={quantity <= 0}
        >
          {quantity <= 0 ? 'Remove' : '-'}
        </Button>
        <Button size="sm" outline color="success" onClick={() => updateQuantity(item, quantity + 1)}>
          +
        </Button>
      </td>
    </tr>
  );
};

const Cart = ({ userName }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    axios
      .get(`${base_URL}/cart`)
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setCartItems(response.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const updateQuantity = (item, newQuantity) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = item.product ? item.product.price : 0;
    return total + itemPrice * item.quantity;
  }, 0);

  const handlePayNow = () => {
    // Implement the logic to process the payment here
    console.log('Payment processed!');
  };

  return (
    <div className="container">
      <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
        Cart Items
      </div>
      <Table>
        <thead style={{ backgroundColor: 'black', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
          <tr>
            <th>Picture</th>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'white', fontSize: '15px', fontWeight: 'bold' }}>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <tr className="ddddd" style={{ backgroundColor: 'black', color: 'white' }}>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              Total Amount to Pay (in Rupees)
            </td>
            <td>{totalAmount}</td>
          </tr>
          <tr style={{ backgroundColor: 'black', color: 'white' }}>
            <td colSpan="4" style={{ textAlign: 'center' }}></td>
            <td></td>
            <td colSpan="2" align="center">
              <Button color="dark" onClick={handlePayNow}>
                Pay Now
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <CartComponent />
    </div>
  );
};

export default Cart;
