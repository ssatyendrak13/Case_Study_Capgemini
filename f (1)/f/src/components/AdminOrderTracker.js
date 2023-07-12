import React, { useEffect, useState } from 'react';
import {
  Table,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_URL from '../api/BootAPI';
import { useNavigate } from 'react-router-dom';

const OrderItem = ({ order }) => {
  const orderDate = new Date(order.orderDate);
  const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
  const date = orderDate.toLocaleString('en-US', dateOptions);

  const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState(order.orderStatus);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  const toggleConfirmationModal = () => {
    setIsConfirmationModalOpen(!isConfirmationModalOpen);
  };

  const handleUpdateProduct = async (productId) => {
    navigate(`/admin/updateproduct/${productId}`);
  };

  const handleShipped = () => {
    axios
      .post(`${base_URL}/changeStatus/${order.orderId}`, { orderStatus: 'shipped' })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setOrderStatus('shipped');
          toast.success('Order shipped', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
          toggleDetailsModal();
          toggleConfirmationModal();
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <tr style={{ fontWeight: 400 }}>
      <td style={{ color: 'orangered' }}>#{order.orderId}</td>
      <td>{date}</td>
      <td>{order.orderProducts.length}</td>
      <td
        style={{
          fontWeight: 500,
          textAlign: 'center',
          color: orderStatus === 'cancelled' ? 'red' : orderStatus === 'shipped' ? 'green' : '#e6b802',
        }}
      >
        {orderStatus}
      </td>
      <td style={{ textAlign: 'right', paddingRight: 30 }}>
        <Button color="warning" size="sm" onClick={toggleDetailsModal}>
          View details
        </Button>
        <Modal isOpen={isDetailsModalOpen} size='lg' centered toggle={toggleDetailsModal}>
          <ModalHeader toggle={toggleDetailsModal}>
            OrderId - <span style={{ color: 'orangered' }}>#{order.orderId}</span>
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardHeader tag={'h4'} style={{ color: orderStatus === 'cancelled' ? 'red' : orderStatus === 'shipped' ? 'green' : '#e6b802' }}>
                {order.orderStatus}
              </CardHeader>
              <div className="row m-0">
                <div className="col-sm-4 p-4">
                  <CardImg
                    style={{  }}
                    top
                    src={order.orderProducts[0].image}
                    alt="Product Image"
                    className="img-radius mb-2"
                  />
                  <Label style={{ textAlign: 'center' }} tag={'h5'}>
                    Item({order.orderProducts[0].quantity})
                  </Label>
                </div>
                <div className="col-sm-8">
                  <CardBody>
                    <div style={{ display: 'flex' }}>
                      <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>
                        Total Amount:
                      </Label>
                      <p style={{ color: 'orange' }}>
                        <b>{order.amountPaid}$</b>
                      </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>
                        Order date:
                      </Label>
                      <p>{date || ''}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>
                        Product Id/ids:
                      </Label>
                      {order.orderProducts.map((product) => (
                        <Button style={{ padding: 0 }} onClick={() => handleUpdateProduct(product.productId)} color="link">
                          <h5 key={product.productId} style={{ color: 'orangered' }} order={order}>
                            #{product.productId}
                          </h5>
                        </Button>
                      ))}
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>
                        Address:
                      </Label>

                      <div>
                        <span style={{ fontWeight: 600 , opacity:'.7' }}>{order.shippingAddress[0].fullName}</span>
                        <br />
                        
                        <span style={{ fontWeight: 600, opacity: '.7' }}>
                          {order.shippingAddress[0].phoneNumber}
                        </span>
                        <p style={{ wordWrap: 'break-word' }}>
                          {order.shippingAddress[0].addressLine}, {order.shippingAddress[0].locality}, {order.shippingAddress[0].city}, {order.shippingAddress[0].state} - {order.shippingAddress[0].pincode}
                        </p>
                        </div>


                      {/* {`${order.shippingAddress[0].fullName}, ${order.shippingAddress[0].flatNumber}, ${order.shippingAddress[0].colonyName}, ${order.shippingAddress[0].city}, ${order.shippingAddress[0].state}, ${order.shippingAddress[0].pincode}`} */}
                    </div>
                  </CardBody>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                {orderStatus === 'In trans' && (
                  <Button className="m-3" color="success" onClick={toggleConfirmationModal}>
                    Shipped
                  </Button>
                )}
              </div>
            </Card>
            <ModalFooter>
              <Button color="danger" onClick={toggleDetailsModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
        <Modal isOpen={isConfirmationModalOpen} toggle={toggleConfirmationModal}>
          <ModalHeader toggle={toggleConfirmationModal}>Confirm Shipment</ModalHeader>
          <ModalBody>
            Are you sure <b>product/Products</b> shipped already?
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleShipped}>
              Confirm
            </Button>{' '}
            <Button color="secondary" onClick={toggleConfirmationModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};
const AdminOrderTracker = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get(`${base_URL}/order`)
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredOrders = orders.filter((order) =>
    order.orderStatus.toLowerCase().includes(filter.toLowerCase())
  );

  if (orders.length === 0) {
    return <div>No orders yet</div>;
  }

  return (
    <div className="container my-3">
      <Card className="p-4" style={{ width: '100%', textAlign: 'left' }}>
        <CardTitle className="mb-3 d-flex justify-content-between align-items-center">
          Order History
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>Filter:</span>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle color="light" caret>
                {filter === '' ? 'All' : filter}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterChange('')}>All</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('In trans')}>In trans</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('cancelled')}>Cancelled</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('delivered')}>Delivered</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardTitle>
        <CardBody className="border p-0">
          <Table>
            <thead style={{ backgroundColor: '#2525251b', color: 'black', fontSize: '14px' }}>
              <tr>
                <th>OrderId</th>
                <th>Date</th>
                <th>Items</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: 'white', fontSize: '15px', fontWeight: 'bold' }}>
              {filteredOrders.map((order) => (
                <OrderItem key={order.orderId} order={order} />
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminOrderTracker;
