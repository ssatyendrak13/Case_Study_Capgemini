import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Container, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Progress, Row } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function OrderInvoice() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    const [modal, setModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [date, setDate] = useState()
    const [time , setTime] = useState()
    const toggle = () => {
        setModal(!modal);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isButtonDisabled = selectedOption === '';

    useEffect(() => {
        document.title = 'Order Invoice';

        fetchOrder(orderId);
    }, [orderId]);

    const fetchOrder = (orderId) => {
        axios
            .get(`${base_URL}/order/${orderId}`)
            .then((response) => {
                if (response.data) {
                    setOrder(response.data);
                    
                    const orderDate = new Date(response.data.orderDate);
                    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
                    const t = orderDate.toLocaleString('en-US', timeOptions);
                    
                    const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
                    const d = orderDate.toLocaleString('en-US', dateOptions);
                    
                    setTime(t); // Extract time
                    setDate(d); // Extract date
                    console.log("////////////////////////////////",order.shippingAddress[0]);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    if (!order) {
        return <div>Loading...</div>;
    }



    const cancelThisProduct = () => {
        axios
            .post(`${base_URL}/changeStatus/${orderId}`, { orderStatus: 'cancelled' })
            .then((response) => {
                if (response.data) {
                    console.log(response.data);
                    navigate('/profile/orderHistory'); // Redirect to /orderhistory after completing the task
                    toast.success('Canceled', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    return (
        <section className="h-100 gradient-custom">

            <ToastContainer />
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={10} xl={8}>
                        <Card className="p-4" style={{ width: '100%', textAlign: 'left', borderRadius: '10px' }}>
                            <CardTitle style={{ display: 'flex', justifyContent: 'space-between' }} tag="h4">
                                Invoice

                                {order.orderStatus !== 'cancelled' && (
                                    <Button style={{ width: 90, }} color="danger" onClick={toggle} >
                                        Cancel
                                    </Button>
                                )}
                            </CardTitle>


                                <Modal isOpen={modal} toggle={toggle} centered={true}>
                                        <ModalHeader toggle={toggle}>
                                            <span style={{fontSize:' 24px', color: 'red', fontWeight: 600}}>Reason for cancellation</span>
                                            <p className="small text-muted mb-0">Please tell us the correct reason for cancellation. This information is only used to improve our service.</p>
                                        </ModalHeader>
                                  
                                    <ModalBody>
                                        <FormGroup tag="fieldset">
                                            <legend>Radio Buttons</legend>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Product not required anymore
                                                </Label>
                                            </FormGroup>


                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Cash Issue
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Ordered By Mistake
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Wants to change style/color
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Duplicate Order
                                                </Label>
                                            </FormGroup>
                                            {/* Add other radio buttons with similar structure */}
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={cancelThisProduct} disabled={isButtonDisabled}>
                                            Cancel
                                        </Button>

                                    </ModalFooter>
                                </Modal>
                            <CardBody className="px-4 py-2">

                                {order.orderProducts.map((product) => (
                                    
                                    <Card key={product.productId} className="shadow-0 border mb-4">
                                        <CardBody>
                                            <Row>
                                                <Col md={3}>
                                                    <img src={product.image} className="img-fluid" alt="Product" />
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text mb-0" style={{ fontWeight: 500 }}>{product.productName}</p>
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty. {product.quantity}</p>
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text mb-0" style={{ fontWeight: 'bold' }}>
                                                        ${product.price}
                                                    </p>

                                                </Col>
                                            </Row>
                                            <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                            <Row className="d-flex align-items-center">
                                                <Col md={2}>
                                                    <p style={{ fontWeight: 500 }} className="text mb-0 small">Track Order</p>
                                                </Col>
                                                <Col md={10}>
                                                    <Progress
                                                        animated={order.orderStatus === 'cancelled' ? false : true}
                                                        style={{ height: '8px', borderRadius: '16px' }}
                                                        value={order.orderStatus === 'cancelled' ? 100 : (order.orderStatus === 'shipped' ? 50 : 20)}
                                                        color={order.orderStatus === 'cancelled' ? 'danger' : 'info'}
                                                        className="mb-3"
                                                    />

                                                    {order.orderStatus === 'cancelled' ? (
                                                        <div className="d-flex justify-content-between mb-1">
                                                            <p style={{ fontWeight: 'bold', marginLeft: '0' }}>Order</p>
                                                            <p style={{ fontWeight: 'bold', marginLeft: '0' }}></p>
                                                            <p style={{ fontWeight: 'bold', marginLeft: '0' }}>Cancelled</p>
                                                        </div>
                                                    ) : (
                                                            <div className="d-flex justify-content-between mb-1">
                                                                <p style={{ fontWeight: 'bold', marginLeft: '0' }}>Order</p>
                                                                <p style={{ fontWeight: 'bold', marginLeft: '0' }}>Shipped</p>
                                                            <p style={{ fontWeight: 'bold', marginRight: '0' }}>Delivered</p>
                                                        </div>
                                                    )}
                                                </Col>

                                            </Row>
                                        </CardBody>
                                    </Card>
                                ))}
                                <div className="d-flex justify-content-between pt-2">
                                    <p className="fw-bold mb-0">Order Details</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Total + GST 18%</span> ${order.amountPaid - ( 5).toFixed(2)}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted mb-0">OrderId: #{orderId}</p>
                                    <p className="text-muted mb-0">
                                        <span className="fw-bold me-4"></span>
                                        
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted mb-0">Order Date: {time}, {date}</p>
                                    {/* <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span>${order.amountPaid * .18}</p> */}
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> $5</p>
                                </div>
                                <div className="d-flex justify-content-between mb-5">

                                    
                                    <div style={{ width: 350, overflow: 'auto' }}>
                                        <CardTitle>
                                            Address :  <span style={{fontWeight:500}}>{order.shippingAddress[0].fullName}</span>
                                        </CardTitle>
                                        <span style={{ fontWeight: 500 }}>
                                            {order.shippingAddress[0].phoneNumber}
                                        </span> 
                                        <p style={{ wordWrap: 'break-word' }}>
                                            {order.shippingAddress[0].addressLine}, {order.shippingAddress[0].locality}, {order.shippingAddress[0].city}, {order.shippingAddress[0].state} - {order.shippingAddress[0].pincode}
                                        </p>
                                    </div>


                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Payment method</span>{order.modeOfPayment} </p>
                                </div>
                            </CardBody>
                            <CardFooter className="border-0 px-4 py-5" style={{ backgroundColor: 'black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>

                                {order.orderStatus === 'cancelled' ? (
                                    <div className="d-flex justify-content-end align-items-center mb-0">
                                        <span style={{ color: 'red', fontSize: '35px', marginRight: 10 }}><FontAwesomeIcon icon={faXmark} /></span>
                                        <span style={{ color: '#fff' }}>Cancelled</span>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-end align-items-center mb-0">
                                        <h4 style={{ color: '#fff', marginRight: 20 }}>Total Amount :- </h4>
                                            <h5 style={{ color: '#fff' }}>
                                                ${(order.amountPaid )}
                                            </h5>

                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OrderInvoice;
