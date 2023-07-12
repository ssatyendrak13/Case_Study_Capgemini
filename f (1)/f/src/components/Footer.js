import React from 'react'
import './Styles/footerStyle.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
      <>
          <div className='footer-hight-x'>
              
          </div>
          <footer>
              <div className="f-container">
                  <div className="f-left">
                      <div className="logo-x">
                          <img src="https://firebasestorage.googleapis.com/v0/b/whatsappclone-d3f9a.appspot.com/o/spring%2FUntitled%20design%20(8).png?alt=media&token=191cb15a-b4b7-47d0-9e9c-3b9669a7b820" alt="" />
                          <h1>Shoping Stop</h1>
                      </div>

                      <p>An exciting place for the whole family to shop.</p>
                      <div className="social-icons">
                          <i><a href="#"></a></i>
                          <i><a href="#"></a></i>
                          <i><a href="#"></a></i>
                      </div>
                  </div>
                  <div className="f-right">
                      <label>Subscribe</label>
                      <div className="sub">
                          <input type="email" placeholder="Email address." />
                          <i><FontAwesomeIcon icon={faArrowRight} /></i>

                      </div>
                      <i>Get all updates on your mailbox</i>
                  </div>
              </div>

              <div className="coypright">
                  <p>&copy;2023 Shoping Stop. All right reserved </p>
              </div>

          </footer>
      </>
  )
}

export default Footer
