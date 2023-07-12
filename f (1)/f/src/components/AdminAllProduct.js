import React, { useEffect, useState } from 'react';
import {
    Table,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Card,
    CardTitle,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AdminAllProduct() {
    const [products, setProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState('All');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [productId, setProductId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'All Products';
        fetchProducts();
    }, []);

    const handleRemoveProduct = async (productId) => {
        try {
            await axios.delete(`${base_URL}/products/${productId}`);
            toast.success('Removed!', {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER,
            });
            fetchProducts(); // Fetch updated list of products after removal
            setShowModal(false); // Close the modal after removing the product
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    const handleUpdateProduct = async (productId) => {
        navigate(`/admin/updateproduct/${productId}`);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${base_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filterProducts = (category) => {
        setFilteredCategory(category);
        setSearchQuery(''); // Clear search query when changing categories
    };

    const filteredProducts = filteredCategory === 'All'
        ? products.filter((product) =>
            product.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
        : products.filter(
            (product) =>
                product.category === filteredCategory &&
                product.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
        );

    return (
        <Card className="my-3" style={{ width: '100%', height: '90vh', textAlign: 'left' }}>
            <CardTitle
                style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}
                className=" m-4"
                tag="h4"
            >
                In Stock Products
                <div style={{ display: 'flex', alignContent: 'center' }}>
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
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search by name"
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
                            <div style={{ width: 20, height: 20 }}>
                                {searchQuery && <FontAwesomeIcon style={{ padding: 4 }} onClick={() => setSearchQuery('')} icon={faXmark} />}
                            </div>
                        </i>
                    </div>
                    <div style={{ width: 120 }}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ float: 'right', marginBottom: '10px' }}>
                            <DropdownToggle caret color="warning">
                                {filteredCategory}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => filterProducts('All')}>All</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Watches')}>Watches</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Mobiles')}>Mobile</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Laptop')}>Laptop</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Footwear')}>Footwear</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Clothing')}>Clothes</DropdownItem>
                                <DropdownItem onClick={() => filterProducts('Bags')}>Bags</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </CardTitle>

            <CardBody className="p-0">
                <Table hover size="sm">
                    <thead style={{ backgroundColor: '#2c6c4b', color: 'white', fontSize: '18px' }}>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th style={{ textAlign: 'center' }}>Units</th>
                            <th style={{ textAlign: 'center' }}>Price $</th>
                            <th colSpan="2" style={{ textAlign: 'left' }}></th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'white', fontSize: '16px' }}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <tr key={product.productId}>
                                    <td style={{ textAlign: 'left', width: '6%' }}>
                                        <Button style={{ padding: 0 }} onClick={() => handleUpdateProduct(product.productId)} color="link">
                                            #{product.productId}
                                        </Button>
                                    </td>
                                    <td>
                                        {product.image && product.image.length > 0 ? (
                                            <img src={product.image[0]} style={{ width: '50px', height: '50px' }} alt="Product" />
                                        ) : (
                                            'No Image'
                                        )}
                                    </td>
                                    <td>{product.category ? product.category.toUpperCase() : ''}</td>
                                    <td>{product.productName.substring(0, Math.min(product.productName.length, 25)) + '..'}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <b>{product.stockQuantity}</b>
                                    </td>
                                    <td style={{ textAlign: 'center', color: 'orange' }}>
                                        <b>{product.price}</b> <b style={{ color: 'grey' }}>$</b>
                                    </td>
                                    <td style={{ textAlign: 'right', width: '1%' }}>
                                        <Button
                                            style={{ width: '75px', marginRight: '10px', padding: '5px' }}
                                            color="success"
                                            onClick={() => handleUpdateProduct(product.productId)}
                                        >
                                            Update
                                        </Button>
                                    </td>
                                    <td style={{ textAlign: 'right', width: '1%' }}>
                                        <Button
                                            style={{ width: '75px', padding: '5px' }}
                                            color="danger"
                                            onClick={() => {
                                                setShowModal(true);
                                                setProductId(product.productId);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" style={{ textAlign: 'center' }}>
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </CardBody>

            <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
                <ModalHeader toggle={() => setShowModal(!showModal)}>Delete Product</ModalHeader>
                <ModalBody>
                    Are you sure you want to remove this product?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => handleRemoveProduct(productId)}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={() => setShowModal(!showModal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            <ToastContainer />
        </Card>
    );
}

export default AdminAllProduct;
