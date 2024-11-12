import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { sampleData } from './NavbarData'; 
import logo from '../../assets/frontend_assets/logo-hci2-removebg-preview.png'

const SearchModal = ({ showModal, setShowModal, searchQuery, setSearchQuery }) => {
    if (!showModal) return null;
  
    const filteredData = sampleData.filter(item =>
      item.title.toLowerCase() === searchQuery.toLowerCase() ||
      item.description.toLowerCase() === searchQuery.toLowerCase()
    );
  
    return (
      <div className="search-modal-overlay">
        <div className="search-modal">
          <div className="modal-header">
            <h3>Search</h3>
            <button onClick={() => setShowModal(false)} className="close-modal">X</button>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for fruits..."
            className="search-input"
          />
          
          {searchQuery && (
            <div className="search-results">
              {filteredData.length === 0 ? (
                <p style={{ color: 'red', textAlign: 'center' }}>No data found</p> 
              ) : (
                filteredData.map(item => (
                  <div key={item.id} className="search-result-item">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='https://fruity-fruit.vercel.app/'><img className='logo' src={logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#about' onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>About</a>
        <a href='#contact' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact</a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="navbar-search-icon"
          onClick={() => setShowModal(true)} 
        />
        <div className="navbar-search-icon">
          <Link to="cart"><img src={assets.basket_icon} alt="basket-icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

      <SearchModal
        showModal={showModal}
        setShowModal={setShowModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}

export default Navbar;
