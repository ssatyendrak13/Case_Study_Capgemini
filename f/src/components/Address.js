// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Card, CardBody, CardTitle, Col, FormGroup, Row } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import AddAddress from './AddAdderss';

// function Address() {
//     const [addresses, setAddresses] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);

//     useEffect(() => {
//         fetchAddresses();
//     }, []);

//     const fetchAddresses = async () => {
//         try {
//             const response = await axios.get(`${base_URL}/1`);
//             console.log('Response:', response.data);
//             setAddresses(response.data.addresses);
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     };

//     const enableAddAddressComponent = () => {
//         enable
//         <AddAddress />
//     };

   

    

//     return (
//         <div>
//             <Card style={{ width: '100%', textAlign: 'left' }}>
//                 <CardBody>
//                     <CardTitle className="mb-4" tag="h4">
//                         Addresses
//                     </CardTitle>
//                     <form className="per-info">
//                         {/* Render the addresses */}
//                         {addresses.map((address, index) => (
//                             <FormGroup className="my-1" key={index}>
//                                 <Row>
//                                     <Col sm={11}>
//                                         <input
//                                             className="p-1 px-2 form-control"
//                                             type="textarea"
//                                             name="fullName"
//                                             value={`${address.colonyName}, ${address.streetName}, ${address.city},  ${address.pincode}, ${address.state} `}
//                                             disabled={!isEditing}
//                                         />
//                                     </Col>
                                    
//                                 </Row>
//                             </FormGroup>
//                         ))}

//                         {/* Render the Edit and Save buttons */}
                        
//                             <Button color="warning" onClick={enableAddAddressComponent}>
//                                 Add Address
//                             </Button>
                      
//                     </form>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }

// export default Address;





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Card, CardBody, CardTitle, Col, FormGroup, Row } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import AddAddress from './AddAdderss';
// // import AddAddress from './AddAddress';

// function Address() {
//     const [addresses, setAddresses] = useState([]);
  
//     const [showAddAddress, setShowAddAddress] = useState(false);

//     useEffect(() => {
//         fetchAddresses();
//     }, []);

//     const fetchAddresses = async () => {
//         try {
//             const response = await axios.get(`${base_URL}/profiles/1`);
//             console.log('Response:', response.data);
//             setAddresses(response.data.addresses);
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     };

//     const enableAddAddressComponent = () => {
//         setShowAddAddress(true);
//     };

//     return (
//         <div>
//             <Card style={{ width: '100%', textAlign: 'left' }}>
//                 <CardBody>
//                     <CardTitle className="mb-4" tag="h4">
//                         Addresses
//                     </CardTitle>
//                     <form className="per-info">
//                         {/* Render the addresses */}
//                         {addresses.map((address, index) => (
//                             <FormGroup className="my-1" key={index}>
//                                 <Row>
//                                     <Col sm={11}>
//                                         <input
//                                             className="p-1 px-2 form-control"
//                                             type="textarea"
//                                             name="fullName"
//                                             value={`${address.colonyName}, ${address.streetName}, ${address.city}, ${address.pincode}, ${address.state}`}
//                                             disabled={true}
//                                         />
//                                     </Col>
//                                 </Row>
//                             </FormGroup>
//                         ))}

//                         {/* Render the Add Address button */}
//                         <Button color="warning" onClick={enableAddAddressComponent}>
//                             Add Address
//                         </Button>
//                     </form>
//                 </CardBody>
//             </Card>

//             {/* Render the AddAddress component */}
//             {showAddAddress && <AddAddress />}
//         </div>
//     );
// }

// export default Address;







import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, FormGroup, Row } from 'reactstrap';
import base_URL from '../api/BootAPI';
import AddAddress from './AddAdderss';


const selectAddressHandle = (selectAddress) => {
    return null
};


function Address() {
    const [addresses, setAddresses] = useState([]);
    const [showAddAddress, setShowAddAddress] = useState(false);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {

            const user = JSON.parse(localStorage.getItem("USER"));
            const response = await axios.get(`${base_URL}/profiles/${user.profileId}`);
            console.log('Response:', response.data);
            setAddresses(response.data.addresses);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const enableAddAddressComponent = () => {
        setShowAddAddress(true);
    };

    const disableAddAddressComponent = () => {
        setShowAddAddress(false);
    };

    return (
        <div>
            <Card style={{ width: '100%', textAlign: 'left' }}>
                <CardBody>
                    <CardTitle className='mb-4' tag='h4'>
                        Addresses
                    </CardTitle>
                    <form className='per-info'>
                        {/* Render the addresses */}
                        {addresses.map((address, index) => (
                            <FormGroup className='my-1' key={index}>
                                <Row>
                                    <Col sm={12}>


                                        
                                        <Card className='' >
                                            <CardHeader>
                                                <CardBody>
                                                    <CardTitle>
                                                        <h5>{address.fullName}</h5>
                                                    </CardTitle>
                                                    <p>{address.phoneNumber}</p>
                                                    <p>
                                                        {address.addressLine}, {address.locality}, {address.city}, {address.state} - {address.pincode}
                                                    </p>
                                                </CardBody>

                                              
                                            </CardHeader>
                                        </Card>

                                       
                                    </Col>
                                </Row>
                            </FormGroup>
                        ))}

                        {/* Render the Add Address button */}
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Button color='dark' outline onClick={enableAddAddressComponent}>
                               edit
                            </Button>
                            <Button color='warning' onClick={enableAddAddressComponent}>
                                Add Address
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>

            {/* Render the AddAddress component */}
            {showAddAddress && <AddAddress selectAddressHandle={selectAddressHandle} onClose={disableAddAddressComponent} />}
        </div>
    );
}

export default Address;




