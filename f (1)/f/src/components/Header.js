


import React, { useEffect, useState } from 'react';
import './Styles/headerStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faUser, faCartShopping, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, } from 'react-router-dom';
import { Button, CardBody } from 'reactstrap';

function Header() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('All'); // Track the selected option in the down-div
    const [selectedUpOption, setSelectedUpOption] = useState('Category');
    const [isLogin, SetIslogin] = useState(false);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("USER"));
        if (user) {
            SetIslogin(true)
        } else {
            SetIslogin(false)

        }
     })
    const handleDownDivOptionClick = (option) => {
        setSelectedUpOption('Category');
        setSelectedOption(option); // Set the selected option

        // Redirect to the corresponding route based on the selected option
        if (option === 'All') {
            navigate('/categories/All');
        } else {
            navigate(`/categories/${option}`);
        }
    };

    const handleUpDivOptionClick = (option) => {
        // Handle click on up-div options
        setSelectedUpOption(option); // Set the selected option

        if (option === 'Category') {
            navigate(`/categories/All`);
        } else {
            navigate(`/categories/${option}`);
        }
    };


    const handleProfile = () => {
        // Perform your conditional check
        const shouldRedirect = true; // Replace with your actual conditional check

        if (shouldRedirect) {
            // Redirect to a specific route
            navigate('/profile');
        } else {
            // Redirect to another route
            navigate('/login');
        }
    };



    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Check if scroll position is greater than a threshold value
            if (scrollPosition > 10) {
                // Set the scrolled state to true
                console.log('setting scrolled')
                setScrolled(true);
            } else {
                // Set the scrolled state to false
                setScrolled(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    // const handleDdown-div

    return (
        <div>
            {scrolled ? (
                <>
                    <div style={{ height: 165, }} className="give-hight-container">
                        <header>
                            <nav>
                                <div className="left">
                                    <div className="up-div my-2" style={{color: 'black'}}>



                                        <p className='mx-3' onClick={() => handleUpDivOptionClick('Category')} >
                                            <span style={selectedUpOption === 'Category' ? { borderBottom: '2px solid red' } : {}}> CATEGORIES </span>
                                        </p>
                                        <p className='mx-3' onClick={() => handleUpDivOptionClick('Style-Hub')}>
                                            <span style={selectedUpOption === 'Style-Hub' ? { borderBottom: '2px solid red' } : {}}> STYLE HUB</span>
                                        </p>



                                    </div>
                                </div>
                                <div className="middle" >
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <h1 style={{ color: 'black', fontWeight: 600 }}>
                                            Shopping Stop
                                        </h1>
                                    </Link>

                                </div>
                                <div className="right">
                                    {/* <div className="search-div">
                                        <input type="text" placeholder="Search Product & Brand" />
                                        <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                                    </div> */}

                                    {/* <Button >
                                        Login/Signup
                                    </Button> */}
                                    {!isLogin && (
                                        <Button className='mx-3' size='sm' color='dark' onClick={() => navigate('/login')}>
                                            Login/Signup
                                        </Button>

                                    )}
                                    <Link to="/cart" className="cart-link">
                                        <div id="nav-icon" className="cart p-1 mx-2" style={{ color: 'black' }}>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </div>
                                    </Link>
                                    <div onClick={handleProfile} id="nav-icon" className="profile p-1 mx-2">
                                        <i>
                                            <FontAwesomeIcon icon={faUser} />
                                        </i>
                                    </div>
                                </div>
                            </nav>
                            
                        </header>
                    </div>
                </>
            ) : (
                <>
                    <div style={{ height: 165, }} className="give-hight-container">
                        <header>
                            <nav>
                                <div className="left">
                                    <p>Help & Support</p>
                                    <p>All Stores</p>
                                </div>
                                <div className="middle">
                                        <Link to="/" style={{ textDecoration: 'none' }}>
                                            <h2 style={{ color:'rgb(255, 158, 0)', fontWeight: 600 }}>
                                                Shopping Stop
                                            </h2>
                                        </Link>
                                </div>
                                <div className="right">
                                    {/* <div className="search-div">
                                        <input type="text" placeholder="Search Product & Brand" />
                                        <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                                    </div> */}
                                        {!isLogin && (
                                            <Button className='mx-3' size='sm' color='dark' onClick={() => navigate('/login')}>
                                                Login/Signup
                                            </Button>

                                        )}
                                    <Link to="/cart" className="cart-link">
                                            <div id="nav-icon" className="cart p-1 mx-2" style={{ color: 'black' }}>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </div>
                                    </Link>
                                        <div onClick={handleProfile} id="nav-icon" className="profile p-1 mx-2">
                                        <i>
                                            <FontAwesomeIcon icon={faUser} />
                                        </i>
                                    </div>
                                </div>
                            </nav>
                            <div className="nav">
                                    <div className="up-div">
                                        
                                   
                                        <p className='mx-5' onClick={() => handleUpDivOptionClick('Category')} >
                                            <span style={selectedUpOption === 'Category' ? { borderBottom: '2px solid red' } : {}}> CATEGORIES </span>
                                        </p>
                                        <p className='mx-2' onClick={() => handleUpDivOptionClick('Style-Hub')}>
                                            <span style={selectedUpOption === 'Style-Hub' ? { borderBottom: '2px solid red' } : {}}> STYLE HUB</span>
                                        </p>


                                        
                                </div>
                                    <div className="down-div">
                                        

                                        <p
                                            
                                            className='mx-3'
                                            onClick={() => handleDownDivOptionClick('All')}
                                            style={selectedOption === 'All' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            All
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Watches')}
                                            style={selectedOption === 'Watches' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            WATCHES
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Mobiles')}
                                            style={selectedOption === 'Mobiles' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            MOBILES
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Laptop')}
                                            style={selectedOption === 'Laptop' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            LAPTOP
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Footwear')}
                                            style={selectedOption === 'Footwear' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            FOOTWEAR
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Clothing')}
                                            style={selectedOption === 'Clothing' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            CLOTHING
                                        </p>
                                        <p
                                        className='mx-3'
                                            onClick={() => handleDownDivOptionClick('Bags')}
                                            style={selectedOption === 'Bags' ? { borderBottom: '2px solid black' } : {}}
                                        >
                                            BAGS
                                        </p>
                                </div>
                            </div>
                        </header>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;
