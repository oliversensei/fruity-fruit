import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const handleAddToCart = () => {
    addToCart(id);
    showToast('Added successfully', 'success');
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    showToast('Removed successfully', 'remove');
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(''), 3000); 
  };

  const getToastStyles = () => ({
    ...toastBaseStyles,
    backgroundColor: toastType === 'success' ? 'green' : 'red',
  });

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="food-item" />
        {!cartItems[id] ? (
          <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='add' />
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="remove" />
            <p>{cartItems[id]}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="add" />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-stars" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>₱ {price}</p>
      </div>

      {toastMessage && (
        <div style={getToastStyles()} className="toast">
          <p>{toastMessage}</p>
        </div>
      )}
    </div>
  );
};

const toastBaseStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  opacity: 0.9,
  zIndex: 1000,
};

export default FoodItem;
