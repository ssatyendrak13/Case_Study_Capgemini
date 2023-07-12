import React, { useEffect } from 'react'
import {  Col, Row } from 'react-bootstrap'
import ProfileMenu from './ProfileMenu'
import './Styles/profileStyle.css'
import {Outlet, useNavigate } from 'react-router-dom';
function Profile() {
  useEffect(() => {
    document.title = 'Profile';

  })




  const navigate = useNavigate();

  useEffect(() => {
    // localStorage.removeItem('USER');
    // localStorage.setItem('ADMIN', JSON.stringify('user'));
    const user = JSON.parse(localStorage.getItem("USER"));
    // const adminx = JSON.parse(localStorage.getItem('ADMIN'));
    console.log(user)
    if (user === null) {
      navigate('/login')
      console.log(user)


    } else {
      
    }
  }, []);
  return (

    
      <div>
          

          <Row className='profile-container'>
              <Col md={3}>
                  
                 <ProfileMenu />
              </Col>
              <Col md={7} >
                  <Outlet />
              </Col>

          </Row>
              
    </div>
  )
}

export default Profile
