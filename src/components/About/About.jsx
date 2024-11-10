import React from 'react';
import { FaRecycle, FaHeartbeat, FaHandHoldingHeart, FaAppleAlt, FaBullhorn, FaChartLine } from 'react-icons/fa'; 
import './About.css';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className='about-header'>
        <h1 className='about-title'>Waste Management</h1>
        <p className='about-subtitle'>Small Act, Big Impact - Recycle Bottles</p>
      </div>

      <div className='about-body'>
        <div className='about-card'>
          <FaRecycle className='about-icon' />
          <h2 className='about-card-title'>Let's take that small step together!</h2>
          <p className='about-card-text'>Recycle your bottles and be a part of the change. Small act, big impact!</p>
        </div>

        <div className='about-card'>
          <FaHeartbeat className='about-icon' />
          <h2 className='about-card-title'>Promotion</h2>
          <br />
          <p className='about-card-text'>
            Drink Healthy, Live Longer.<br />
            Buy 2 flavors for only P55
          </p>
        </div>

        <div className='about-card'>
          <FaHandHoldingHeart className='about-icon' />
          <h2 className='about-card-title'>Social Responsibility</h2>
          <br />
          <p className='about-card-text'>The profits from this project will support group members with their educational expenses.</p>
        </div>

        <div className='about-card'>
          <FaAppleAlt className='about-icon' /> 
          <h2 className='about-card-title'>Nutrition Facts</h2>
          <div className='nutrition-facts'>
              <p className='about-card-text'>
                <strong>(1) Serving Size</strong> 250ml,
                <strong>(2) Calories</strong> 5%,
                <strong>(3) Antioxidants</strong> 15%,
                <strong>(4) Hydration</strong> 60%,
                <strong>(5) Citric Acid</strong> 63%,
                <strong>(6) Carbs</strong> 5%,
              </p>
          </div>
        </div>

        <div className='about-card'>
          <FaBullhorn className='about-icon' /> 
          <h2 className='about-card-title'>Campaign Objectives</h2>
          <div className='campaign-objectives'>
            <ul>
              <p className='about-card-text'> Announcing a new seasonal juice blend and offering a pre-order discount on social media.</p>
            </ul>
          </div>
        </div>

        <div className='about-card'>
          <FaChartLine className='about-icon' /> 
          <h2 className='about-card-title'>Marketing Campaign</h2>
          <p className='about-card-text'>Our marketing efforts aim to educate and inspire consumers to make sustainable choices. Join the movement!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
