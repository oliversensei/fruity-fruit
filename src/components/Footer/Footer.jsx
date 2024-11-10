import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h2>FRUITY FRUIT.</h2>
                <p>Fruity Fruit is a refreshing juice brand offering a variety of fruit flavors, crafted to provide a healthy, 
                    flavorful, and energizing experience. Whether you're looking for lemonade, watermelon, or cucumber, we have 
                    the perfect juice for every occasion.
                </p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkeIn" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>RECOGNITION</h2>
                <ul>
                    <li>Martillos</li>
                    <li>Aquino</li>
                    <li>Samson</li>
                    <li>Periodico</li>
                    <li>Montezon</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+09564-869-415</li>
                    <li>fruityfruit@gmail.com</li>
                    <li>fruity2024@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 @ FruityFruit -All Rights Reserved. 
        </p>
    </div>
  )
}

export default Footer