
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDtM6kalq97JKWFD9WHFg1_7HNyAMeN05A',
    authDomain: 'whatsappclone-d3f9a.firebaseapp.com',
    projectId: 'whatsappclone-d3f9a',
    storageBucket: 'whatsappclone-d3f9a.appspot.com',
    messagingSenderId: '500602549686',
    appId: '1:500602549686:web:7a75459ca31d7491fc3d17',
    measurementId: 'G-N5YZKTWN7Y',
};

firebase.initializeApp(firebaseConfig);

function AdminAddProduct() {
    useEffect(() => {
        document.title = 'Add Products';
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [rating, setRating] = useState('');
    const [productSpecification, setProductSpecification] = useState([{ key: '', value: '' }]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
const [stockQuantity, setStockQuantity] = useState('');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);

        fileRef
            .put(file)
            .then(() => {
                // Get the download URL of the uploaded image
                fileRef.getDownloadURL().then((url) => {
                    setImageUrl(url);
                    console.log('Image Upload Error:', url);
                });
            })
            .catch((error) => {
                toast.error('Error uploading image!', {
                    position: toast.POSITION.BOTTOM_CENTER,
                });
                console.log('Image Upload Error:', error);
            });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!selectedOption) {
            toast.error('Please select a product type!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        if (productName.length > 25) {
            toast.error('Product name should not exceed 25 characters!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        if (productDescription.length > 90) {
            toast.error('Product description should not exceed 90 characters!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        if (rating < 1 || rating > 5) {
            toast.error('Rating should be between 1 and 5!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        if (unitPrice < 0) {
            toast.error('Price should not be negative!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        const specificationEmpty = productSpecification.some((spec) => spec.key.trim() === '' || spec.value.trim() === '');
        if (specificationEmpty) {
            toast.error('Please enter all specification details!', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        const formattedSpecification = productSpecification.reduce((acc, spec) => {
            acc[spec.key] = spec.value;
            return acc;
        }, {});

        // const productData = {
        //     productName,
        //     category: selectedOption,
        //     price: unitPrice,
        //     rating: rating,
        //     image: [imageUrl], // Send only the image source (src)
        //     description: productDescription,
        //     specification: formattedSpecification,
        // };
        const productData = {
            productName,
            category: selectedOption,
            price: unitPrice,
            rating: rating,
            image: [imageUrl],
            description: productDescription,
            specification: formattedSpecification,
            stockQuantity: stockQuantity, // Include the new input value
        };

        try {
            console.log(productData)

            const response = await axios.post(`${base_URL}/products`, productData,);

            console.log('Add Product Response:', response.data);

            toast.success('Product added!', { autoClose: 2000 }) ;
            resetForm();
        } catch (error) {
            toast.error('An error occurred!', { position: toast.POSITION.BOTTOM_CENTER });
            console.log('Add Product Error:', error);
        }
    };

    const handleSpecificationChange = (index, key, value) => {
        const updatedSpecification = [...productSpecification];
        updatedSpecification[index] = { key, value };
        setProductSpecification(updatedSpecification);
    };

    const addSpecificationField = () => {
        const updatedSpecification = [...productSpecification, { key: '', value: '' }];
        setProductSpecification(updatedSpecification);
    };

    const removeSpecificationField = (index) => {
        const updatedSpecification = [...productSpecification];
        updatedSpecification.splice(index, 1);
        setProductSpecification(updatedSpecification);
    };

    const resetForm = () => {
        setProductName('');
        setSelectedOption('');
        setProductDescription('');
        setUnitPrice('');
        setRating('');
        setProductSpecification([{ key: '', value: '' }]);
        setImage(null);
        setImageUrl('');
        setStockQuantity('');
    };

    const productNameMaxLength = 25;
    const productDescriptionMaxLength = 90;

    return (
        <div className='my-3' style={{ textAlign: 'left' }}>
            <ToastContainer />
            <Card className="p-4" style={{ width: '100%' }}>
                <CardTitle className="mb-4" tag="h4">
                    Add Product
                </CardTitle>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <Label>Product Name<span style={{color :'red'}}>*</span></Label>
                                <Input
                                    type="text"
                                    placeholder={`Enter product name`}
                                    maxLength={productNameMaxLength}
                                    required
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    style={productName.length > productNameMaxLength ? { border: '1px solid red' } : {}}
                                />

                                <div style={{ textAlign: 'right' }}>
                                    <FormText color="muted">
                                        ({productName.length}/{productNameMaxLength})
                                    </FormText>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <Label>Product Type<span style={{color :'red'}}>*</span></Label>
                            <FormGroup color="primary">
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle color="warning" caret>
                                        {selectedOption || 'Select an option'}
                                    </DropdownToggle>
                                    <DropdownMenu style={{ width: '600px' }}>
                                        <DropdownItem onClick={() => handleOptionSelect('Watches')}>Watches</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>Mobiles</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Laptop')}>Laptop</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Footwear')}>Footwear</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Clothing')}>Clothing</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Bags')}>Bags</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="my-3">
                        <Label>Product Description<span style={{color :'red'}}>*</span></Label>
                        <Col sm={12}>
                            <Input
                                placeholder={`Enter description`}
                                type="textarea"
                                maxLength={productDescriptionMaxLength}
                                required
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                style={productDescription.length > productDescriptionMaxLength ? { border: '1px solid red' } : {}}
                            />
                            <div style={{ textAlign: 'right' }}>
                                <FormText color="muted">
                                    ({productDescription.length}/{productDescriptionMaxLength})
                                </FormText>
                            </div>
                        </Col>
                    </FormGroup>

                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Price<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    placeholder="Enter price per unit."
                                    type="number"
                                    min="0"
                                    value={unitPrice}
                                    onChange={(e) => {
                                        const input = e.target.value;
                                        const price = parseFloat(input);
                                        if (!isNaN(price) && input.trim() !== '' && price >= 0) {
                                            setUnitPrice(input.replace(/[^0-9]/g, '')); // Remove non-digit characters
                                        } else {
                                            setUnitPrice(''); // Clear the value if it's not a valid positive number
                                        }
                                    }}

                                    required
                                />
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Quantity<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    type="number"
                                    placeholder="Enter stock quantity"
                                    value={stockQuantity}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) { // Only allow digits
                                            if (value === "" || Number(value) > 0) { // Allow empty or positive values
                                                setStockQuantity(value);
                                            }
                                        }
                                    }}
                                    min="1"
                                    required
                                />
                            </FormGroup>
 
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Rating<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    placeholder="Enter rating (1-5)"
                                    type="number"
                                    min="0"
                                    max="5"
                                    value={rating}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*\.?\d*$/.test(value)) { // Only allow digits and an optional decimal point
                                            if (value === "" || (Number(value) >= 0 && Number(value) <= 5)) { // Allow empty or values between 0 and 5
                                                setRating(value);
                                            }
                                        }
                                    }}
                                    step="1"
                                    required
                                />
                            </FormGroup>

                        </Col>
                      
                    </Row>

                    
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <Label>Product Image<span style={{color :'red'}}>*</span></Label>
                               
                                <Input type="file" accept="image/*" required onChange={handleImageChange} />

                               
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            {imageUrl && (
                                <div>
                                    <img src={imageUrl} alt="Product" style={{ maxWidth: '100px', marginBottom: '10px' }} />
                                </div>
                            )}
                            
                        </Col>
                    </Row>

                  
                    

                    <FormGroup className="my-3">
                        <Label className="d-flex justify-content-between align-items-center">
                            <span>Product Specification<span style={{ color: 'red' }}>*</span></span>
                            <Button
                                style={{ fontSize: '25px', marginRight: '20px', fontWeight: 'bold' }}
                                type="button"
                                color="link"
                                outline
                                onClick={addSpecificationField}
                                className="ml-auto"
                            >
                              <FontAwesomeIcon icon={faPlus} style={{ color: 'green' }} />
                            </Button>
                        </Label>
                        {productSpecification.map((spec, index) => (
                            <Row className="py-1" key={index}>
                                <Col md={5}>
                                    <Input
                                        type="text"
                                        placeholder="Specification"
                                        value={spec.key}
                                        onChange={(e) => handleSpecificationChange(index, e.target.value, spec.value)}
                                    />
                                </Col>
                                <Col md={5}>
                                    <Input
                                        type="text"
                                        placeholder="Enter Specification"
                                        value={spec.value}
                                        onChange={(e) => handleSpecificationChange(index, spec.key, e.target.value)}
                                    />
                                </Col>
                                <Col md={2}>
                                    {index !== 0 && (
                                        <Button
                                            type="button"
                                            color="danger"
                                            size="sm"
                                            onClick={() => removeSpecificationField(index)}
                                            className="float-right"
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </Col>
                            </Row>
                        ))}
                        <FormText color="muted">Click the button to add more specification fields.</FormText>
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type="reset" color="danger" onClick={resetForm}>
                            Reset
                        </Button>
                        <Button type="submit" color="success" className="mr-2">
                            Add Product
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AdminAddProduct;



