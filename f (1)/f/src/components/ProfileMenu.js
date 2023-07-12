import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function ProfileMenu() {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const handleLogout = () => {
        
        localStorage.removeItem('USER');
        navigate('/login')
    }
    return (
        <div style={{
            border: '1px solid rgba(68, 68, 68, 0.286)',
            borderRadius: '10px',
        }}> 
            

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



            <div className='profileImg'>
                <img src='https://firebasestorage.googleapis.com/v0/b/whatsappclone-d3f9a.appspot.com/o/defaultprofile%2FprofileImg.webp?alt=media&token=70115bb1-280e-4714-bea1-bb5313be6e43' />
            </div>
            <ListGroup>
                <Link className='list-group-item list-group-item-action' tag='a' to='/profile'>
                    Details
                </Link>
                <Link className='list-group-item list-group-item-action' tag='a' to='/profile/wallet'>
                    Wallet
                </Link>
                <Link className='list-group-item list-group-item-action' tag='a' to='/profile/orderHistory'>
                    Order History
                </Link>
                <Link className='list-group-item list-group-item-action' tag='a' to='/profile/address'>
                    Address
                </Link>
                <Link className='list-group-item list-group-item-action' tag='a' to='/cart' color="danger" >
                    Cart
                </Link>
                <p style={{ margin: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='list-group-item list-group-item-action' onClick={toggle} >
                    Logout <FontAwesomeIcon style={{ marginLeft: 10, color: 'red' }} icon={faArrowRightFromBracket} />
                </p>
                
            </ListGroup>
        </div>
    )
}

export default ProfileMenu
