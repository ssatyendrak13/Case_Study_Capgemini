import React, { useState } from 'react'
import ProfileMenu from './ProfileMenu'
import { Button, CardHeader, Col, ListGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function AdminDesk() {



    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const handleLogout = () => {

        localStorage.removeItem('ADMIN');
        navigate('/login')
    }
  return (
      <div style={{ position: 'relative', top: 30 }} >
          

          <Modal isOpen={modal} toggle={toggle} size="sm" centered>

              <ModalHeader toggle={toggle}>
                  Confirmation
              </ModalHeader>

              <ModalBody>
                  Logout your Account?
              </ModalBody>
              <ModalFooter>
                  <Button color="warning" onClick={toggle} >
                      Cancel
                  </Button>
                  <Button color="danger" onClick={handleLogout} >
                      <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faArrowRightFromBracket} />
                  </Button>

              </ModalFooter>
          </Modal>
          <Row style={{position: 'fixed', top: 10, width:" 360px"}} className='my-3'>
              <Col md={12}>

                  <div style={{
                      border: '1px solid rgba(68, 68, 68, 0.286)',
                      borderRadius: '10px',
                      overflow: 'hidden'
                  }}>
                      <CardHeader style={{backgroundColor: 'black', color: 'white'}} className='p-3' tag={'h3'}>
                          Admin Page.
                      </CardHeader>
                      <ListGroup>
                          <Link className='list-group-item list-group-item-action' tag='a' to='/admin'>
                              Add Product 
                          </Link>
                          <Link className='list-group-item list-group-item-action' tag='a' to='/admin/allproduct'>
                              All Product
                          </Link>
                          <Link className='list-group-item list-group-item-action' tag='a' to='/admin/orderhistory'>
                              Order Tracker
                          </Link>
                          <Link className='list-group-item list-group-item-action' tag='a' to='/admin/allusers'>
                              Register Users
                          </Link>
                          <p style={{ margin: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='list-group-item list-group-item-action' onClick={toggle} >
                             Admin Logout <FontAwesomeIcon style={{ marginLeft: 10, color: 'red' }} icon={faArrowRightFromBracket} />
                          </p>
                      </ListGroup>
                  </div>
              </Col>
              <Col md={7} >
                  <Outlet  />
              </Col>

          </Row>
    </div>
  )
}

export default AdminDesk
