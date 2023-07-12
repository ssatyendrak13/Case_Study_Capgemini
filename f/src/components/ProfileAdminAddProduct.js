


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import base_URL from '../api/BootAPI';

function ProfileAdminAddProduct() {
    useEffect(() => {
        document.title = 'Add Products';
    }, []);

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

        const productData = {
            productName,
            productType: selectedOption,
            category: selectedOption,
            review: {},
            rating: {},
            image: [],
            price: unitPrice,
            description: productDescription,
            specification: {},
        };

        axios
            .post(`${base_URL}/products`, productData)
            .then((response) => {
                console.log('Update Response:', response.data);
                // Optionally, you can show a success message or perform additional actions after successful update

                axios.get(`${base_URL}/products`).then(
                    (response) => {
                        console.log('Update Response:', response.data);
                        // Optionally, you can show a success message or perform additional actions after successful update
                    },
                    (error) => {
                        console.log('Update Error:', error);
                    }
                );
            })
            .catch((error) => {
                console.log('Update Error:', error);
            });

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
                <CardTitle className="mb-4" tag="h4">
                    Add Product
                </CardTitle>
                <Form onSubmit={handleFormSubmit} action={true.toString()}>
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
                                        <DropdownItem onClick={() => handleOptionSelect('Option 1')}>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 2')}>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 3')}>
                                            Option 3
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 4')}>
                                            Option 4
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 5')}>
                                            Option 5
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Option 6')}>
                                            Option 6
                                        </DropdownItem>
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
                            <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <FormText>Select a photo for your product</FormText>
                        </Col>
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    );
}

export default ProfileAdminAddProduct;
