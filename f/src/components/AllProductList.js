// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';







// const ProductCard = ({ product, userName, setNoOfProducts }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const navigate =useNavigate()
//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

   

   
//     const addToCart = () => {
//         axios
//             .get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 console.log(response);
//                 if (response.data) {
//                     toast.success('Already in cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });

//                 } else {
//                     const newProduct = {
//                         productId: product.productId,
//                         productName: product.productName,
//                         quantity: 1,
//                         price: product.price,
//                         image: product.image,
//                         category: product.category
//                     };
//                     axios
//                         .post(`${base_URL}/cart`, newProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             // setCartQty(response.data.quantity);

//                             axios
//                                 .get(`${base_URL}/cart`)
//                                 .then((response) => {
//                                     console.log('data:', response.data);
//                                     setNoOfProducts(response.data.length);
//                                 })
//                                 .catch((error) => {
//                                     console.log('Error:', error);
//                                 });
//                             toast.success('Added to Cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                             toast.error('Somthing wrong', { autoClose: 2000 });
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };
//     const handleViewDetail = () => {
//         navigate(`/product/${product.productId}`)
//     }
//     return (
//         <div
//             className="col-sm-4 my-2"
//             style={{
//                 width: 'calc(25% )',

//             }}

//         >
//             <Card style={{
//                 textAlign: 'center', minHeight: '360px', backgroundColor: isHovered ? '#00000018' : 'inherit',
//                 transition: 'background-color 0.1s ease',
//             }}>
//                 <CardImg
//                     top
//                     src={product.image}
//                     alt="Product"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     onClick={handleViewDetail}
//                     style={{ height: '240px', width: '100%', objectFit: 'contain', objectPosition: 'center' }}
//                 />
//                 <CardBody style={{ textAlign: 'left' }}>
//                     <CardTitle style={{ textAlign: 'left', fontWeight: 600 }}>{product.productName}</CardTitle>
//                     <p style={{ minHeight: '48px' }} className="text-muted px-2">
//                         {product.description}
//                     </p>
//                     <CardText
//                         style={{
//                             fontWeight: 600,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             paddingRight: '20px',
//                         }}
//                     >
//                         ${product.price}
//                         <Button color="success" onClick={addToCart}>
//                             Add to Cart
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);
//     const { category } = useParams();
//     const [noOfProducts, setNoOfProducts] = useState(0);
//     const navigate = useNavigate()
//     useEffect(() => {
//         getAllProducts();
//         getNoOfProductsInCart();
//     }, [category]);


//     const getAllProducts = () => {
//         axios
//             .get(`${base_URL}/products`)
//             .then((response) => {
//                 console.log(category);

//                 if (category) {
//                     if (category === 'All') {
//                         console.log('category true', response.data);
//                         setProducts(response.data);
//                     } else if (response.data && category === 'Style-Hub') {
//                         const filteredProducts = response.data.filter((product) => {
//                             return product.category === 'Clothing' || product.category === 'Footwear' || product.category === 'Watches';
//                         });

//                         setProducts(filteredProducts);
//                     } else {
//                         const filteredProducts = response.data.filter((product) => product.category === category);
//                         setProducts(filteredProducts);
//                     }
//                 } else {
//                     console.log('category false', response.data);
//                     setProducts(response.data);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const getNoOfProductsInCart = () => {
//         axios
//             .get(`${base_URL}/cart`)
//             .then((response) => {
//                 console.log('data:', response.data);
//                 setNoOfProducts(response.data.length);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };
//     const handlCartRedirect = () => {
//         navigate ('/cart')
//     }
//     return (
//         <div>
//             {noOfProducts > 0 && (
//                 <div className="flotingcart"
//                     style={{
//                         width: 70,
//                         height: 70,
//                         position: 'fixed',
//                         bottom: 30,
//                         right: 30,
//                         backgroundColor: '#ffb700',
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         cursor: 'pointer',
//                         zIndex: 1120,
//                         boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
//                     }}
//                     onClick={handlCartRedirect}
//                 >
//                     <div style={{ position: 'relative' }}>
//                         <FontAwesomeIcon icon={faCartShopping} size="2x" />
//                         <p
//                             style={{
//                                 borderRadius: '50%',
//                                 backgroundColor: 'red',
//                                 position: 'absolute',
//                                 bottom: 0,
//                                 right: 0,
//                                 height: 20,
//                                 width: 20,
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 fontSize: 12,
//                                 color: 'white',
//                             }}
//                         >
//                             {noOfProducts}
//                         </p>
//                     </div>
//                 </div>
//             ) }
         



//             <ToastContainer />
//             <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//                 <div className="row text-center px-3" style={{ width: '90%' }}>
//                     <CardHeader className="py-3" tag="h3" style={{ textAlign: 'left' }}>
//                         {category || 'All'}
//                     </CardHeader>
//                     {/* <p>No. of Products in Cart: {noOfProducts}</p> */}
//                     {products.map((product) => (
//                         <ProductCard key={product.productId} product={product} userName={userName} setNoOfProducts={setNoOfProducts} />
//                     ))}
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default AllProductList;




// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardImg,
//     CardBody,
//     CardTitle,
//     CardText,
//     Button,
//     CardHeader,
// } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const ProductCard = ({ product, userName, setNoOfProducts }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const navigate = useNavigate();

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     const addToCart = () => {
//         // Add to cart functionality
//     };

//     const handleViewDetail = () => {
//         navigate(`/product/${product.productId}`);
//     };

//     return (
//         <div className="col-sm-4 my-2" style={{ width: 'calc(25%)' }}>
//             <Card
//                 style={{
//                     textAlign: 'center',
//                     minHeight: '360px',
//                     backgroundColor: isHovered ? '#00000018' : 'inherit',
//                     transition: 'background-color 0.1s ease',
//                 }}
//             >
//                 <CardImg
//                     top
//                     src={product.image}
//                     alt="Product"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     onClick={handleViewDetail}
//                     style={{ height: '240px', width: '100%', objectFit: 'contain', objectPosition: 'center' }}
//                 />
//                 <CardBody style={{ textAlign: 'left' }}>
//                     <CardTitle style={{ textAlign: 'left', fontWeight: 600 }}>{product.productName}</CardTitle>
//                     <p style={{ minHeight: '48px' }} className="text-muted px-2">
//                         {product.description}
//                     </p>
//                     <CardText
//                         style={{
//                             fontWeight: 600,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             paddingRight: '20px',
//                         }}
//                     >
//                         ${product.price}
//                         <Button color="success" onClick={addToCart}>
//                             Add to Cart
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);
//     const { category } = useParams();
//     const [noOfProducts, setNoOfProducts] = useState(0);
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         getAllProducts();
//         getNoOfProductsInCart();
//     }, [category]);

//     const getAllProducts = () => {
//         axios
//             .get(`${base_URL}/products`)
//             .then((response) => {
//                 if (category) {
//                     if (category === 'All') {
//                         setProducts(response.data);
//                     } else if (category === 'Style-Hub') {
//                         const filteredProducts = response.data.filter(
//                             (product) =>
//                                 product.category === 'Clothing' ||
//                                 product.category === 'Footwear' ||
//                                 product.category === 'Watches'
//                         );
//                         setProducts(filteredProducts);
//                     } else {
//                         const filteredProducts = response.data.filter((product) => product.category === category);
//                         setProducts(filteredProducts);
//                     }
//                 } else {
//                     setProducts(response.data);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const getNoOfProductsInCart = () => {
//         axios
//             .get(`${base_URL}/cart`)
//             .then((response) => {
//                 setNoOfProducts(response.data.length);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const handleCartRedirect = () => {
//         navigate('/cart');
//     };

//     const filteredProducts = products.filter((product) =>
//         product.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
//     );

//     return (
//         <div>
//             {noOfProducts > 0 && (
//                 <div
//                     className="flotingcart"
//                     style={{
//                         width: 70,
//                         height: 70,
//                         position: 'fixed',
//                         bottom: 30,
//                         right: 30,
//                         backgroundColor: '#ffb700',
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         cursor: 'pointer',
//                         zIndex: 1120,
//                         boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//                     }}
//                     onClick={handleCartRedirect}
//                 >
//                     <div style={{ position: 'relative' }}>
//                         <FontAwesomeIcon icon={faCartShopping} size="2x" />
//                         <p
//                             style={{
//                                 borderRadius: '50%',
//                                 backgroundColor: 'red',
//                                 position: 'absolute',
//                                 bottom: 0,
//                                 right: 0,
//                                 height: 20,
//                                 width: 20,
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 fontSize: 12,
//                                 color: 'white',
//                             }}
//                         >
//                             {noOfProducts}
//                         </p>
//                     </div>
//                 </div>
//             )}

//             <ToastContainer />
//             <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//                 <div className="row text-center px-3" style={{ width: '90%' }}>
//                     <CardHeader className="py-3 d-flex align-items-center justify-content-between">
//                         <h3 style={{ textAlign: 'left' }}>{category || 'All'}</h3>
//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                     </CardHeader>
//                     {filteredProducts.map((product) => (
//                         <ProductCard
//                             key={product.productId}
//                             product={product}
//                             userName={userName}
//                             setNoOfProducts={setNoOfProducts}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllProductList;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardHeader,
} from 'reactstrap';
import base_URL from '../api/BootAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faCartShopping, faTimes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ product, userName, setNoOfProducts }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const addToCart = () => {
        axios
            .get(`${base_URL}/cart/${product.productId}`)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    toast.success('Already in cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });

                } else {
                    const newProduct = {
                        productId: product.productId,
                        productName: product.productName,
                        quantity: 1,
                        price: product.price,
                        image: product.image,
                        category: product.category
                    };
                    axios
                        .post(`${base_URL}/cart`, newProduct)
                        .then((response) => {
                            console.log('data:', response.data);
                            // setCartQty(response.data.quantity);

                            axios
                                .get(`${base_URL}/cart`)
                                .then((response) => {
                                    console.log('data:', response.data);
                                    setNoOfProducts(response.data.length);
                                })
                                .catch((error) => {
                                    console.log('Error:', error);
                                });
                            toast.success('Added to Cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                        })
                        .catch((error) => {
                            console.log('Error:', error);
                            toast.error('Somthing wrong', { autoClose: 2000 });
                        });
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const handleViewDetail = () => {
        navigate(`/product/${product.productId}`);
    };

    return (
        <div
            className="col-sm-4 my-2"
            style={{
                width: 'calc(25% )',
            }}
        >
            <Card
                style={{
                    textAlign: 'center',
                    minHeight: '360px',
                    backgroundColor: isHovered ? '#00000018' : 'inherit',
                    transition: 'background-color 0.1s ease',
                }}
            >
                <CardImg
                    top
                    src={product.image}
                    alt="Product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleViewDetail}
                    style={{ height: '240px', width: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle style={{ textAlign: 'left', fontWeight: 600 }}>{product.productName}</CardTitle>
                    <p style={{ minHeight: '48px' }} className="text-muted px-2">
                        {product.description}
                    </p>
                    <CardText
                        style={{
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingRight: '20px',
                        }}
                    >
                        ${product.price}
                        <Button color="success" onClick={addToCart}>
                            Add to Cart
                        </Button>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

const AllProductList = ({ userName }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [noOfProducts, setNoOfProducts] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
        getNoOfProductsInCart();
    }, [category]);

    const getAllProducts = () => {
        axios
            .get(`${base_URL}/products`)
            .then((response) => {
                if (category) {
                    if (category === 'All') {
                        setProducts(response.data);
                    } else if (response.data && category === 'Style-Hub') {
                        const filteredProducts = response.data.filter(
                            (product) =>
                                product.category === 'Clothing' ||
                                product.category === 'Footwear' ||
                                product.category === 'Watches'
                        );
                        setProducts(filteredProducts);
                    } else {
                        const filteredProducts = response.data.filter((product) => product.category === category);
                        setProducts(filteredProducts);
                    }
                } else {
                    setProducts(response.data);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const getNoOfProductsInCart = () => {
        axios
            .get(`${base_URL}/cart`)
            .then((response) => {
                setNoOfProducts(response.data.length);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        getAllProducts();
    };

    const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const handlCartRedirect = () => {
        navigate('/cart');
    };

    return (
        <div>
            {noOfProducts > 0 && (
                <div
                    className="flotingcart"
                    style={{
                        width: 70,
                        height: 70,
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        backgroundColor: '#ffb700',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 1120,
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    }}
                    onClick={handlCartRedirect}
                >
                    <div style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faCartShopping} size="2x" />
                        <p
                            style={{
                                borderRadius: '50%',
                                backgroundColor: 'red',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                height: 20,
                                width: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 12,
                                color: 'white',
                            }}
                        >
                            {noOfProducts}
                        </p>
                    </div>
                </div>
            )}

            <ToastContainer />
            <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="row text-center px-3" style={{ width: '90%' }}>
                    <CardHeader className="py-3" tag="h3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {category || 'All'}

                        <div
                            className="float-right"
                            style={{
                                fontSize: '17px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                borderBottom: '1px solid black',
                            }}
                        >
                            <input
                                type="text" placeholder="Search by name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={{
                                    padding: '10px',
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    paddingRight: '40px',
                                }}
                            />
                            <i
                                style={{
                                    padding: '10px',
                                    backgroundColor: 'white',
                                }}
                            >
                                <div style={{ width: 20, height: 20 }} >

                                    {searchQuery && (
                                        <FontAwesomeIcon style={{ padding: 4 }} icon={faXmark} onClick={handleClearSearch} />
                                    )}
                                </div>
                                {/* {searchTerm && (
                                <Button color="link" outline onClick={clearSearch}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            )} */}
                            </i>
                        </div>

                      
                        {/* <div style={{ float: 'right', marginLeft: 'auto' }}>

                         
                            <input
                                type="text"
                                placeholder="Search by name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={{ marginRight: '10px', width: '200px' }}
                            />
                            {searchQuery && (
                                <Button color="danger" onClick={handleClearSearch}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            )} */}
                        {/* </div> */}
                    </CardHeader>
                    {filteredProducts.length === 0 ? (
                        <p>No products found</p>
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.productId}
                                product={product}
                                userName={userName}
                                setNoOfProducts={setNoOfProducts}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProductList;
