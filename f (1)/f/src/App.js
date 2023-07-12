import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import ProfileHome from './components/ProfileHome';
import ProfileAdminAddProduct from './components/ProfileAdminAddProduct';
import ProfileAdminAllProduct from './components/ProfileAdminAllProduct';
import UpdateProductDetail from './components/UpdateProductDetail';
import WishList from './components/WishList';
import CartComponent from './components/CartComponent';
import CheckOut from './components/CheckOut';
import Address from './components/Address';
import OrderHistory from './components/OrderHistory';
import OrderInvoice from './components/OrderInvoice';
import AdminAddProduct from './components/AdminAddProduct';
import AdminUpdateProduct from './components/AdminUpdateProduct';
import AdminAllProduct from './components/AdminAllProduct';
import AdminDesk from './components/AdminDesk';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import AdminAllUser from './components/AdminAllUser';
import ProductDetails from './components/ProductDetails ';
import ProfileWallet from './components/ProfileWallet';
import AdminOrderTracker from './components/AdminOrderTracker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useEffect(() => {
   
  }, []);
  const UserContext = React.createContext();
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

function DefaultLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileHome />} />
          <Route path="address" element={<Address />} />
          <Route path="wallet" element={<ProfileWallet />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="addproduct" element={<ProfileAdminAddProduct />} />
          <Route path="updateproduct" element={<UpdateProductDetail />} />
          <Route path="allproduct" element={<ProfileAdminAllProduct />} />
        </Route>



        <Route path="/cart" element={<CartComponent />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/order/:orderId" element={<OrderInvoice />} />
      </Routes>
      <Footer />
    </>
  );
}


function AdminLayout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // localStorage.removeItem('ADMIN');
    // localStorage.setItem('ADMIN', JSON.stringify('user'));
    const admin = JSON.parse(localStorage.getItem("ADMIN"));
    // const adminx = JSON.parse(localStorage.getItem('ADMIN'));
    if (admin === null) {
      navigate('/login')
    } else {
    }
  }, []);


  return (




    <>
      

      <Row className='profile-container'>
        <Col md={3}>
          <AdminDesk />
        </Col>
        <Col md={7} >
          <Routes>
            <Route index element={<AdminAddProduct />} />
            <Route path="allproduct" element={<AdminAllProduct />} />
            <Route path="updateproduct/:productId" element={<AdminUpdateProduct />} />
            <Route path="allusers" element={<AdminAllUser />} />

            <Route path="orderhistory" element={<AdminOrderTracker />} />
            
          </Routes>
        </Col>

      </Row>
      
     
    </>
  );
}

export default App;
