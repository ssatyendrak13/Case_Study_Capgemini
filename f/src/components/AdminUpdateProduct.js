

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Form, FormGroup, Label, Input, Col, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';

// function AdminUpdateProduct() {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [file, setFile] = useState(null);
//     const [image, setImage] = useState();
//     const { productId } = useParams();



//     useEffect(() => {
//         // alert('Please select')
    
//         console.log(productId)
//         try {
//             axios
//                 .get(`${base_URL}/products/${productId}`)
//                 .then((response) => {
//                     const product= response.data
//                     console.log(product.image[0])
//                     setProductName(product.productName);
//                     setSelectedOption(product.category);
//                     setProductDescription(product.description);
//                     setUnitPrice(product.price);
//                     setImage(product.image[0]);
//                     console.log(image)
//                     // setProducts(response.data);
//                 })

//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     }, [])

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         // Create an object with the form data
//         const productData = {
//             productName:productName,
//             category: selectedOption,
//             description: productDescription,
//             price: unitPrice,
//             image:[image]
//         };

//         // Update the product details


//         console.log('Updating product details', productData)
//         // Call an API or perform the necessary logic to update the product using the productData object

//         // Reset the form fields
//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setFile(null);
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>

//                 <CardTitle className='mb-4' tag="h4">
//                     Update Product Details
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit}>
//                     <Row>
//                         <Col md={9}>
//                             <FormGroup>
//                                 <Label>Product Name<span style={{color :'red'}}>*</span></Label>
//                                 <Input
//                                     type="text"
//                                     placeholder="Enter product name"
//                                     value={productName}
//                                     onChange={(e) => setProductName(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={3}>
//                             <Label>Product Type</Label>
//                             <FormGroup color="primary">
//                                 <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                                     <DropdownToggle color="warning" caret>
//                                         {selectedOption || 'Select an option'}
//                                     </DropdownToggle>
//                                     <DropdownMenu style={{ width: '600px' }}>
                               
                                       
//                                             <DropdownItem onClick={() => handleOptionSelect('Watches')}>
//                                                 Watches
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>
//                                                 Mobiles
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Laptop')}>
//                                                 Laptop
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Footwear')}>
//                                                 Footwear
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Clothing')}>
//                                                 Clothing
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Bags')}>
//                                                 Bags
//                                             </DropdownItem>
//                                         </DropdownMenu>
                                    
                               
//                                 </Dropdown>
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup className="my-3">
//                         <Label>Product Description</Label>
//                         <Col sm={12}>
//                             <Input
//                                 placeholder="Enter description"
//                                 type="textarea"
//                                 value={productDescription}
//                                 onChange={(e) => setProductDescription(e.target.value)}
//                             />
//                         </Col>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>Unit Price</Label>
//                         <Input
//                             type="text"
//                             placeholder="Enter unit price"
//                             value={unitPrice}
//                             onChange={(e) => setUnitPrice(e.target.value)}
//                         />
//                     </FormGroup>
//                     <Row>
//                         <Col md={6}>
                            
//                         </Col>
//                         <Col md={6}>
                            
//                         </Col>
//                     </Row>
//                     <FormGroup>
//                         <Label>Product Image</Label>
//                         <Input name="file" type="text" placeholder="Paste link" value={image} onChange={(e) => setImage(e.target.value)} />
//                         <FormText>Paste photo link for your product</FormText>
//                     </FormGroup>
//                     <Button color='success' type="submit">Update</Button>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default AdminUpdateProduct;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Form, FormGroup, Label, Input, Col, Container, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle, Row } from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';

// function AdminUpdateProduct() {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [image, setImage] = useState('');
//     const { productId } = useParams();

//     useEffect(() => {
//         console.log(productId);
//         try {
//             axios
//                 .get(`${base_URL}/products/${productId}`)
//                 .then((response) => {
//                     const product = response.data;
//                     setProductName(product.productName);
//                     setSelectedOption(product.category);
//                     setProductDescription(product.description);
//                     setUnitPrice(product.price);
//                     setImage(product.image[0]);
//                 });
//         } catch (error) {
//             console.error('Error fetching product:', error);
//         }
//     }, []);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();

//         // Create an object with the form data
//         const productData = {
//             productName: productName,
//             category: selectedOption,
//             description: productDescription,
//             price: unitPrice,
//             image: [image],
//         };

//         try {
//             // Update the product details
//             await axios.put(`${base_URL}/products/${productId}`, productData);
//             toast.success('Product details updated!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//         } catch (error) {
//             console.error('Error updating product:', error);
//             toast.error('Failed to update product details!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//         }

//         // Reset the form fields
//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setImage('');
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                     Update Product Details
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit}>
//                     <Container>
//                         <Row>
//                             <Col md={9}>
//                                 <FormGroup>
//                                     <Label>Product Name</Label>
//                                     <Input type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={3}>
//                                 <Label>Product Type</Label>
//                                 <FormGroup color="primary">
//                                     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                                         <DropdownToggle color="warning" caret>
//                                             {selectedOption || 'Select an option'}
//                                         </DropdownToggle>
//                                         <DropdownMenu style={{ width: '600px' }}>
//                                             <DropdownItem onClick={() => handleOptionSelect('Watches')}>Watches</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>Mobiles</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Laptop')}>Laptop</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Footwear')}>Footwear</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Clothing')}>Clothing</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Bags')}>Bags</DropdownItem>
//                                         </DropdownMenu>
//                                     </Dropdown>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <FormGroup className="my-3">
//                             <Label>Product Description</Label>
//                             <Col sm={12}>
//                                 <Input placeholder="Enter description" type="textarea" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//                             </Col>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Unit Price</Label>
//                             <Input type="text" placeholder="Enter unit price" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Product Image</Label>
//                             <Input name="file" type="text" placeholder="Paste link" value={image} onChange={(e) => setImage(e.target.value)} />
//                             <FormText>Paste photo link for your product</FormText>
//                         </FormGroup>
//                         <Button color="success" type="submit">
//                             Update
//                         </Button>
//                     </Container>
//                 </Form>
//             </Card>
//             <ToastContainer /> {/* Add ToastContainer to display toast notifications */}
//         </div>
//     );
// }

// export default AdminUpdateProduct;







// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Form, FormGroup, Label, Input, Col, Container, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle, Row } from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';

// function AdminUpdateProduct() {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [image, setImage] = useState('');
//     const [productSpecification, setProductSpecifications] = useState([{ key: '', value: '' }]);
//     const [rating, setRating] = useState('');

//     const { productId } = useParams();

//     useEffect(() => {
//         try {
//             axios.get(`${base_URL}/products/${productId}`)
//                 .then((response) => {
//                     const product = response.data;
//                     setProductName(product.productName);
//                     setSelectedOption(product.category);
//                     setProductDescription(product.description);
//                     setUnitPrice(product.price);
//                     setImage(product.image[0]);
//                     setProductSpecifications(product.specifications || [{ key: '', value: '' }]);
//                     setRating(product.rating || '');
//                 });
//         } catch (error) {
//             console.error('Error fetching product:', error);
//         }
//     }, [productId]);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleSpecificationChange = (index, key, value) => {
//         const updatedSpecifications = [...productSpecifications];
//         updatedSpecifications[index] = { key, value };
//         setProductSpecifications(updatedSpecifications);
//     };

//     const addSpecificationField = () => {
//         const updatedSpecifications = [...productSpecifications, { key: '', value: '' }];
//         setProductSpecifications(updatedSpecifications);
//     };

//     const removeSpecificationField = (index) => {
//         const updatedSpecifications = [...productSpecifications];
//         updatedSpecifications.splice(index, 1);
//         setProductSpecifications(updatedSpecifications);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();

//         // Validate form inputs
//         if (!productName || !selectedOption || !productDescription || !unitPrice || !image || !rating) {
//             toast.error('Please fill in all required fields!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//             return;
//         }

//         // Create an object with the form data
//         const productData = {
//             productName: productName,
//             category: selectedOption,
//             description: productDescription,
//             price: unitPrice,
//             image: [image],
//             specifications: productSpecifications,
//             rating: rating,
//         };

//         try {
//             // Update the product details
//             await axios.put(`${base_URL}/products/${productId}`, productData);
//             toast.success('Product details updated!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//         } catch (error) {
//             console.error('Error updating product:', error);
//             toast.error('Failed to update product details!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
//         }

//         // Reset the form fields
//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setImage('');
//         setProductSpecifications([{ key: '', value: '' }]);
//         setRating('');
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                     Update Product Details
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit}>
//                     <Container>
//                         <Row>
//                             <Col md={9}>
//                                 <FormGroup>
//                                     <Label>Product Name</Label>
//                                     <Input type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={3}>
//                                 <Label>Product Type</Label>
//                                 <FormGroup color="primary">
//                                     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                                         <DropdownToggle color="warning" caret>
//                                             {selectedOption || 'Select an option'}
//                                         </DropdownToggle>
//                                         <DropdownMenu style={{ width: '600px' }}>
//                                             <DropdownItem onClick={() => handleOptionSelect('Watches')}>Watches</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>Mobiles</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Laptop')}>Laptop</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Footwear')}>Footwear</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Clothing')}>Clothing</DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Bags')}>Bags</DropdownItem>
//                                         </DropdownMenu>
//                                     </Dropdown>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <FormGroup className="my-3">
//                             <Label>Product Description</Label>
//                             <Col sm={12}>
//                                 <Input placeholder="Enter description" type="textarea" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
//                             </Col>
//                         </FormGroup>

//                         <Row>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label>Unit Price</Label>
//                                     <Input type="text" placeholder="Enter unit price" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//                                 </FormGroup>
//                             </Col>
//                             <Col md={6}>
//                                 <FormGroup>
//                                     <Label>Rating</Label>
//                                     <Input type="number" placeholder="Enter rating" min="0" max="5" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} required />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
                        
                        
//                         <FormGroup>
//                             <Label>Product Image</Label>
//                             <Input name="file" type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} required />
//                             <FormText>Upload an image for your product</FormText>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Product Specifications</Label>
//                             {productSpecifications.map((specification, index) => (
//                                 <Row key={index} className="mb-3">
//                                     <Col md={4}>
//                                         <Input
//                                             type="text"
//                                             placeholder="Enter key"
//                                             value={specification.key}
//                                             onChange={(e) => handleSpecificationChange(index, e.target.value, specification.value)}
//                                             required
//                                         />
//                                     </Col>
//                                     <Col md={7}>
//                                         <Input
//                                             type="text"
//                                             placeholder="Enter value"
//                                             value={specification.value}
//                                             onChange={(e) => handleSpecificationChange(index, specification.key, e.target.value)}
//                                             required
//                                         />
//                                     </Col>
//                                     <Col md={1}>
                                        // {index === productSpecifications.length - 1 ? (
                                        //     <Button color="secondary" onClick={addSpecificationField}>
                                        //         +
                                        //     </Button>
                                        // ) : (
                                        //     <Button color="secondary" onClick={() => removeSpecificationField(index)}>
                                        //         -
                                        //     </Button>
                                        // )}
//                                     </Col>
//                                 </Row>
//                             ))}
//                         </FormGroup>
                       
//                         <Button color="success" type="submit">
//                             Update
//                         </Button>
//                     </Container>
//                 </Form>
//             </Card>
//             <ToastContainer />
//         </div>
//     );
// }

// export default AdminUpdateProduct;





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

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

function AdminEditProduct() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [rating, setRating] = useState('');
    const [productSpecification, setProductSpecification] = useState([{ key: '', value: '' }]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [quantity, setQuantity] = useState('');

    const { productId } = useParams();
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`${base_URL}/products/${productId}`);
                const productData = response.data;
                console.log(productData);
                
                setSelectedOption(productData.category);
                setProductName(productData.productName);
                setProductDescription(productData.description);
                setUnitPrice(productData.price);
                setRating(productData.rating);
                setProductSpecification(Object.entries(productData.specification).map(([key, value]) => ({ key, value })));
                setImageUrl(productData.image[0]);
                setQuantity(productData.stockQuantity)
            } catch (error) {
                console.log('Fetch Product Error:', error);
                toast.error('Failed to fetch product data!', { position: toast.POSITION.BOTTOM_CENTER });
            }
        };

        fetchProductData();
    }, [productId]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    //     setImageUrl(URL.createObjectURL(file));
    // };
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

        if (quantity < 0) {
            toast.error('quantity should not be negative!', { position: toast.POSITION.BOTTOM_CENTER });
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

        const updatedProductData = {
            productName,
            category: selectedOption,
            image: [imageUrl],
            price: unitPrice,
            rating: rating,
            description: productDescription,
            specification: formattedSpecification,
            stockQuantity: quantity

        };

        try {

            console.log(updatedProductData)
            //  await axios.put(`${base_URL}/products/${productId}}`, updatedProductData);
            const response = await axios.put(`${base_URL}/products/${productId}`, updatedProductData);
            console.log('Update Product Response:', response.data);

            toast.success('Product updated!', { autoClose: 2000 });
        } catch (error) {
            toast.error('An error occurred while updating the product!', { position: toast.POSITION.BOTTOM_CENTER });
            console.log('Update Product Error:', error);
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
        setSelectedOption('');
        setProductName('');
        setProductDescription('');
        setUnitPrice('');
        setRating('');
        setProductSpecification([{ key: '', value: '' }]);
        setImage(null);
        setImageUrl('');
        setQuantity('');
    };

    const productNameMaxLength = 25;
    const productDescriptionMaxLength = 90;

    return (
        <div className='my-3' style={{ textAlign: 'left' }}>
            <ToastContainer />
            <Card className="p-4" style={{ width: '100%' }}>
                <CardTitle className="mb-4" tag="h4">
                    Edit Product
                </CardTitle>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <Label>Product Name <span style={{color :'red'}}>*</span></Label>
                                <Input
                                    type="text"
                                    placeholder={`Enter product name `}
                                    maxLength={productNameMaxLength}
                                    required
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    style={productName.length > productNameMaxLength ? { border: '1px solid red' } : {}}
                                />

                                <div style={{ textAlign: 'right' }}>
                                    <FormText color="muted">({productName.length}/{productNameMaxLength})</FormText>
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
                                <FormText color="muted">({productDescription.length}/{productDescriptionMaxLength})</FormText>
                            </div>
                        </Col>
                    </FormGroup>

                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Price<span style={{ color: 'red'}}>*</span>
                                </Label>
                                <Input
                                    placeholder="Enter price per unit."
                                    type="number"
                                    min="0"
                                    required
                                    value={unitPrice}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*\.?\d*$/.test(value)) { // Only allow digits and an optional decimal point
                                            if (value === "" || Number(value) >= 0) { // Allow empty or non-negative values
                                                setUnitPrice(value);
                                            }
                                        }
                                    }}
                                />
                            </FormGroup>

                        </Col>
                        
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Quantity<span style={{ color: 'red'}}>*</span>
                                </Label>
                                <Input
                                    type="number"
                                    placeholder="Enter stock quantity"
                                    min="1"
                                    required
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) { // Only allow digits
                                            if (value === "" || Number(value) >= 0) { // Allow empty or non-negative values
                                                setQuantity(value);
                                            }
                                        }
                                    }}
                                />
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>
                                    Rating<span style={{ color: 'red'}}>*</span>
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
                                    required
                                />
                            </FormGroup>

                        </Col>
                    </Row>
                  

                    <FormGroup>
                        <Label>Product Image<span style={{color :'red'}}>*</span></Label>
                        {imageUrl && (
                            <div>
                                <img src={imageUrl} alt="Product" style={{ maxWidth: '100px', marginBottom: '10px' }} />
                                <br />
                                <FormText color="muted">{imageUrl}</FormText>
                            </div>
                             
                        )}
                        <Input type="file" accept="image/*" onChange={handleImageChange} />
                    </FormGroup>

                    <FormGroup className="my-3">
                        <Label className="d-flex justify-content-between align-items-center">
                            <span>Product Specification<span style={{ color: 'red'}}>*</span></span>
                            <Button
                                style={{ fontSize: '25px', marginRight: '20px', fontWeight: 'bold' }}
                                type="button"
                                color="link"
                                outline
                                onClick={addSpecificationField}
                                className="ml-auto"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                       </Label>
                        {productSpecification.map((spec, index) => (
                            <Row className="py-3" key={index}>
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
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button type="submit" color="success" className="mr-2">
                            Update
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AdminEditProduct;
