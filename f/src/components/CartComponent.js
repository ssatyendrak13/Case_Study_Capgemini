import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartComponent = () => {
    const [products, setProducts] = useState([]);
    const [selectedShipping, setSelectedShipping] = useState(1);

    useEffect(() => {
        document.title = 'Cart';
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        axios
            .get(`${base_URL}/cart`)
            .then((response) => {
                if (response.data) {
                    console.log(response.data);
                    setProducts(response.data);
                    console.log('.................', products.image);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to fetch cart items!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            });
    };

    const handleQuantityChange = (productId, increment) => {
        const updatedProducts = products.map((product) => {
            if (product.productId === productId) {
                const quantity = product.quantity + increment;
                if (quantity >= 0 && quantity <= 3) {
                    product.quantity = quantity;
                    updateCartQuantity(productId, product); // Update the quantity on the backend
                } else {
                    toast.error('Maximum 3 purchases at a time!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                }
            }
            return product;
        });

        setProducts(updatedProducts);
    };

    const handleRemoveProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.productId !== productId);
        setProducts(updatedProducts);
        deleteCart(productId);
    };

    const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const updateCartQuantity = (productId, product) => {
        axios
            .put(`${base_URL}/cart/${productId}`, product)
            .then((response) => {
                console.log('Quantity updated:', response.data);
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to update quantity!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            });
    };

    const deleteCart = (productId) => {
        axios
            .delete(`${base_URL}/cart/${productId}`)
            .then((response) => {
                console.log('Cart deleted:', response.data);
                toast.success('Removed from cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to remove from cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            });
    };

    const handleShippingChange = (e) => {
        setSelectedShipping(parseInt(e.target.value));
    };

    const calculateShippingCost = () => {
        if (selectedShipping === 1) {
            return 5;
        }
        // Add logic for other shipping options if needed
        return 0;
    };

    const calculateFinalAmount = () => {
        const totalPrice = calculateTotalPrice(products);
        const shippingCost = calculateShippingCost();
        return totalPrice + shippingCost;
    };

    return (
        <section className="h-100 h-custom">
            <ToastContainer />
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={12}>
                        <Card className="card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col lg={8}>
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h2 className="fw-bold mb-0 text-black">Shopping Cart</h2>
                                                <h6 className="mb-0 text-muted">{products.length} items</h6>
                                            </div>
                                            <hr className="my-4" />

                                            {products.length === 0 ? (
                                                <p className="text-muted">Nothing is added yet.</p>
                                            ) : (
                                                <>
                                                    {products.map((product) => (
                                                        <Row
                                                            key={product.productId}
                                                            className="mb-4 d-flex justify-content-between align-items-center"
                                                        >
                                                            <Col md={2} lg={2} xl={2}>
                                                                <img
                                                                    src={product.image}
                                                                    className="img-fluid rounded-3"
                                                                    alt={product.productName}
                                                                />
                                                            </Col>
                                                            <Col md={3} lg={3} xl={3}>
                                                                <h6 className="text-muted">{product.category}</h6>
                                                                <h6 className="text-black mb-0">{product.productName}</h6>
                                                            </Col>
                                                            <Col md={3} lg={3} xl={2} className="d-flex">
                                                                <Button
                                                                    variant="link"
                                                                    className="px-2"
                                                                    onClick={() => handleQuantityChange(product.productId, -1)}
                                                                    disabled={product.quantity <= 1}
                                                                    style={{
                                                                        background: 'none',
                                                                        border: 'none',
                                                                        padding: '0',
                                                                        fontSize: '30px',
                                                                        color: 'blue',
                                                                        cursor: 'pointer',
                                                                        textDecoration: 'none',
                                                                    }}
                                                                >
                                                                    -
                                                                </Button>

                                                                <input
                                                                    min="0"
                                                                    name="quantity"
                                                                    value={product.quantity}
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                    onChange={() => handleQuantityChange(product.productId, 0)}
                                                                    style={{
                                                                        border: 'none',
                                                                        outline: 'none',
                                                                        width: '40px',
                                                                        cursor: 'default',
                                                                        textAlign: 'center',
                                                                    }}
                                                                    readOnly
                                                                />
                                                                <Button
                                                                    variant="link"
                                                                    className="px-2"
                                                                    onClick={() => handleQuantityChange(product.productId, 1)}
                                                                    style={{
                                                                        background: 'none',
                                                                        border: 'none',
                                                                        padding: '0',
                                                                        fontSize: '30px',
                                                                        color: 'blue',
                                                                        cursor: 'pointer',
                                                                        textDecoration: 'none',
                                                                    }}
                                                                >
                                                                    +
                                                                </Button>
                                                            </Col>
                                                            <Col md={3} lg={2} xl={2} offset-lg={1} className="text-end">
                                                                <h6 className="mb-0">$ {product.price.toFixed(2)}</h6>
                                                            </Col>
                                                            <Col md={1} lg={1} xl={1} className="text-end">
                                                                <Button
                                                                    variant="link"
                                                                    className="text-muted"
                                                                    onClick={() => handleRemoveProduct(product.productId)}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    ))}
                                                </>
                                            )}

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <h6 className="mb-0">
                                                    <Link to="/" className="text-body">
                                                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                                                        Back to shop
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </Col>
                                    {products.length > 0 && (
                                        <Col lg={4} className="bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />

                                                {/* Summary details */}
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text">Items ({products.length})</h5>
                                                    <h5 className="text-end">$ {calculateTotalPrice(products).toFixed(2)}</h5>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text">Shipping</h5>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="shipping"
                                                            id="standardShipping"
                                                            value="1"
                                                            checked={selectedShipping === 1}
                                                            onChange={handleShippingChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="standardShipping">
                                                            Standard Shipping-5$
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h4 className="text-uppercase">Total</h4>
                                                    <h4 className="text-end">$ {calculateFinalAmount().toFixed(2)}</h4>
                                                </div>

                                                <Link to="/checkout" className="cart-link">
                                                    <Button variant="dark" className="btn-lg btn-block">
                                                        Checkout
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CartComponent;




// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import base_URL from '../api/BootAPI';

// const CartComponent = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedShipping, setSelectedShipping] = useState(1);

//     useEffect(() => {
//         fetchCartItems();
//     }, []);

//     const fetchCartItems = () => {
//         axios
//             .get(`${base_URL}/cart`)
//             .then((response) => {
//                 if (response.data) {
//                     console.log(response.data);
//                     setProducts(response.data);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const handleQuantityChange = (productId, increment) => {
//         const updatedProducts = products.map((product) => {
//             if (product.productId === productId) {
//                 const quantity = product.quantity + increment;
//                 if (quantity >= 0) {
//                     updateCartQuantity(productId, quantity);
//                     console.log(productId, quantity) // Update the quantity on the backend
//                     return { ...product, quantity };
//                 }
//             }
//             return product;
//         });

//         setProducts(updatedProducts);
//     };

//     const handleRemoveProduct = (productId) => {
//         const updatedProducts = products.filter((product) => product.productId !== productId);
//         setProducts(updatedProducts);
//         deleteCart(productId);
//     };

//     const calculateTotalPrice = (products) => {
//         return products.reduce((total, product) => total + product.price * product.quantity, 0);
//     };

//     const updateCartQuantity = (productId, quantity) => {
//         const updatedProduct = { quantity };
//         axios
//             .put(`${base_URL}/cart/${productId}`, updatedProduct)
//             .then((response) => {
//                 console.log('Quantity updated:', response.data);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const deleteCart = (productId) => {
//         axios
//             .delete(`${base_URL}/cart/${productId}`)
//             .then((response) => {
//                 console.log('Cart deleted:', response.data);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const handleShippingChange = (e) => {
//         setSelectedShipping(parseInt(e.target.value));
//     };

//     const calculateShippingCost = () => {
//         if (selectedShipping === 1) {
//             return 5;
//         }
//         // Add logic for other shipping options if needed
//         return 0;
//     };

//     const calculateFinalAmount = () => {
//         const totalPrice = calculateTotalPrice(products);
//         const shippingCost = calculateShippingCost();
//         return totalPrice + shippingCost;
//     };

//     return (
//         <section className="h-100 h-custom">
//             <Container className="py-5 h-100">
//                 <Row className="d-flex justify-content-center align-items-center h-100">
//                     <Col lg={12}>
//                         <Card
//                             className="card-registration card-registration-2"
//                             style={{ borderRadius: '15px' }}
//                         >
//                             <Card.Body className="p-0">
//                                 <Row className="g-0">
//                                     <Col lg={8}>
//                                         <div className="p-5">
//                                             <div className="d-flex justify-content-between align-items-center mb-5">
//                                                 <h2 className="fw-bold mb-0 text-black">Shopping Cart</h2>
//                                                 <h6 className="mb-0 text-muted">{products.length} items</h6>
//                                             </div>
//                                             <hr className="my-4" />

//                                             {products.length === 0 ? (
//                                                 <p className="text-muted">Nothing is added yet.</p>
//                                             ) : (
//                                                 <>
//                                                     {products.map((product) => (
//                                                         <Row
//                                                             key={product.productId}
//                                                             className="mb-4 d-flex justify-content-between align-items-center"
//                                                         >
//                                                             <Col md={2} lg={2} xl={2}>
//                                                                 <img
//                                                                     src={product.image}
//                                                                     className="img-fluid rounded-3"
//                                                                     alt={product.productName}
//                                                                 />
//                                                             </Col>
//                                                             <Col md={3} lg={3} xl={3}>
//                                                                 <h6 className="text-muted">Shirt</h6>
//                                                                 <h6 className="text-black mb-0">{product.productName}</h6>
//                                                             </Col>
//                                                             <Col md={3} lg={3} xl={2} className="d-flex">
//                                                                 <Button
//                                                                     variant="link"
//                                                                     className="px-2"
//                                                                     onClick={() => handleQuantityChange(product.productId, -1)}
//                                                                     disabled={product.quantity <= 1}
//                                                                     style={{
//                                                                         background: 'none',
//                                                                         border: 'none',
//                                                                         padding: '0',
//                                                                         fontSize: '30px',
//                                                                         color: 'blue',
//                                                                         cursor: 'pointer',
//                                                                         textDecoration: 'none',
//                                                                     }}
//                                                                 >
//                                                                     -
//                                                                 </Button>

//                                                                 <input
//                                                                     min="0"
//                                                                     name="quantity"
//                                                                     value={product.quantity}
//                                                                     type="number"
//                                                                     className="form-control form-control-sm"
//                                                                     onChange={() => handleQuantityChange(product.productId, 0)}
//                                                                     style={{
//                                                                         border: 'none',
//                                                                         outline: 'none',
//                                                                         width: '50px',
//                                                                         cursor: 'default',
//                                                                         textAlign: 'center',
//                                                                     }}
//                                                                     readOnly
//                                                                 />
//                                                                 <Button
//                                                                     variant="link"
//                                                                     className="px-2"
//                                                                     onClick={() => handleQuantityChange(product.productId, 1)}
//                                                                     style={{
//                                                                         background: 'none',
//                                                                         border: 'none',
//                                                                         padding: '0',
//                                                                         fontSize: '30px',
//                                                                         color: 'blue',
//                                                                         cursor: 'pointer',
//                                                                         textDecoration: 'none',
//                                                                     }}
//                                                                 >
//                                                                     +
//                                                                 </Button>
//                                                             </Col>
//                                                             <Col md={3} lg={2} xl={2} offset-lg={1} className="text-end">
//                                                                 <h6 className="mb-0">$ {product.price.toFixed(2)}</h6>
//                                                             </Col>
//                                                             <Col md={1} lg={1} xl={1} className="text-end">
//                                                                 <Button
//                                                                     variant="link"
//                                                                     className="text-muted"
//                                                                     onClick={() => handleRemoveProduct(product.productId)}
//                                                                 >
//                                                                     <FontAwesomeIcon icon={faTrash} />
//                                                                 </Button>
//                                                             </Col>
//                                                         </Row>
//                                                     ))}
//                                                 </>
//                                             )}

//                                             <hr className="my-4" />

//                                             <div className="pt-5">
//                                                 <h6 className="mb-0">
//                                                     <Link to="/" className="text-body">
//                                                         <i className="fas fa-long-arrow-alt-left me-2"></i>
//                                                         Back to shop
//                                                     </Link>
//                                                 </h6>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                     {products.length > 0 && (
//                                         <Col lg={4} className="bg-grey">
//                                             <div className="p-5">
//                                                 <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
//                                                 <hr className="my-4" />

//                                                 {/* Summary details */}
//                                                 <div className="d-flex justify-content-between mb-4">
//                                                     <h5 className="text">Items ({products.length})</h5>
//                                                     <h5 className="text-end">$ {calculateTotalPrice(products).toFixed(2)}</h5>
//                                                 </div>
//                                                 <div className="d-flex justify-content-between mb-4">
//                                                     <h5 className="text">Shipping</h5>
//                                                     <div className="form-check">
//                                                         <input
//                                                             className="form-check-input"
//                                                             type="radio"
//                                                             name="shipping"
//                                                             id="standardShipping"
//                                                             value="1"
//                                                             checked={selectedShipping === 1}
//                                                             onChange={handleShippingChange}
//                                                         />
//                                                         <label className="form-check-label" htmlFor="standardShipping">
//                                                             Standard Shipping-5$
//                                                         </label>
//                                                     </div>
//                                                 </div>
//                                                 <hr className="my-4" />

//                                                 <div className="d-flex justify-content-between mb-4">
//                                                     <h4 className="text-uppercase">Total</h4>
//                                                     <h4 className="text-end">$ {calculateFinalAmount().toFixed(2)}</h4>
//                                                 </div>

//                                                 <Link to="/checkout" className="cart-link">
//                                                     <Button variant="dark" className="btn-lg btn-block">
//                                                         Checkout
//                                                     </Button>
//                                                 </Link>
//                                             </div>
//                                         </Col>
//                                     )}
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default CartComponent;
