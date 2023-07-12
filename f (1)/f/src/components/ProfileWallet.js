
// import React, { useEffect, useState } from 'react';
// import { FormText } from 'react-bootstrap';
// import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// // import './Wallet.css'; // Import the CSS file for Wallet component styling
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const ProfileWallet = () => {
  
    // const [modal, setModal] = useState(false);
    // const [redirectModal, setRedirectModal] = useState(false);
    // const [activateWallet , setActiveWallet] = useState(false);
    // const [isWallet, setIsWallet] = useState(false);
    // const [walletData, setWalletData] = useState();
    // const navigate = useNavigate();


//     useEffect(() => {
        
//         const user = JSON.parse(localStorage.getItem("USER"));
//         if (user === null) {
//             navigate('/login')
//         } else {
//             fetchUserWallet();
//         }
       
       
//     }, [isWallet]);

//     const fetchUserWallet = () => {
//         const user = JSON.parse(localStorage.getItem("USER"));
//         axios
//             .get(`${base_URL}/wallet/profile/${user.profileId}`)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     console.log(response.data)
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };


//     const handleActivateWallet = () => {
//         const user = JSON.parse(localStorage.getItem("USER"));


//         const wallletDetail = {
//             profileId: user.profileId
//         }
//         console.log(wallletDetail)
//         axios
//             .post(`${base_URL}/wallet`, wallletDetail)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     setActiveWallet(!activateWallet)
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }
//     const toggle = () => setModal(!modal);


//     const handleAddMoney = () => {
//         const amount = 4356456;
//         const requestData = { amount }; // Wrap the amount in an object

//         axios
//             .put(`${base_URL}/wallet/${walletData.walletId}/add-money`, requestData)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     activateWalleToggle();
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

    
//     const toggleRedirectModal = () => {
//         setRedirectModal(!redirectModal)
//         setModal(!modal)
//     };
    
//     const activateWalleToggle = () => {
//         setActiveWallet(!activateWallet)
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
//         <Container className="wallet-container">

//             {isWallet ? (
//                 <>
//                     <Card className='mb-2' style={{ textAlign: 'left' }}>


//                         <CardHeader style={{ textAlign: 'center' }}>

//                             <h5>
//                                 TOTAL AVAILABLE BALANCE
//                             </h5>
//                             <h1 style={{ color: 'orangered' }}>
//                                 ₹40.00
//                             </h1>
//                         </CardHeader>

//                         <CardBody style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
//                             <div>
//                                 For a quick checkout
//                                 <br />
//                                 <Button color='link' outline onClick={toggle}>
//                                     <span style={{ color: 'blue', fontWeight: 600 }}>
//                                         TOP UP
//                                     </span>

//                                 </Button>
//                             </div>

//                             <span style={{ width: 2, height: 70, backgroundColor: '#00000030' }}>
//                             </span>
//                             <div>
//                                 Have a gift card?
//                                 <br />
//                                 <Button color='link' outline>
//                                     <span style={{ color: 'blue', fontWeight: 600 }}>
//                                         GIFT CARD
//                                     </span>
//                                     <span > <FormText color="muted" style={{ color: 'red' }}>(Not Available)</FormText></span>
//                                 </Button>
//                             </div>
//                         </CardBody>
//                     </Card>
//                     <Card style={{ textAlign: 'left' }}>

//                         <CardHeader tag={'h6'}>
//                             TRANSACTION LOG
//                         </CardHeader>


//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>

//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>
//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>
//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>
//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>
//                         <Card>

//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <CardBody>
//                                     <p>
//                                         Order Placed
//                                     </p>
//                                     <FormText color="muted">Order No: 123735546745150106303</FormText>

//                                 </CardBody>
//                                 <CardBody style={{ textAlign: 'right' }}>
//                                     <p className='date-of-transition'>
//                                         date
//                                     </p>
//                                     <b className='amount' style={{ color: 'red', }}>
//                                         + ₹37.21
//                                     </b>
//                                 </CardBody>
//                             </div>

//                         </Card>
//                     </Card>
//                 </>
//             ) : (
//                     <>
//                         <Card>

//                             <CardHeader>
//                                 Activate your Wallet
//                             </CardHeader>


//                         </Card>
//                         <Button onClick={activateWalleToggle} color='warning' className='m-3'>
//                             wdsfg
//                         </Button>
//                     </>
//             ) }
           

            
//             <Modal isOpen={modal} toggle={toggle} centered      >
//                 <ModalHeader toggle={toggle}>Add Money</ModalHeader>
//                 <ModalBody>
//                     <Card>
//                         <CardHeader style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600}}>
//                             AVAILABLE MYNTRA CREDIT
//                             <span style={{textAlign: 'right'}}>
//                                 ₹    CREDIT
                                
//                             </span>
//                         </CardHeader>
//                     </Card>


//                     <Form className='p-3'>
//                         <Label color="muted">
//                             Top-up Your Wallet
//                         </Label>

//                         <FormGroup>
//                             <div style={{ textAlign: 'right',  }}>
//                                 <text color="muted" style={{ fontSize: 13, textAlign: 'right', margin: 0,  }}>$ Enter An amount(eg:1000)</text>
//                             </div>
                            
                            
//                             <Input
//                                 type='number'
//                                 id="phoneNumber"
//                                 name="phoneNumber"
//                                 required
//                                 style={imputStyling}
//                                 onFocus={(e) => {
//                                     e.target.style.boxShadow = 'none';
//                                 }}
//                                 onBlur={(e) => {
//                                     e.target.style.boxShadow = '';
//                                 }}
//                             />

//                             <div>
//                                 <Button color='dark' className='m-2 my-3' outline>
//                                     100
//                                 </Button>
//                                 <Button color='dark' className='m-2 my-3' outline>
//                                     200
//                                 </Button>
//                                 <Button color='dark' className='m-2 my-3' outline>
//                                     300
//                                 </Button>
//                                 <Button color='dark' className='m-2 my-3' outline>
//                                     500
//                                 </Button>
//                             </div>
                                
                            
                            
//                         </FormGroup>

//                     </Form>


//                 </ModalBody>
//                 <ModalFooter>
//                     <Button style={{ width: '100%' }} color="dark" onClick={handleAddMoney}>
//                        Add money
                        
                        
//                     </Button>
                    
//                 </ModalFooter>
//             </Modal>


//             <Modal isOpen={redirectModal} toggle={toggleRedirectModal} >
//                 <ModalHeader toggle={toggleRedirectModal}></ModalHeader>
//                 <ModalBody>
//                     Money added successfully!

//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={toggleRedirectModal}>
//                         Ok
//                     </Button>{' '}
//                 </ModalFooter>
//             </Modal>
//             <Modal isOpen={activateWallet} centered  size='sm' toggle={activateWalleToggle} >
//                 <ModalHeader toggle={activateWalleToggle}></ModalHeader>
//                 <ModalBody>
//                     <b>Want to activate your wallet</b>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={handleActivateWallet}>
//                         Ok
//                     </Button>{' '}
//                 </ModalFooter>
//             </Modal>
//         </Container>
//     );
// };





// import React, { useEffect, useState } from 'react';
// import { FormText } from 'react-bootstrap';
// import {
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     Col,
//     Container,
//     Form,
//     FormGroup,
//     Input,
//     Label,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
// } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const ProfileWallet = () => {
//     const [modal, setModal] = useState(false);
//     const [redirectModal, setRedirectModal] = useState(false);
//     const [activateWallet, setActivateWallet] = useState(false);
//     const [isWallet, setIsWallet] = useState(false);
//     const [walletData, setWalletData] = useState({});
//     // const [amount, setAmount] = useState();
//     const [amount, setAmount] = useState('');
//     const navigate = useNavigate();

//     const [statement, setStatement] = useState([]);

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('USER'));
//         if (user === null) {
//             navigate('/login');
//         } else {
//             fetchUserWallet();
            
//         }
//     }, [isWallet]);

//     // useEffect(() => {
//     //     if (isWallet) {
//     //         fetchStatements();
//     //     }
//     // }, []);

//     const fetchUserWallet = () => {
//         const user = JSON.parse(localStorage.getItem('USER'));
//         axios
//             .get(`${base_URL}/wallet/profile/${user.profileId}`)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     fetchStatements();
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//                 toast.error('Failed to fetch user wallet', {
//                     position: 'bottom-center',
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     progressStyle: { background: 'red' },
//                 });
//             });
//     };

//     const fetchStatements = () => {

//         console.log('Fetching statements');
//         if (walletData.walletId) {
//             axios
//                 .get(`${base_URL}/wallet/${walletData.walletId}/statements`)
//                 .then((response) => {
//                     if (response.data) {
//                         setStatement(response.data);
//                     }
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                     toast.error(`Failed to fetch wallet statement${walletData.walletId}`, {
//                         position: 'bottom-center',
//                         autoClose: 2000,
//                         hideProgressBar: false,
//                         progressStyle: { background: 'red' },
//                     });
//                 });
//        }
//     };

//     const handleActivateWallet = () => {
//         const user = JSON.parse(localStorage.getItem('USER'));
//         const walletDetail = {
//             profileId: user.profileId,
//         };
//         axios
//             .post(`${base_URL}/wallet`, walletDetail)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     setStatement(response.data.statement);
//                     setActivateWallet(!activateWallet);
                    
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//                 toast.error('Failed to activate wallet', {
//                     position: 'bottom-center',
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     progressStyle: { background: 'red' },
//                 });
//             });
//     };

//     const activateWalletToggle = () => {
//         setActivateWallet(!activateWallet);
//     };

//     const handleAddMoney = () => {
//         const updatedBalance = walletData.currentBalance + parseFloat(amount);
//         const newStatement = {
//             transactionType: 'Deposit',
//             amount: parseFloat(amount),
//             orderId: null,
//             transactionRemarks: null,
//         };
//         const requestData = {
//             ...walletData,
//             currentBalance: updatedBalance,
//         };
//         requestData.statement.push(newStatement);
//         axios
//             .put(`${base_URL}/wallet/${walletData.walletId}/add`, requestData)
//             .then((response) => {
//                 if (response.data) {
//                     setIsWallet(true);
//                     setWalletData(response.data);
//                     fetchStatements()
//                     setAmount('');
//                     toggle();
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//                 toast.error('Failed to add money to wallet', {
//                     position: 'bottom-center',
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     progressStyle: { background: 'red' },
//                 });
//             });
//     };

//     const toggle = () => setModal(!modal);

//     const inputStyling = {
//         outline: 'none',
//         border: 'none',
//         borderBottom: '2px solid #00000050',
//         borderRadius: 0,
//         backgroundColor: 'transparent',
//         width: '100%',
//         padding: '5px 7px',
//         fontWeight: 'bold',
//         color: '#000000a2',
//     };

//     const DateConverter = ({ detail }) => {
//         const dateTimeString = detail;
//         const dateTime = new Date(dateTimeString);

//         const minutes = dateTime.getMinutes().toString().padStart(2, '0');
//         const hours = dateTime.getHours();
//         const amPm = hours >= 12 ? 'PM' : 'AM';
//         const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
//         const day = dateTime.getDate().toString().padStart(2, '0');
//         const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
//         const year = dateTime.getFullYear().toString().slice(-2);

//         const formattedDateTime = `${minutes}:${formattedHours} ${amPm} ${day}-${month}-${year}`;

//         return <>{formattedDateTime}</>;
//     };

//     const handleGiftCard = () => {
//         toast.error('Unavailable!', {
//             position: 'bottom-center',
//             autoClose: 2000,
//             hideProgressBar: false,
//             progressStyle: { background: 'red' },
//         });
//     };


//     return (
//         <Container className="wallet-container">

//             {isWallet ? (
//                 <>
//                     <Card className='mb-2' style={{ textAlign: 'left' }}>


//                         <CardHeader style={{ textAlign: 'center' }}>

//                             <h5>
//                                 TOTAL AVAILABLE BALANCE
//                             </h5>
//                             <h1 style={{ color: 'orangered' }}>
//                                 {walletData.currentBalance.toFixed(2) || 0}$
//                             </h1>
//                         </CardHeader>

//                         <CardBody style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
//                             <div>
//                                 For a quick checkout
//                                 <br />
//                                 <Button color='link' outline onClick={toggle}>
//                                     <span style={{ color: 'blue', fontWeight: 600 }}>
//                                         TOP UP
//                                     </span>

//                                 </Button>
//                             </div>

//                             <span style={{ width: 2, height: 70, backgroundColor: '#00000030' }}>
//                             </span>
//                             <div>
//                                 Have a gift card?
//                                 <br />
//                                 <Button color='link' onClick={handleGiftCard} outline>
//                                     <span style={{ color: 'blue', fontWeight: 600 }}>
//                                         GIFT CARD
//                                     </span>
//                                     <span > <FormText color="muted" style={{ color: 'red' }}>(Not Available)</FormText></span>
//                                 </Button>
//                             </div>
//                         </CardBody>
//                     </Card>

//                     { statement && statement.length > 0 ? (
//                         <Card style={{ textAlign: 'left' }}>
//                             <CardHeader tag={'h6'}>TRANSACTION LOG</CardHeader>
//                             {statement.map((log) => (
//                                 <Card key={log.statementId}>
//                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <CardBody>
//                                             <Label tag={'h5'} style={{ color: log.transactionType === 'Deposit' ? 'green' : 'red' }}>
//                                                 {log.transactionType}
//                                             </Label>
//                                             <FormText color="muted">Transition ID: <b>#{log.statementId}</b></FormText>
//                                         </CardBody>
//                                         <CardBody style={{ textAlign: 'right' }}>
//                                             <p className='date-of-transition'>
//                                                 <DateConverter detail={log.dateTime} />
//                                             </p>
//                                             <b className='amount' style={{ color: log.transactionType === 'Deposit' ? 'green' : 'red' }}>
//                                                 {log.transactionType === 'Deposit' ? '+' : '-'} {log.amount}
//                                             </b>
//                                         </CardBody>
//                                     </div>
//                                 </Card>
//                             ))}
//                         </Card>
//                     ) : (
//                             <>
//                                 No transition History
//                             </>
//                     )}

                   
//                 </>
//             ) : (
//                 <>
//                     <Card>

//                         <CardHeader>
//                             Activate your Wallet
//                         </CardHeader>


//                     </Card>
//                         <Button onClick={activateWalletToggle} color='warning' className='m-3'>
//                        Activate
//                     </Button>
//                 </>
//             )}


//             <Modal isOpen={modal} toggle={toggle} centered>
//                 <ModalHeader toggle={toggle}>Add Money</ModalHeader>
//                 <ModalBody>
//                     <Card>
//                         <CardHeader style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
//                             AVAILABLE MYNTRA CREDIT
//                             <span style={{ textAlign: 'right' }}>
//                                 ₹ CREDIT
//                             </span>
//                         </CardHeader>
//                     </Card>

//                     <Form className='p-3'>
//                         <Label color="muted">
//                             Top-up Your Wallet
//                         </Label>

//                         <FormGroup>
//                             <div style={{ textAlign: 'right' }}>
//                                 <span style={{ fontSize: 13, textAlign: 'right', margin: 0 }}>
//                                     $ Enter An amount (e.g., 1000)
//                                 </span>
//                             </div>

//                             <Input
//                                 type='number'
//                                 id="phoneNumber"
//                                 name="phoneNumber"
//                                 required
//                                 style={inputStyling}
//                                 value={amount}
//                                 onChange={(e) => setAmount(e.target.value)}
//                                 onFocus={(e) => {
//                                     e.target.style.boxShadow = 'none';
//                                 }}
//                                 onBlur={(e) => {
//                                     e.target.style.boxShadow = '';
//                                 }}
//                             />

//                             <div>
//                                 <Button
//                                     color='dark'
//                                     className='m-2 my-3'
//                                     outline
//                                     onClick={() => setAmount('100')}
//                                 >
//                                     100
//                                 </Button>
//                                 <Button
//                                     color='dark'
//                                     className='m-2 my-3'
//                                     outline
//                                     onClick={() => setAmount('200')}
//                                 >
//                                     200
//                                 </Button>
//                                 <Button
//                                     color='dark'
//                                     className='m-2 my-3'
//                                     outline
//                                     onClick={() => setAmount('300')}
//                                 >
//                                     300
//                                 </Button>
//                                 <Button
//                                     color='dark'
//                                     className='m-2 my-3'
//                                     outline
//                                     onClick={() => setAmount('500')}
//                                 >
//                                     500
//                                 </Button>
//                             </div>
//                         </FormGroup>
//                     </Form>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button style={{ width: '100%' }} color="dark" onClick={handleAddMoney}>
//                         Add money
//                     </Button>
//                 </ModalFooter>
//             </Modal>

            
//             <Modal isOpen={activateWallet} centered size='sm' toggle={activateWalletToggle} >
//                 <ModalHeader toggle={activateWalletToggle}></ModalHeader>
//                 <ModalBody>
//                     <b>Want to activate your wallet</b>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={handleActivateWallet}>
//                         Ok
//                     </Button>{' '}
//                 </ModalFooter>
//             </Modal>
//         </Container>
//     );
// };


// export default ProfileWallet;





import React, { useEffect, useState } from 'react';
import { FormText } from 'react-bootstrap';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import base_URL from '../api/BootAPI';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProfileWallet = () => {
    const [modal, setModal] = useState(false);
    const [redirectModal, setRedirectModal] = useState(false);
    const [activateWallet, setActivateWallet] = useState(false);
    const [isWallet, setIsWallet] = useState(false);
    const [walletData, setWalletData] = useState({});
    // const [amount, setAmount] = useState();
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const [statement, setStatement] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('USER'));
        if (user === null) {
            navigate('/login');
        } else {
            fetchUserWallet();

        }
    }, [isWallet]);

    // useEffect(() => {
    //     if (isWallet) {
    //         fetchStatements();
    //     }
    // }, []);

    const fetchUserWallet = () => {
        const user = JSON.parse(localStorage.getItem('USER'));
        axios
            .get(`${base_URL}/wallet/profile/${user.profileId}`)
            .then((response) => {
                if (response.data) {
                    setIsWallet(true);
                    setWalletData(response.data);
                    fetchStatements();
                }
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to fetch user wallet', {
                    position: 'bottom-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    progressStyle: { background: 'red' },
                });
            });
    };

    const fetchStatements = () => {

        console.log('Fetching statements');
        if (walletData.walletId) {
            axios
                .get(`${base_URL}/wallet/${walletData.walletId}/statements`)
                .then((response) => {
                    if (response.data) {
                        setStatement(response.data);
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                    toast.error(`Failed to fetch wallet statement${walletData.walletId}`, {
                        position: 'bottom-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        progressStyle: { background: 'red' },
                    });
                });
        }
    };

    const handleActivateWallet = () => {
        const user = JSON.parse(localStorage.getItem('USER'));
        const walletDetail = {
            profileId: user.profileId,
        };
        axios
            .post(`${base_URL}/wallet`, walletDetail)
            .then((response) => {
                if (response.data) {
                    setIsWallet(true);
                    setWalletData(response.data);
                    setStatement(response.data.statement);
                    setActivateWallet(!activateWallet);

                }
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to activate wallet', {
                    position: 'bottom-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    progressStyle: { background: 'red' },
                });
            });
    };

    const activateWalletToggle = () => {
        setActivateWallet(!activateWallet);
    };

    const handleAddMoney = () => {
        const updatedBalance = walletData.currentBalance + parseFloat(amount);
        const newStatement = {
            transactionType: 'Deposit',
            amount: parseFloat(amount),
            orderId: null,
            transactionRemarks: null,
        };
        const requestData = {
            ...walletData,
            currentBalance: updatedBalance,
        };
        requestData.statement.push(newStatement);
        axios
            .put(`${base_URL}/wallet/${walletData.walletId}/add`, requestData)
            .then((response) => {
                if (response.data) {
                    setIsWallet(true);
                    setWalletData(response.data);
                    fetchStatements()
                    setAmount('');
                    toggle();
                }
            })
            .catch((error) => {
                console.log('Error:', error);
                toast.error('Failed to add money to wallet', {
                    position: 'bottom-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    progressStyle: { background: 'red' },
                });
            });
    };

    const toggle = () => setModal(!modal);

    const inputStyling = {
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #00000050',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        padding: '5px 7px',
        fontWeight: 'bold',
        color: '#000000a2',
    };

    const DateConverter = ({ detail }) => {
        const dateTimeString = detail;
        const dateTime = new Date(dateTimeString);

        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        const hours = dateTime.getHours();
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const day = dateTime.getDate().toString().padStart(2, '0');
        const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
        const year = dateTime.getFullYear().toString().slice(-2);

        const formattedDateTime = `${minutes}:${formattedHours} ${amPm} ${day}-${month}-${year}`;

        return <>{formattedDateTime}</>;
    };

    const handleGiftCard = () => {
        toast.error('Unavailable!', {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: false,
            progressStyle: { background: 'red' },
        });
    };
    const handleAmountChange = (e) => {
        let inputValue = parseInt(e.target.value, 10); // Convert input value to integer
        if (inputValue > 10000) {
            inputValue = 10000; // Set the maximum value to 10,000
        } else if (inputValue < 0 || isNaN(inputValue)) {
            inputValue = 0; // Set the minimum value to 0 if input is less than 0 or NaN
        }
        setAmount(inputValue.toString()); // Convert the value back to string and update state
    };



    return (
        <Container className="wallet-container">

            {isWallet ? (
                <>
                    <Card className='mb-2' style={{ textAlign: 'left' }}>


                        <CardHeader style={{ textAlign: 'center' }}>

                            <h5>
                                TOTAL AVAILABLE BALANCE
                            </h5>
                            <h1 style={{ color: 'orangered' }}>
                                {walletData.currentBalance.toFixed(2) || 0}$
                            </h1>
                        </CardHeader>

                        <CardBody style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
                            <div>
                                For a quick checkout
                                <br />
                                <Button color='link' outline onClick={toggle}>
                                    <span style={{ color: 'blue', fontWeight: 600 }}>
                                        TOP UP
                                    </span>

                                </Button>
                            </div>

                            <span style={{ width: 2, height: 70, backgroundColor: '#00000030' }}>
                            </span>
                            <div>
                                Have a gift card?
                                <br />
                                <Button color='link' onClick={handleGiftCard} outline>
                                    <span style={{ color: 'blue', fontWeight: 600 }}>
                                        GIFT CARD
                                    </span>
                                    <span > <FormText color="muted" style={{ color: 'red' }}>(Not Available)</FormText></span>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>


                    {statement && statement.length > 0 ? (
                        <Card style={{ textAlign: 'left' }}>
                            <CardHeader tag={'h6'}>TRANSACTION LOG</CardHeader>
                            {statement.map((log) => (
                                <Card key={log.statementId}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <CardBody>
                                            <Label tag={'h5'} style={{ color: log.transactionType === 'Deposit' ? 'green' : 'red' }}>
                                                {log.transactionType}
                                            </Label>
                                            <FormText color="muted">Transition ID: <b>#{log.statementId}</b></FormText>
                                        </CardBody>
                                        <CardBody style={{ textAlign: 'right' }}>
                                            <p className='date-of-transition'>
                                                <DateConverter detail={log.dateTime} />
                                            </p>
                                            <b className='amount' style={{ color: log.transactionType === 'Deposit' ? 'green' : 'red' }}>
                                                {log.transactionType === 'Deposit' ? '+' : '-'} {log.amount}
                                            </b>
                                        </CardBody>
                                    </div>
                                </Card>
                            ))}
                        </Card>
                    ) : (
                        <>
                            No transition History
                        </>
                    )}


                </>
            ) : (
                <>
                    <Card>

                        <CardHeader>
                            Activate your Wallet
                        </CardHeader>


                    </Card>
                    <Button onClick={activateWalletToggle} color='warning' className='m-3'>
                        Activate
                    </Button>
                </>
            )}


            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Add Money</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardHeader style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                            AVAILABLE MYNTRA CREDIT
                            <span style={{ textAlign: 'right' }}>
                                ₹ CREDIT
                            </span>
                        </CardHeader>
                    </Card>

                    <Form className='p-3'>
                        <Label color="muted">
                            Top-up Your Wallet
                        </Label>

                        <FormGroup>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ fontSize: 13, textAlign: 'right', margin: 0 }}>
                                    $ Enter An amount (e.g., 1000)
                                </span>
                            </div>

                            <Input
                                type='number'
                                id="phoneNumber"
                                name="phoneNumber"
                                required
                                style={inputStyling}
                                value={amount}
                                onChange={handleAmountChange}
                                onFocus={(e) => {
                                    e.target.style.boxShadow = 'none';
                                }}
                                onBlur={(e) => {
                                    e.target.style.boxShadow = '';
                                }}
                            />

                            <div>
                                <Button
                                    color='dark'
                                    className='m-2 my-3'
                                    outline
                                    onClick={() => setAmount('100')}
                                >
                                    100
                                </Button>
                                <Button
                                    color='dark'
                                    className='m-2 my-3'
                                    outline
                                    onClick={() => setAmount('200')}
                                >
                                    200
                                </Button>
                                <Button
                                    color='dark'
                                    className='m-2 my-3'
                                    outline
                                    onClick={() => setAmount('300')}
                                >
                                    300
                                </Button>
                                <Button
                                    color='dark'
                                    className='m-2 my-3'
                                    outline
                                    onClick={() => setAmount('500')}
                                >
                                    500
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ width: '100%' }} color="dark" onClick={handleAddMoney}>
                        Add money
                    </Button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={activateWallet} centered size='sm' toggle={activateWalletToggle} >
                <ModalHeader toggle={activateWalletToggle}></ModalHeader>
                <ModalBody>
                    <b>Want to activate your wallet</b>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleActivateWallet}>
                        Ok
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </Container>
    );
};


export default ProfileWallet;
