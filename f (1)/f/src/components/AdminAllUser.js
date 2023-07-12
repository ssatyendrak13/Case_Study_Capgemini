import React, { useEffect, useState } from 'react';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, CardFooter, CardHeader, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function AdminAllUser() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modal, setModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchAllUsers();
        document.title = 'All Users';
    }, []);

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get(`${base_URL}/all`);
            setUsers(response.data);
            console.log('Error:', response.data);

        } catch (error) {
            console.log('Error:', error);
            toast.error('Failed to fetch users. Please try again later.');
        }
    };

    const deleteUser = async () => {
        try {
            await axios.delete(`${base_URL}/user/${selectedUser.profileId}`);
            // After successful deletion, fetch the updated user list
            fetchAllUsers();
            toast.success('User deleted successfully.', { autoClose: 2000 });
        } catch (error) {
            console.log('Error:', error);
            toast.error('Failed to delete user. Please try again later.');
        }
        toggleModal();
    };

    const toggleModal = (user = null) => {
        setSelectedUser(user);
        setModal(!modal);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const filteredUsers = users.filter((user) => {
        try {
            const fullName = user.fullName.toLowerCase();
            return fullName.startsWith(searchTerm.toLowerCase());
        } catch (e) { 

            console.log(e.message);
        }
    });

    return (
        <div className='my-3'>
            <Card>
                <CardTitle tag={'h4'} className="ml-3 mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px'}}>
                    All Users



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
                            type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch}
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
                            <div style={{ width: 20 ,height: 20}} >
                                {searchTerm && (

                                    <FontAwesomeIcon style={{ padding: 4 }} onClick={clearSearch} icon={faXmark} />
                                )}
                            </div>
                            {/* {searchTerm && (
                                <Button color="link" outline onClick={clearSearch}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            )} */}
                        </i>
                    </div>
                    {/* <div className="float-right" style={{display: 'flex'}}>
                        <Input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
                        {searchTerm && (
                            <Button color="secondary" onClick={clearSearch}>
                                <i className="fas fa-times"></i>x
                            </Button>
                        )}
                    </div> */}
                </CardTitle>

                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <Card key={user.profileId}>
                            <CardHeader>
                                <div className="row m-0" style={{ height: '170px' }}>
                                   
                                    <div className="col-sm-4">
                                        <CardImg
                                            style={{ height: '140px', width: '140px', borderRadius: '50%' }}
                                            top
                                            src={user.image || "https://firebasestorage.googleapis.com/v0/b/whatsappclone-d3f9a.appspot.com/o/defaultprofile%2FprofileImg.webp?alt=media&token=70115bb1-280e-4714-bea1-bb5313be6e43"}
                                            alt="User Profile Image"
                                            className="img-radius mb-2"
                                        />
                                        <Label tag={'h5'}>
                                            {user.fullName}
                                        </Label>
                                        <p>{user.role}</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <CardBody >
                                            <CardTitle tag={'h4'} className="t f-w-600" style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                                                Info
                                            </CardTitle>
                                            <div style={{ display: 'flex', }}>
                                                <Label tag={'h6'} style={{  marginRight: 10, fontSize: 18 }}>profileId: </Label>
                                                <p style={{ color: 'orange', }}>
                                                    <b>
                                                        #{user.profileId}
                                                  </b>
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', }}>
                                                <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>Phone: </Label>
                                                <p>
                                                    {user.mobileNumber}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', }}>
                                                <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>Email: </Label>
                                                <p>
                                                    {user.email
                                                    }
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', }}>
                                                <Label tag={'h6'} style={{ marginRight: 10, fontSize: 18 }}>Gender: </Label>
                                                <p>
                                                    {user.gender}
                                                </p>
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <Button color="danger" onClick={() => toggleModal(user)}>Delete</Button>
                                </div>
                            </CardHeader>
                        </Card>
                    ))
                ) : (
                    <Card>
                        <CardBody>
                            <CardText tag="h6" className="text-muted f-w-400 text-center">
                                No Users
                            </CardText>
                        </CardBody>
                    </Card>
                )}
            </Card>


            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Confirm Deletion</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete the user with Profile ID: {selectedUser && selectedUser.profileId}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteUser}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default AdminAllUser;
