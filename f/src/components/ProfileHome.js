import React, { useState, useEffect } from 'react';
import { Form, Card, Col, FormGroup, Row, Button, CardBody, CardTitle, Input, Label, CardHeader } from 'reactstrap';
import base_URL from '../api/BootAPI';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validateFullName, validateEmail, validateMobileNumber, validateDateOfBirth } from './Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProfileHome() {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        profileId: 0,
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        address: '',
        dateOfBirth: '',
        gender: '',
    });
    const [errorMessages, setErrorMessages] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("USER"));
        if (user === null) {
            navigate('/login')
        } else {
            document.title = 'Profile';
            getUserProfile();
        }
    }, [navigate]);

    const getUserProfile = () => {
        const user = JSON.parse(localStorage.getItem("USER"));
        const userId = user.profileId;
        axios.get(`${base_URL}/user/${userId}`).then(
            (response) => {
                console.log('Response:', response.data);
                if (response.data) {
                    setUserDetails(response.data);
                } else {
                    navigate('/login');
                }
            },
            (error) => {
                navigate('/login');
                console.log('Error:', error);
            }
        );
    };

    const updateUserProfile = () => {
        const user = JSON.parse(localStorage.getItem("USER"));
        const userId = user.profileId;
        axios.put(`${base_URL}/user/${userId}`, userDetails).then(
            (response) => {
                console.log('Update Response:', response.data);
                toast.success('Profile updated successfully!', { autoClose: 2000 });
            },
            (error) => {
                console.log('Update Error:', error);
                toast.error('Something went wrong. Please try again.');
            }
        );
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (validateFields()) {
            setIsEditing(false);
            updateUserProfile();
        } else {
            console.log(userDetails)
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateFields = () => {
        let isValid = true;

        if (!userDetails.fullName) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                fullName: 'Full Name is required',
            }));
            isValid = false;
        } else if (!validateFullName(userDetails.fullName)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                fullName: 'Invalid full name format',
            }));
            isValid = false;
        } else {
            console.log('Invalid full name format')
        }

       

        if (!userDetails.mobileNumber) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                mobileNumber: 'Mobile Number is required',
            }));
            isValid = false;
        } else if (!validateMobileNumber(userDetails.mobileNumber)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                mobileNumber: 'Invalid mobile number format',
            }));
            isValid = false;
        } else {
            console.log('3')
        }

        if (!userDetails.dateOfBirth) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                dateOfBirth: 'Date of Birth is required',
            }));
            isValid = false;
        } else if (!validateDateOfBirth(userDetails.dateOfBirth)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                dateOfBirth: 'Invalid date format',
            }));
            isValid = false;
        } else {
            console.log('4')
        }

        if (!userDetails.gender) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                gender: 'Gender is required',
            }));
            isValid = false;
        } else {
            console.log('5')
        }

        return isValid;
    };

    return (
        <div>
            <Card style={{ width: '100%', textAlign: 'left' }}>
                <CardBody>
                    <CardTitle className="mb-1" tag="h4">
                        PERSONAL INFORMATION
                    </CardTitle>

                    <CardHeader className='mb-4'>
                        <i>
                            <Label sm={2}>
                                Email
                            </Label>
                            {userDetails.email || ''}
                        </i>
                    </CardHeader>

                    <Form className="per-info">
                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>
                                    Full Name<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="text"
                                        placeholder="Enter valid full name"
                                        name="fullName"
                                        value={userDetails.fullName || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        maxLength={30}
                                        pattern="[A-Za-z ]*"
                                        title="Please enter alphabetic characters only"
                                        onKeyPress={(e) => {
                                            const onlyLetters = /^[A-Za-z ]$/;
                                            if (!onlyLetters.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errorMessages.fullName && (
                                        <div className="text-danger">{errorMessages.fullName}</div>
                                    )}
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>
                                    Gender<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="select"
                                        name="gender"
                                        value={userDetails.gender || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Input>
                                    {errorMessages.gender && (
                                        <div className="text-danger">{errorMessages.gender}</div>
                                    )}
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>
                                    DOB<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="date"
                                        placeholder="yyyy-mm-dd"
                                        name="dateOfBirth"
                                        value={userDetails.dateOfBirth || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                    {errorMessages.dateOfBirth && (
                                        <div className="text-danger">{errorMessages.dateOfBirth}</div>
                                    )}
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>
                                    Phone<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="tel"
                                        placeholder="e.g., 9876543210"
                                        name="mobileNumber"
                                        value={userDetails.mobileNumber || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        maxLength={10}
                                        pattern="[0-9]*"
                                        title="Please enter numeric characters only"
                                        onKeyPress={(e) => {
                                            const onlyNums = /^[0-9\b]+$/;
                                            if (!onlyNums.test(e.key)) {
                                                e.preventDefault();
                                                console.log('e.key', e.key)
                                            } else {
                                                console.log(e.key)
                                            }
                                        }}
                                    />
                                    {errorMessages.mobileNumber && (
                                        <div className="text-danger">{errorMessages.mobileNumber}</div>
                                    )}
                                </Col>
                            </Row>
                        </FormGroup>

                        <div style={{ textAlign: 'right' }}>
                            <Col sm={10}>
                                {!isEditing && (
                                    <Button color="warning" onClick={handleEditClick}>
                                        Edit
                                    </Button>
                                )}
                                {isEditing && (
                                    <>
                                        <Button className='mx-3' color="danger" onClick={() => setIsEditing(false)}>
                                            Cancel
                                        </Button>
                                        <Button color="warning" onClick={handleSaveClick}>
                                            Save
                                        </Button>
                                    </>
                                )}
                            </Col>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileHome;