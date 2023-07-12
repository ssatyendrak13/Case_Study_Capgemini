import React, { useEffect, useState } from 'react';
import { Table, Button, Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderItem = ({ order }) => {
    const orderDate = new Date(order.orderDate);
    const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const date = orderDate.toLocaleString('en-US', dateOptions);

    // if (order.orderProducts[0].image) {
    //     console.log(order.orderProducts[0].image)
    // }

    useEffect(() => {
        document.title = 'Order History';

    })
    

    return (
        
        <tr style={{fontWeight:400}}>
            <td>
                <div className="col-md-2" style={{ width: "70px" }}>
                    <CardImg src={order.orderProducts[0].image} alt="Product" className="img-fluid" />
                </div>
            </td>
            <td>{date}</td>
            <td>{order.orderProducts.length}</td>
            {/* <td style={{ fontWeight: 500 }}>{order.amountPaid}</td> */}
            <td style={{ fontWeight: 500, textAlign: 'center', color: order.orderStatus === 'cancelled' ? 'red' : order.orderStatus === 'shipped' ? 'green' : '#e6b802 ' }}>
                {order.orderStatus}
            </td>

            <td style={{ textAlign: 'right', paddingRight:30 }}>
                <Button tag={Link} to={`/order/${order.orderId}`} color="dark" outline size="sm">
                    View Details
                </Button>
            </td>
        </tr>
    );
};

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {

        const user = JSON.parse(localStorage.getItem("USER"));
        console.log('/////////////',user);
        axios
            .get(`${base_URL}/order/customerId/${user.profileId}`)
            .then((response) => {
                if (response.data) {
                    console.log(response.data);
                    setOrders(response.data);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };


    // console.log(orders.length)

    if (orders.length  === 0) {
        console.log(orders.length)
        return <div>No order yet</div>;
    }



    return (
        <div className="container">

            <ToastContainer />
            <Card className="p-4" style={{ width: '100%', textAlign: 'left' }}>
                <CardTitle className="mb-3" tag="h4">
                    Order History
                </CardTitle>
                <CardBody className='border p-0'>
                    <Table>
                        <thead style={{ backgroundColor: '#2525251b', color: 'black', fontSize: '14px',  }}>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Items</th>
                                {/* <th>Amount</th> */}
                                <th style={{ textAlign: 'center' }}>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: 'white', fontSize: '15px', fontWeight: 'bold' }}>
                            {orders.map((order) => (
                                <OrderItem key={order.orderId} order={order} />
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default OrderHistory;
