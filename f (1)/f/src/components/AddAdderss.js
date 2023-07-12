
// import React, { useState, useEffect } from 'react';
// import { Card, FormGroup, Button, Row, Col, Label, Input, CardTitle, CardBody, CardFooter, Form, FormText } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function AddressCard({ userProfile = {}, address = {}, handleEdit, selected, handleSelect, closeAddAddress, selectAddressHandle }) {
//     const { fullName, phoneNumber, addressId, locality, city, state, pincode, addressLine } = address;

//     const handleCheckboxClick = () => {
//         closeAddAddress();
//         selectAddressHandle(address);
//     };

//     return (
//         <Card style={{ textAlign: 'left' }}>
//             <CardBody>
//                 <CardTitle>
//                     <h5>{fullName}</h5>
//                 </CardTitle>
//                 <p>{phoneNumber}</p>
//                 <p>
//                     {addressLine}, {locality}, {city}, {state} - {pincode}
//                 </p>
//             </CardBody>
//             <CardFooter style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                 <Button color="dark" onClick={handleEdit}>
//                     Edit
//                 </Button>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="radio" checked={selected} onClick={handleCheckboxClick} /> Select
//                     </Label>
//                 </FormGroup>
//             </CardFooter>
//         </Card>
//     );
// }

// function EditAddressInput({ address, handleSave }) {
//     const [modifiedAddress, setModifiedAddress] = useState({ ...address, addressLine: address.addressLine });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setModifiedAddress((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const saveModifiedAddress = () => {
//         if (!modifiedAddress.addressLine.match(/^[\w\s,-]+$/)) {
//             toast.error('Please enter a valid address line.');
//             return;
//         }

//         handleSave(modifiedAddress);
//     };
//     const imputStyling = {
//         outline: 'none',
//         border: 'none',
//         borderBottom: '2px solid #00000050',
//         borderRadius: 0,
//         backgroundColor: 'transparent',
//         width: '100%',
//         padding: '5px 7px',
//         fontWeight: 'bold',
//         color: '#000000a2'
//     }
//     return (
//         <div className="p-3" style={{ textAlign: "left" }}>
//             <h4>Modify Address</h4>
//             <FormGroup>
//                 <Col sm = {7}>
//                     <Label for="fullName">Name<span style={{color: 'red'}}>*</span></Label>
//                     <Input
//                         id="fullName"
//                         name="fullName"
//                         value={modifiedAddress.fullName}
//                         onChange={handleChange}
//                         required
//                         style={imputStyling}
//                         onFocus={(e) => {
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.boxShadow = '';
//                         }}
//                     />
//                 </Col>
//             </FormGroup>
//             <FormGroup>
//                 <Col sm={7}>
//                     <Label for="phoneNumber">Phone Number<span style={{color: 'red'}}>*</span></Label>
//                     <Input
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         value={modifiedAddress.phoneNumber}
//                         onChange={handleChange}
//                         required
//                         style={imputStyling}
//                         onFocus={(e) => {
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.boxShadow = '';
//                         }}
//                     />
//                 </Col>
                
//             </FormGroup>
//             <FormGroup>
//                 <Label color="muted" for="addressLine">Address<span style={{ color: 'red' }}>*</span><FormText color="muted">( House No. , BUilding, Street ,Area)</FormText></Label>
//                 <Input
//                     id="addressLine"
//                     name="addressLine"
//                     value={modifiedAddress.addressLine}
//                     onChange={handleChange}
//                     required
//                     style={imputStyling}
//                     onFocus={(e) => {
//                         e.target.style.boxShadow = 'none';
//                     }}
//                     onBlur={(e) => {
//                         e.target.style.boxShadow = '';
//                     }}
//                 />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="locality">Locality/Town<span style={{color: 'red'}}>*</span></Label>
//                 <Input
//                     id="locality"
//                     name="locality"
//                     value={modifiedAddress.locality}
//                     onChange={handleChange}
//                     required
//                     style={imputStyling}
//                     onFocus={(e) => {
//                         e.target.style.boxShadow = 'none';
//                     }}
//                     onBlur={(e) => {
//                         e.target.style.boxShadow = '';
//                     }}
//                 />
//             </FormGroup>

//             <Row>
//                 <Col md={5}>
//                     <FormGroup>
//                         <Label for="city">City<span style={{color: 'red'}}>*</span></Label>
//                         <Input
//                             id="city"
//                             name="city"
//                             value={modifiedAddress.city}
//                             onChange={handleChange}

//                             required
//                             style={imputStyling}
//                             onFocus={(e) => {
//                                 e.target.style.boxShadow = 'none';
//                             }}
//                             onBlur={(e) => {
//                                 e.target.style.boxShadow = '';
//                             }}
//                         />
//                     </FormGroup>
//                 </Col>
//                 <Col md={1}></Col>
//                 <Col md={6}>
//                     <FormGroup>
//                         <Label for="pincode">Pincode<span style={{ color: 'red' }}>*</span></Label>
//                         <Input
//                             id="pincode"
//                             name="pincode"
//                             value={modifiedAddress.pincode}
//                             onChange={handleChange}
//                             required
//                             style={imputStyling}
//                             onFocus={(e) => {
//                                 e.target.style.boxShadow = 'none';
//                             }}
//                             onBlur={(e) => {
//                                 e.target.style.boxShadow = '';
//                             }}
//                         />
//                     </FormGroup>
//                 </Col>
//             </Row>
            
//             <FormGroup>
//                 <Label for="state">State<span style={{color: 'red'}}>*</span></Label>
//                 <Input
//                     id="state"
//                     name="state"
//                     value={modifiedAddress.state}
//                     onChange={handleChange}
//                     required
//                     style={imputStyling}
//                     onFocus={(e) => {
//                         e.target.style.boxShadow = 'none';
//                     }}
//                     onBlur={(e) => {
//                         e.target.style.boxShadow = '';
//                     }}
//                 />
//             </FormGroup>
            
//             <Button color="dark" onClick={saveModifiedAddress}>
//                 Save
//             </Button>
//         </div>
//     );
// }

//  function AddAddressInput({ handleSave }) {
//     const [address, setAddress] = useState({
//         fullName: '',
//         phoneNumber: '',
//         addressLine: '',
//         locality: '',
//         city: '',
//         state: '',
//         pincode: '',
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setAddress((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const saveAddress = (event) => {
//         event.preventDefault();

//         if (!isFormValid()) {
//             toast.error('Please fill in all the required fields.');
//             return;
//         }

//         handleSave(address);
//         setAddress({
//             fullName: '',
//             phoneNumber: '',
//             addressLine: '',
//             locality: '',
//             city: '',
//             state: '',
//             pincode: '',
//         });
//     };

//     const isFormValid = () => {
//         for (const key in address) {
//             if (address[key].trim() === '') {
//                 return false;
//             }
//         }
//         return true;
//     };

     
//      const imputStyling = {
//          outline: 'none',
//          border: 'none',
//          borderBottom: '2px solid #00000050',
//          borderRadius: 0,
//          backgroundColor: 'transparent',
//          width: '100%',
//          padding: '5px 7px',
//          fontWeight: 'bold',
//          color: '#000000a2'
//      }
//     return (
//         <div className="p-3" style={{ textAlign: 'left', position: 'relative' }}>
//             <Form onSubmit={saveAddress}>
//                 <h4>Add Address</h4>
//                 <FormGroup>

//                     <Col md={7}>
//                         <Label for="fullName">Full Name<span style={{color:"red"}}>*</span></Label>
//                         <Input
//                             id="fullName"
//                             name="fullName"
//                             value={address.fullName}
//                             onChange={handleChange}
//                             required
//                             style={imputStyling}
//                             onFocus={(e) => {
//                                 e.target.style.boxShadow = 'none';
//                             }}
//                             onBlur={(e) => {
//                                 e.target.style.boxShadow = '';
//                             }}
//                         />
//                     </Col>
                    
//                 </FormGroup>
//                 <FormGroup>
//                     <Col md={7}>
//                         <Label for="phoneNumber">Phone Number<span style={{color:"red"}}>*</span></Label>
//                         <Input
//                             id="phoneNumber"
//                             name="phoneNumber"
//                             value={address.phoneNumber}
//                             onChange={handleChange}
//                             required
//                             style={imputStyling}
//                             pattern="[6-9]{1}[0-9]{9}"
//                             onFocus={(e) => {
//                                 e.target.style.boxShadow = 'none';
//                             }}
//                             onBlur={(e) => {
//                                 e.target.style.boxShadow = '';
//                             }}
//                         />
//                     </Col>
//                 </FormGroup>

//                 <FormGroup>
                   
//                     <Label for="addressLine">Address<span style={{ color: 'red' }}>*</span><FormText color="muted">( House No. , BUilding, Street ,Area)</FormText></Label>
//                     <Input
//                         id="addressLine"
//                         name="addressLine"
//                         value={address.addressLine}
//                         onChange={handleChange}
//                         required
//                         style={imputStyling}
//                         onFocus={(e) => {
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.boxShadow = '';
//                         }}
//                     />
//                 </FormGroup>
                
//                 <FormGroup>
                    
//                     <Label for="locality">Locality/Town<span style={{color:"red"}}>*</span></Label>
//                     <Input
//                         id="locality"
//                         name="locality"
//                         value={address.locality}
//                         onChange={handleChange}
//                         required
//                         style={imputStyling}
//                         onFocus={(e) => {
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.boxShadow = '';
//                         }}
//                     />
//                 </FormGroup>
//                 <Row className="py-1" >
//                     <Col md={6}>
//                         <FormGroup>
//                             <Label for="city">City<span style={{color:"red"}}>*</span></Label>
//                             <Input
//                                 id="city"
//                                 name="city"
//                                 value={address.city}
//                                 onChange={handleChange}
//                                 required
//                                 style={imputStyling}
//                                 onFocus={(e) => {
//                                     e.target.style.boxShadow = 'none';
//                                 }}
//                                 onBlur={(e) => {
//                                     e.target.style.boxShadow = '';
//                                 }}
//                             />
//                         </FormGroup>
//                     </Col>
//                     <Col md={1}></Col>
//                     <Col md={5}>
//                         <FormGroup>
//                             <Label for="pincode">Pin Code<span style={{color:"red"}}>*</span></Label>
//                             <Input
//                                 id="pincode"
//                                 name="pincode"
//                                 value={address.pincode}
//                                 onChange={handleChange}
//                                 required
//                                 style={imputStyling}
//                                 onFocus={(e) => {
//                                     e.target.style.boxShadow = 'none';
//                                 }}
//                                 onBlur={(e) => {
//                                     e.target.style.boxShadow = '';
//                                 }}
//                             />
//                         </FormGroup>
//                     </Col>
//                 </Row>
                
//                 <FormGroup>
//                     <Label for="state">State<span style={{color:"red"}}>*</span></Label>
//                     <Input
//                         id="state"
//                         name="state"
//                         value={address.state}
//                         onChange={handleChange}
//                         required
//                         style={imputStyling}
//                         onFocus={(e) => {
//                             e.target.style.boxShadow = 'none';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.boxShadow = '';
//                         }}
//                     />
//                 </FormGroup>
                
//                 <div style={{ width: '100%', textAlign: 'right' }}>
//                     <Button type="submit" color="dark">
//                         Save
//                     </Button>
//                 </div>
//             </Form>
//             <ToastContainer />
//         </div>
//     );
// }


// function AddAddress({ onClose, selectAddressHandle }) {
//     const [userProfile, setUserProfile] = useState(null);
//     const [addresses, setAddresses] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [selectedAddress, setSelectedAddress] = useState(null);



//     useEffect(() => {

//         fetchUserProfile();
//     }, []);

//     const fetchUserProfile = async () => {
//         try {
//             const user = JSON.parse(localStorage.getItem("USER"));

//             const response = await axios.get(`${base_URL}/profiles/${user.profileId}`);
//             console.log(',.,.,.,.', response.data)
//             setUserProfile(response.data);
//             setAddresses(response.data.addresses);
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     };

//     const handleEdit = (address) => {
//         setSelectedAddress(address);
//         setEditMode(true);
//     };

//     const handleSave = async (modifiedAddress, modifiedUserProfile) => {
//         try {
//             const updatedUserProfile = { ...userProfile };
//             const updatedAddresses = updatedUserProfile.addresses.map((address) => {
//                 if (address.addressId === modifiedAddress.addressId) {
//                     return { ...modifiedAddress };
//                 }
//                 return address;
//             });
//             updatedUserProfile.addresses = updatedAddresses;
//             const user = JSON.parse(localStorage.getItem("USER"));
//             await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

//             fetchUserProfile();

//             setEditMode(false);
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     };

//     const addAddress = async (newAddress) => {
//         try {
//             console.log(newAddress);
//             const updatedUserProfile = { ...userProfile };

//             updatedUserProfile.addresses.push(newAddress);
//             console.log(updatedUserProfile);
//             const user = JSON.parse(localStorage.getItem("USER"));
//             await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

//             console.log('addedd...........', updatedUserProfile);

//             fetchUserProfile();

//             setEditMode(false);
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     };

//     const closeAddAddress = () => {
//         setSelectedAddress(null);
//         setEditMode(false);
//         onClose();
//     };

//     return (
//         <div className='p-4' style={{ width: '100%', height: '100%' }}>
//             <ToastContainer />
//             <div
//                 className='close-divs'
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: '#23222250',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     zIndex: 1100,
//                 }}
//                 onClick={closeAddAddress}
//             ></div>
//             <div
//                 className='scroller-x'
//                 style={{
//                     width: '450px',
//                     height: '100vh',
//                     backgroundColor: 'white',
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     zIndex: 1101,
//                     overflowY: 'scroll',
//                 }}
//             >
//                 <div
//                     style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         padding: '10px 20px',
//                         width: '100%',
//                         backgroundColor: 'white',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <CardTitle style={{ marginRight: '10px' }}>
//                             <h3>DELIVERY ADDRESS</h3>
//                         </CardTitle>
//                     </div>
//                     <div>
//                         <h3 onClick={closeAddAddress}>
//                             <FontAwesomeIcon icon={faTimes} />
//                         </h3>
//                     </div>
//                 </div>

//                 {!editMode && (
//                     <div>
//                         <CardFooter style={{ width: '100%' }}>
//                             <Button color='dark' style={{ width: '100%', padding: '12px 0', fontSize: '17px', fontWeight: 500 }} onClick={() => setEditMode(true)}>
//                                 Add Address
//                             </Button>
//                         </CardFooter>
//                     </div>
//                 )}
//                 <CardBody>
//                     {addresses.map((address, index) => (
//                         <div key={index}>
//                             {!editMode && (
//                                 <AddressCard
//                                     userProfile={userProfile}
//                                     address={address}
//                                     handleEdit={() => handleEdit(address)}
//                                     selectAddressHandle={selectAddressHandle}
//                                     closeAddAddress={closeAddAddress} // Pass the closeAddAddress function as a prop
//                                 />
//                             )}
//                             {editMode && selectedAddress === address && <EditAddressInput address={address} userProfile={userProfile} handleSave={handleSave} />}
//                         </div>
//                     ))}
//                     {editMode && selectedAddress === null && <AddAddressInput handleSave={addAddress} />}
//                 </CardBody>
//             </div>
//         </div>
//     );
// }
// export default AddAddress;



import React, { useState, useEffect } from 'react';
import { Card, FormGroup, Button, Row, Col, Label, Input, CardTitle, CardBody, CardFooter, Form, FormText } from 'reactstrap';
import base_URL from '../api/BootAPI';
import axios from 'axios';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddressCard({ userProfile = {}, address = {}, handleEdit, selected, handleSelect, closeAddAddress, selectAddressHandle }) {
    const { fullName, phoneNumber, addressId, locality, city, state, pincode, addressLine } = address;

    const handleCheckboxClick = () => {
        closeAddAddress();
        selectAddressHandle(address);
    };

    return (
        <Card style={{ textAlign: 'left' }}>
            <CardBody>
                <CardTitle>
                    <h5>{fullName}</h5>
                </CardTitle>
                <p>{phoneNumber}</p>
                <p>
                    {addressLine}, {locality}, {city}, {state} - {pincode}
                </p>
            </CardBody>
            <CardFooter style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button color="dark" onClick={handleEdit}>
                    Edit
                </Button>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" checked={selected} onClick={handleCheckboxClick} /> Select
                    </Label>
                </FormGroup>
            </CardFooter>
        </Card>
    );
}

function EditAddressInput({ address, handleSave }) {
    const [modifiedAddress, setModifiedAddress] = useState({ ...address, addressLine: address.addressLine });


    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = value;
        if (name === "fullName" || name === "locality" || name === "city" || name === "state") {
            // Allow only alphabets and spaces
            updatedValue = value.replace(/[^A-Za-z\s]/g, "");
        } else if (name === "phoneNumber") {
            // Allow only Indian phone number format
            updatedValue = value.replace(/[^0-9]/g, "");
            if (updatedValue.length > 10) {
                updatedValue = updatedValue.slice(0, 10);
            }
        } else if (name === "addressLine") {
            // Allow alphanumeric and special characters /, -
            updatedValue = value.replace(/[^A-Za-z0-9/,\-]/g, "");
        } else if (name === "pincode") {
            // Allow only 6-digit Indian pincode
            updatedValue = value.replace(/[^0-9]/g, "");
            if (updatedValue.length > 6) {
                updatedValue = updatedValue.slice(0, 6);
            }
        }
        setModifiedAddress((prevState) => ({
            ...prevState,
            [name]: updatedValue,
        }));
    };

    const saveModifiedAddress = () => {
        if (!modifiedAddress.addressLine.match(/^[\w\s,-]+$/)) {
            toast.error('Please enter a valid address line.');
            return;
        }
        if (!modifiedAddress.fullName.match(/^[\w\s,-]+$/)) {
            toast.error('Please enter a valid full Name.');
            return;
        }
        if (!modifiedAddress.locality.match(/^[\w\s,-]+$/)) {
            toast.error('Please enter a locality section.');
            return;
        }
        if (!modifiedAddress.city.match(/^[\w\s,-]+$/)) {
            toast.error('Please enter a city name.');
            return;
        }
        if (!modifiedAddress.phoneNumber.match(/^[6-9]\d{9}$/)) {
            toast.error('Please enter a valid 10-digit phone number.');
            return;
        }
        if (!modifiedAddress.pincode.match(/^\d{6}$/)) {
            toast.error('pincode must be of 6 digit.');
            return;
        }

        handleSave(modifiedAddress);
    };
    const imputStyling = {
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #00000050',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        padding: '5px 7px',
        fontWeight: 'bold',
        color: '#000000a2'
    }
    const validatePincode = async (pincode) => {
        if (pincode.length !== 6) {
            toast.error("Please enter a valid 6-digit Indian pincode.");
            return;
        }

        const response = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`
        );
        const data = await response.json();

        if (data && data[0] && data[0].Status === "Success") {
            const { State, District } = data[0].PostOffice[0];

            setModifiedAddress((prevState) => ({
                ...prevState,
                state: State,
                city: District,
            }));
        } else {
            toast.error("Please enter a valid 6-digit Indian pincode.");
        }
    };


    return (
        <div className="p-3" style={{ textAlign: "left" }}>
            <h4>Modify Address</h4>
            <FormGroup>
                <Col sm={7}>
                    <Label for="fullName">Full Name<span style={{ color: 'red' }}>*</span></Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        value={modifiedAddress.fullName}
                        onChange={handleChange}
                        required
                        style={imputStyling}
                        onFocus={(e) => {
                            e.target.style.boxShadow = 'none';
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = '';
                        }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={7}>
                    <Label for="phoneNumber">Phone Number<span style={{ color: 'red' }}>*</span></Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={modifiedAddress.phoneNumber}
                        onChange={handleChange}
                        required
                        style={imputStyling}
                        onFocus={(e) => {
                            e.target.style.boxShadow = 'none';
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = '';
                        }}
                    />
                </Col>

            </FormGroup>
            <FormGroup>
                <Label color="muted" for="addressLine">Address<span style={{ color: 'red' }}>*</span><FormText color="muted">( House No. , BUilding, Street ,Area)</FormText></Label>
                <Input
                    id="addressLine"
                    name="addressLine"
                    value={modifiedAddress.addressLine}
                    onChange={handleChange}
                    required
                    style={imputStyling}
                    onFocus={(e) => {
                        e.target.style.boxShadow = 'none';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = '';
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="locality">Locality/Town<span style={{ color: 'red' }}>*</span></Label>
                <Input
                    id="locality"
                    name="locality"
                    value={modifiedAddress.locality}
                    onChange={handleChange}
                    required
                    style={imputStyling}
                    onFocus={(e) => {
                        e.target.style.boxShadow = 'none';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = '';
                    }}
                />
            </FormGroup>

            <Row>
                <Col md={5}>
                    <FormGroup>
                        <Label for="city">City<span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="city"
                            name="city"
                            value={modifiedAddress.city}
                            onChange={handleChange}

                            required
                            style={imputStyling}
                            onFocus={(e) => {
                                e.target.style.boxShadow = 'none';
                            }}
                            onBlur={(e) => {
                                e.target.style.boxShadow = '';
                            }}
                        />
                    </FormGroup>
                </Col>
                <Col md={1}></Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pincode">
                            Pin Code<span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                            id="pincode"
                            name="pincode"
                            value={modifiedAddress.pincode}
                            onChange={handleChange}
                            required
                            style={imputStyling}
                            pattern="[0-9]{6}"
                            title="Please enter a valid 6-digit Indian pincode"

                            onBlur={(e) => {
                                validatePincode(e.target.value);
                            }}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <Label for="state">State<span style={{ color: 'red' }}>*</span></Label>
                <Input
                    id="state"
                    name="state"
                    value={modifiedAddress.state}
                    onChange={handleChange}
                    required
                    style={imputStyling}
                    onFocus={(e) => {
                        e.target.style.boxShadow = 'none';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = '';
                    }}
                    disabled />
            </FormGroup>

            <Button color="dark" onClick={saveModifiedAddress}>
                Save
            </Button>
        </div>
    );
}

function AddAddressInput({ handleSave }) {
    const [address, setAddress] = useState({
        fullName: "",
        phoneNumber: "",
        addressLine: "",
        locality: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        let updatedValue = value;

        if (name === "fullName" || name === "locality" || name === "city" || name === "state") {
            // Allow only alphabets and spaces
            updatedValue = value.replace(/[^A-Za-z\s]/g, "");
        } else if (name === "phoneNumber") {
            // Allow only Indian phone number format
            updatedValue = value.replace(/[^0-9]/g, "");
            if (updatedValue.length > 10) {
                updatedValue = updatedValue.slice(0, 10);
            }
        } else if (name === "addressLine") {
            // Allow alphanumeric and special characters /, -
            updatedValue = value.replace(/[^A-Za-z0-9/,\-]/g, "");
        } else if (name === "pincode") {
            // Allow only 6-digit Indian pincode
            updatedValue = value.replace(/[^0-9]/g, "");
            if (updatedValue.length > 6) {
                updatedValue = updatedValue.slice(0, 6);
            }
        }

        setAddress((prevState) => ({
            ...prevState,
            [name]: updatedValue,
        }));
    };

    const saveAddress = (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            toast.error("Please fill in all the required fields.");
            return;
        }

        handleSave(address);
        setAddress({
            fullName: "",
            phoneNumber: "",
            addressLine: "",
            locality: "",
            city: "",
            state: "",
            pincode: "",
        });
    };

    const isFormValid = () => {
        for (const key in address) {
            if (address[key].trim() === "") {
                return false;
            }
        }
        return true;
    };

    const inputStyling = {
        outline: "none",
        border: "none",
        borderBottom: "2px solid #00000050",
        borderRadius: 0,
        backgroundColor: "transparent",
        width: "100%",
        padding: "5px 7px",
        fontWeight: "bold",
        color: "#000000a2",
    };
    const validatePincode = async (pincode) => {
        if (pincode.length !== 6) {
            toast.error("Please enter a valid 6-digit Indian pincode.");
            return;
        }

        const response = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`
        );
        const data = await response.json();

        if (data && data[0] && data[0].Status === "Success") {
            const { State, District } = data[0].PostOffice[0];

            setAddress((prevState) => ({
                ...prevState,
                state: State,
                city: District,
            }));
        } else {
            toast.error("Please enter a valid 6-digit Indian pincode.");
        }
    };



    return (
        <div className="p-3" style={{ textAlign: "left", position: "relative" }}>
            <Form onSubmit={saveAddress}>
                <h4>Add Address</h4>
                <FormGroup>
                    <Col md={7}>
                        <Label for="fullName">
                            Full Name<span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={address.fullName}
                            onChange={handleChange}
                            required
                            style={inputStyling}
                            pattern="[A-Za-z ]+"
                            title="Please enter only alphabets"
                            onFocus={(e) => {
                                e.target.style.boxShadow = "none";
                            }}
                            onBlur={(e) => {
                                e.target.style.boxShadow = "";
                            }}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={7}>
                        <Label for="phoneNumber">
                            Phone Number<span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={address.phoneNumber}
                            onChange={handleChange}
                            required
                            style={inputStyling}
                            pattern="[6-9]{1}[0-9]{9}"
                            title="Please enter a valid Indian phone number"
                            onFocus={(e) => {
                                e.target.style.boxShadow = "none";
                            }}
                            onBlur={(e) => {
                                e.target.style.boxShadow = "";
                            }}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="addressLine">
                        Address
                        <span style={{ color: "red" }}>*</span>
                        <FormText color="muted">
                            (House No., Building, Street, Area)
                        </FormText>
                    </Label>
                    <Input
                        id="addressLine"
                        name="addressLine"
                        value={address.addressLine}
                        onChange={handleChange}
                        required
                        style={inputStyling}
                        pattern="[A-Za-z0-9/, -]+"
                        title="Please enter a valid address"
                        onFocus={(e) => {
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = "";
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="locality">
                        Locality/Town<span style={{ color: "red" }}>*</span>
                    </Label>
                    <Input
                        id="locality"
                        name="locality"
                        value={address.locality}
                        onChange={handleChange}
                        required
                        style={inputStyling}
                        pattern="[A-Za-z ]+"
                        title="Please enter only alphabets"
                        onFocus={(e) => {
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = "";
                        }}
                    />
                </FormGroup>
                <Row className="py-1">
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">
                                City<span style={{ color: "red" }}>*</span>
                            </Label>
                            <Input
                                id="city"
                                name="city"
                                value={address.city}
                                onChange={handleChange}
                                required
                                style={inputStyling}
                                pattern="[A-Za-z ]+"
                                title="Please enter only alphabets"
                                onFocus={(e) => {
                                    e.target.style.boxShadow = "none";
                                }}
                                onBlur={(e) => {
                                    e.target.style.boxShadow = "";
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="pincode">
                                Pin Code<span style={{ color: "red" }}>*</span>
                            </Label>
                            <Input
                                id="pincode"
                                name="pincode"
                                value={address.pincode}
                                onChange={handleChange}
                                required
                                style={inputStyling}
                                pattern="[0-9]{6}"
                                title="Please enter a valid 6-digit Indian pincode"
                                onBlur={(e) => {
                                    validatePincode(e.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="state">
                        State<span style={{ color: "red" }}>*</span>
                    </Label>
                    <Input
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        required
                        style={inputStyling}
                        pattern="[A-Za-z ]+"
                        title="Please enter only alphabets"
                        onFocus={(e) => {
                            e.target.style.boxShadow = "none";
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = "";
                        }}
                        disabled />
                </FormGroup>
                <div style={{ width: "100%", textAlign: "right" }}>
                    <Button type="submit" color="dark">
                        Save
                    </Button>
                </div>
            </Form>
            <ToastContainer />
        </div>
    );
}



function AddAddress({ onClose, selectAddressHandle }) {
    const [userProfile, setUserProfile] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);



    useEffect(() => {

        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("USER"));

            const response = await axios.get(`${base_URL}/profiles/${user.profileId}`);
            console.log(',.,.,.,.', response.data)
            setUserProfile(response.data);
            setAddresses(response.data.addresses);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleEdit = (address) => {
        setSelectedAddress(address);
        setEditMode(true);
    };

    const handleSave = async (modifiedAddress, modifiedUserProfile) => {
        try {
            const updatedUserProfile = { ...userProfile };
            const updatedAddresses = updatedUserProfile.addresses.map((address) => {
                if (address.addressId === modifiedAddress.addressId) {
                    return { ...modifiedAddress };
                }
                return address;
            });
            updatedUserProfile.addresses = updatedAddresses;
            const user = JSON.parse(localStorage.getItem("USER"));
            await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

            fetchUserProfile();

            setEditMode(false);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const addAddress = async (newAddress) => {
        try {
            console.log(newAddress);
            const updatedUserProfile = { ...userProfile };

            updatedUserProfile.addresses.push(newAddress);
            console.log(updatedUserProfile);
            const user = JSON.parse(localStorage.getItem("USER"));
            await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

            console.log('addedd...........', updatedUserProfile);

            fetchUserProfile();

            setEditMode(false);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const closeAddAddress = () => {
        setSelectedAddress(null);
        setEditMode(false);
        onClose();
    };

    return (
        <div className='p-4' style={{ width: '100%', height: '100%' }}>
            <ToastContainer />
            <div
                className='close-divs'
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#23222250',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1100,
                }}
                onClick={closeAddAddress}
            ></div>
            <div
                className='scroller-x'
                style={{
                    width: '450px',
                    height: '100vh',
                    backgroundColor: 'white',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1101,
                    overflowY: 'scroll',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 20px',
                        width: '100%',
                        backgroundColor: 'white',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CardTitle style={{ marginRight: '10px' }}>
                            <h3>DELIVERY ADDRESS</h3>
                        </CardTitle>
                    </div>
                    <div>
                        <h3 onClick={closeAddAddress}>
                            <FontAwesomeIcon icon={faTimes} />
                        </h3>
                    </div>
                </div>

                {!editMode && (
                    <div>
                        <CardFooter style={{ width: '100%' }}>
                            <Button color='dark' style={{ width: '100%', padding: '12px 0', fontSize: '17px', fontWeight: 500 }} onClick={() => setEditMode(true)}>
                                Add Address
                            </Button>
                        </CardFooter>
                    </div>
                )}
                <CardBody>
                    {addresses.map((address, index) => (
                        <div key={index}>
                            {!editMode && (
                                <AddressCard
                                    userProfile={userProfile}
                                    address={address}
                                    handleEdit={() => handleEdit(address)}
                                    selectAddressHandle={selectAddressHandle}
                                    closeAddAddress={closeAddAddress} // Pass the closeAddAddress function as a prop
                                />
                            )}
                            {editMode && selectedAddress === address && <EditAddressInput address={address} userProfile={userProfile} handleSave={handleSave} />}
                        </div>
                    ))}
                    {editMode && selectedAddress === null && <AddAddressInput handleSave={addAddress} />}
                </CardBody>
            </div>
        </div>
    );
}
export default AddAddress;
