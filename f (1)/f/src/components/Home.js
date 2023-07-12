import React from 'react'
import SwapperJs from './SwapperJs'

import './Styles/homeStyle.css'
import { Outlet } from 'react-router-dom'
import CartComponent from './CartComponent'
import AllProductList from './AllProductList'
function Home() {

    

    const images = [
        'https://sslimages.shoppersstop.com/sys-master/root/h3b/h5d/29700005429278/Main-Banner-Strip-Web_4786hjdk.jpg',
        'https://sslimages.shoppersstop.com/sys-master/root/h9d/h96/29782566633502/SS-First-Strip-Creative-Web_strip_120423.jpg',
        
    ]

    return (
        <>
            

            <SwapperJs images={images} />




            {/* <div className="promisis">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h1b/hf7/29782554771486/Icons-2-App----000-new-home-page--2023-apri--msite--l-1111.jpg" />
            </div> */}

            <AllProductList />

        </>
    )
}

export default Home
