import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CardTitle } from 'reactstrap';

const WishList = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Cotton T-shirt',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
            price: 44.00,
        },
        {
            id: 2,
            name: 'Cotton T-shirt',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
            price: 444.00,
        },
        // Add more dummy products here
    ]);

    const handleAddToCart = (productId) => {
        // Logic to add the product to the cart
        console.log(`Add to cart: Product ID ${productId}`);
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    return (
        <div className='py-3' style={{ display:'flex', justifyContent:'center', width:'100%'}}>
            <Card className='p-4' style={{ width: '90%', textAlign: 'left' }}>

                <CardTitle className='mb-4' tag="h3">
                    Wish List
                </CardTitle>
                <Container>
                    <Row className="mb-4">
                        {products.map((product) => (
                            <Col key={product.id} md={4} lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>€ {product.price.toFixed(2)}</Card.Text>
                                        <Button onClick={() => handleAddToCart(product.id)} variant="primary">
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Card>
        </div>
    );
};

export default WishList;
