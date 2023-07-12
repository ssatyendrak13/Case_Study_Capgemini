// import React, { useState } from 'react';
// import { Card, Form, FormGroup, Label, Input, Col, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle } from 'reactstrap';

// function UpdateProductDetail({ productId }) {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [stockQuantity, setStockQuantity] = useState('');
//     const [file, setFile] = useState(null);

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
//             productId,
//             productName,
//             productType: selectedOption,
//             productDescription,
//             unitPrice,
//             stockQuantity,
//             file
//         };

//         // Update the product detail
//         // Use the productData object to update the product in the backend

//         // Reset the form fields
//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setStockQuantity('');
//         setFile(null);
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>

//                 <CardTitle className='mb-4' tag="h4">
//                     Update Details
//                 </CardTitle>


//                 <Form onSubmit={handleFormSubmit}>
//                     <Row>
//                         <Col md={9}>
//                             <FormGroup>
//                                 <Label>Product Name</Label>
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
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 1')}>Option 1</DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 2')}>Option 2</DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 3')}>Option 3</DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 4')}>Option 4</DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 5')}>Option 5</DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 6')}>Option 6</DropdownItem>
//                                     </DropdownMenu>
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
//                     <Row>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>Unit Price</Label>
//                                 <Input
//                                     type="text"
//                                     placeholder="Enter unit price"
//                                     value={unitPrice}
//                                     onChange={(e) => setUnitPrice(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>Stock Quantity</Label>
//                                 <Input
//                                     placeholder="Enter Stock Quantity"
//                                     type="number"
//                                     value={stockQuantity}
//                                     onChange={(e) => setStockQuantity(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup row className="my-3">
//                         <Label for="exampleFile" sm={2}>
//                             File
//                         </Label>
//                         <Col sm={12}>
//                             <Input id="exampleFile" name="file" type="file" onChange={(e) => setFile(e.target.files[0])} />
//                             <FormText>Select a photo for your product</FormText>
//                         </Col>
//                     </FormGroup>
//                     <Button type="submit">Update</Button>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default UpdateProductDetail;



import React, { useEffect, useState } from 'react';
import { Card, Form, FormGroup, Label, Input, Col, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle } from 'reactstrap';

function UpdateProductDetail({ productId }) {

    useEffect(() => {
        // alert('Please select')
        document.title = 'Update Product Details'
    }, [])

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [file, setFile] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Create an object with the form data
        const productData = {
            productId,
            productName,
            productType: selectedOption,
            productDescription,
            unitPrice,
            stockQuantity,
            file
        };

        // Update the product details


        console.log('Updating product details', productData)
        // Call an API or perform the necessary logic to update the product using the productData object

        // Reset the form fields
        setProductName('');
        setSelectedOption('');
        setProductDescription('');
        setUnitPrice('');
        setStockQuantity('');
        setFile(null);
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <Card className="p-4" style={{ width: '100%' }}>

                <CardTitle className='mb-4' tag="h4">
                    Update Product Details
                </CardTitle>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <Label>Product Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter product name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <Label>Product Type</Label>
                            <FormGroup color="primary">
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle color="warning" caret>
                                        {selectedOption || 'Select an option'}
                                    </DropdownToggle>
                                    <DropdownMenu style={{ width: '600px' }}>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 1')}>Option 1</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 2')}>Option 2</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 3')}>Option 3</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 4')}>Option 4</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 5')}>Option 5</DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 6')}>Option 6</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="my-3">
                        <Label>Product Description</Label>
                        <Col sm={12}>
                            <Input
                                placeholder="Enter description"
                                type="textarea"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Unit Price</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter unit price"
                                    value={unitPrice}
                                    onChange={(e) => setUnitPrice(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Stock Quantity</Label>
                                <Input
                                    placeholder="Enter Stock Quantity"
                                    type="number"
                                    value={stockQuantity}
                                    onChange={(e) => setStockQuantity(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup row className="my-3">
                        <Label for="exampleFile" sm={2}>
                            File
                        </Label>
                        <Col sm={12}>
                            <Input id="exampleFile" name="file" type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <FormText>Select a photo for your product</FormText>
                        </Col>
                    </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </Card>
        </div>
    );
}

export default UpdateProductDetail;
