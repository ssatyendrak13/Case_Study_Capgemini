// import React, { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem, Col, Input, Button } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';


// const ProductDetails = () => {
//     const { productId } = useParams();
//     const [productDetail, setProductDetail] = useState();
//     // Fetch product details using Axios or any other method
//     // Replace the placeholder data with the actual fetched data

//     useEffect(() => {
//         console.log(productId)
//         axios
//             .get(`${base_URL}/products/${productId}`)
//             .then((response) => {
//                 if (response.data) {
//                     console.log(response.data)
//                     setProductDetail(response.data);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }, [productId]);




//     // const productData = {
//     //     productName: "Acer Nitro",
//     //     category: "Laptop",
//     //     image: ["https://m.media-amazon.com/images/I/61N6Ojp790L._AC_UL600_FMwebp_QL65_.jpg"],
//     //     price: 800,
//     //     rating: 3,
//     //     description: "Processor: i5 7520U",
//     //     stockQuantity: 45656,
//     //     specification: {
//     //         Brand: "Acer",
//     //         "Model Name": "Nitro (2023)",
//     //         "Screen Size": "15.6 Inches",
//     //         Colour: "Mixed Black",
//     //         "Hard Disk Size": "256 GB"
//     //     }
//     // };

//     const { productName, category, image, price, rating, description, specification } = productDetail;

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <Card className="card" style={{ width: '85%', textAlign: 'left' }}>
//                 <Row className='profile-container'>


//                     <Col md={5}>
//                         <div className="img-showcase">

//                             <CardImg top src={image[0]} alt="Product Image" />

//                         </div>

//                     </Col>
//                     <Col style={{borderLeft: '1px solid black', paddingLeft: '2vw'}} md={7}>
//                         <CardBody className="product-content">
//                             <div className="product-detail">
//                                 <CardTitle tag="h2" className="product-title">{productName}</CardTitle>
//                                 <p className='m-0' style={{ fontSize: '18px', textTransform: 'uppercase', color: 'orangered'}}>
//                                     {category}
//                                 </p>
                               
//                                     <div className="product-rating">
//                                         <span className="m-1">Rating:</span>
//                                         <span style={{ color: 'goldenrod' }}>
//                                             {[...Array(rating)].map((_, index) => (
//                                                 <FontAwesomeIcon  icon={solidStar} />
//                                             ))}
//                                             {[...Array(5 - rating)].map((_, index) => (
//                                                 <FontAwesomeIcon key={index + rating} icon={regularStar} />
//                                             ))}
//                                         </span>
//                                     </div>
//                                 <div className="product-price my-4">
//                                     <p style={{ fontWeight: 'bold',fontSize: '22px' }} className="new-price">Price: <span style={{color: 'orange' }}>${price.toFixed(2)}</span></p>

//                                 </div>
//                                 <div className="purchase-info">
//                                     <input type="number" min="0" defaultValue="1" />
//                                     <Button color="primary" className="btn">
//                                         Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
//                                     </Button>
//                                 </div>
//                                 <div className="product-specification my-5">
//                                     <h3>Specification:</h3>
//                                     <ListGroup>
//                                         {Object.entries(specification).map(([key, value]) => (
//                                             <ListGroupItem key={key}>
//                                                 <span style={{fontWeight: 600}} className="spec-key">{key}:</span> {value}
//                                             </ListGroupItem>
//                                         ))}
//                                     </ListGroup>
//                                 </div>
//                             </div>
//                         </CardBody>
//                     </Col>


                    
//                 </Row>
//             </Card>
//         </div>
//     );
// };

// export default ProductDetails;import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import base_URL from '../api/BootAPI';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [inCart, setInCart] = useState(false);
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState([]);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [specification, setSpecification] = useState({});
    const [productDetail, setProductDetail] = useState();
    const [cartProduct, setCartProduct] = useState({});

    useEffect(() => {
        fetchProductDetail(productId);
        checkCartProduct(productId);
    }, [productId]);

    const checkCartProduct = (productId) => {
        axios
            .get(`${base_URL}/cart/${productId}`)
            .then((response) => {
                if (response.data) {
                    setQuantity(response.data.quantity);
                    setInCart(true);
                    setCartProduct(response.data); // Update the cartProduct state
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const fetchProductDetail = (productId) => {
        try {
            axios
                .get(`${base_URL}/products/${productId}`)
                .then((response) => {
                    if (response.data) {
                        const {
                            productName,
                            category,
                            image,
                            price,
                            rating,
                            description,
                            specification,
                        } = response.data;
                        setProductName(productName);
                        setCategory(category);
                        setImage(image);
                        setPrice(price);
                        setRating(rating);
                        setDescription(description);
                        setSpecification(specification);
                        setProductDetail(response.data);
                        console.log(productDetail);
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                    toast.error('Failed to fetch product details!', { autoClose: 2000 });
                });
        } catch (error) {
            console.log('Error:', error);
            toast.error('Failed to fetch product details!', { autoClose: 2000 });
        }
    };

    const updateCartQuantity = (cartProduct) => {
        axios
            .put(`${base_URL}/cart/${productId}`, cartProduct)
            .then((response) => {
                console.log('Quantity updated:', response.data);
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to update quantity!', { autoClose: 2000 });
            });
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.max(Math.min(prevQuantity + amount, 3), 0); // Limit the quantity between 0 and 3
            const updatedCartProduct = { ...cartProduct, quantity: newQuantity };
            updateCartQuantity(updatedCartProduct);
            return newQuantity;
        });
    };

    const handleAddToCart = () => {
        const newProduct = {
            productId: productDetail.productId,
            productName: productDetail.productName,
            quantity: 1,
            price: productDetail.price,
            image: productDetail.image,
            category: productDetail.category,
        };
        axios
            .post(`${base_URL}/cart`, newProduct)
            .then((response) => {
                console.log('data:', response.data);
                setCartProduct(response.data);
                setQuantity(response.data.quantity);
                toast.success('Added to Cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to add to cart!', { autoClose: 2000 });
            });
        setInCart(true);
    };

    const renderStars = (rating) => {
        const solidStarsCount = Math.floor(rating);
        const remainingStarsCount = 5 - solidStarsCount;
        const stars = [];

        // Add solid stars
        for (let i = 0; i < solidStarsCount; i++) {
            stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
        }

        // Add regular stars
        for (let i = 0; i < remainingStarsCount; i++) {
            stars.push(<FontAwesomeIcon icon={regularStar} key={solidStarsCount + i} />);
        }

        return stars;
    };

    const handleBuyNow = () => {
        setInCart(true);
        navigate('/cart');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ToastContainer />
            <Card className="card" style={{ width: '85%', textAlign: 'left' }}>
                <Row className="profile-container">
                    <Col md={5}>
                        <div className="img-showcase">
                            <CardImg top src={image[0]} alt="Product Image" />
                        </div>
                    </Col>
                    <Col style={{ borderLeft: '1px solid #09090936', paddingLeft: '2vw' }} md={7}>
                        <CardBody className="product-content">
                            <div className="product-detail">
                                <CardTitle tag="h2" className="product-title">
                                    {productName}
                                </CardTitle>
                                <p className="m-0" style={{ fontSize: '18px', textTransform: 'uppercase', color: 'orangered' }}>
                                    {category}
                                </p>

                                <hr className="product-hr" />
                                <div className="product-description">
                                    <h5 className="my-2">Product Description</h5>
                                    <p>{description}</p>
                                    <div className="product-rating">
                                        <span className="m-1">Rating:</span>
                                        <span style={{ color: '#FFD700' }}>{renderStars(rating)}</span>
                                    </div>
                                </div>
                                <hr className="product-hr" />
                                <div className="product-price my-4">
                                    <p style={{ fontWeight: 'bold', fontSize: '22px' }} className="new-price">
                                        Price: <span style={{ color: 'orange' }}>${price.toFixed(2)}</span>
                                    </p>
                                </div>
                                <div className="purchase-info" style={{ textAlign: 'right' }}>
                                    {inCart ? (
                                        <>
                                            <Row className="justify-content-end">
                                                <Col md={4} className="d-flex align-items-center">
                                                    <Button
                                                        color="primary"
                                                        size="sm"
                                                        outline
                                                        onClick={() => handleQuantityChange(-1)}
                                                        disabled={quantity === 1}
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </Button>
                                                    <span style={{width: 19 , textAlign: 'center' }} className="mx-2">{quantity}</span>
                                                    <Button
                                                        color="primary"
                                                        size="sm"
                                                        outline
                                                        onClick={() => handleQuantityChange(1)}
                                                        disabled={quantity === 3}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </Col>
                                                <Col md={8} className="text-right">
                                                    <Button color="warning"  onClick={handleBuyNow}>
                                                        Buy Now
                                                    </Button>
                                                </Col>
                                            </Row>
                                            
                                        </>
                                    ) : (
                                            <Button color="warning"  onClick={handleAddToCart}>
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
                <hr className="product-hr" />
                <div className="product-specification px-5">
                    <h3>Product Specification</h3>
                    <ListGroup>
                        {Object.entries(specification).map(([key, value]) => (
                            <ListGroupItem key={key}>
                                <strong>{key}:-</strong> {value}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            </Card>
        </div>
    );
};

export default ProductDetails;
