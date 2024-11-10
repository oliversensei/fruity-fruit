import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  // State to store the countdown
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Target date for the countdown (November 25)
    const targetDate = new Date('November 25, 2024 00:00:00').getTime();

    // Function to update the countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // If countdown is over, display "Promo Started"
      if (distance < 0) {
        setCountdown('Promo Started!');
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Initial call to set countdown immediately
    updateCountdown();

    // Cleanup interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='cart'>
      {/* Promo Card with Countdown */}
      <div className='promo-card'>
        <h3>Promo Starting Soon!</h3>
        <p>Our special promo will start in:</p>
        <div className='promo-countdown'>
          <span>{countdown}</span>
        </div>
      </div>

      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="food item" />
                  <p>{item.name}</p>
                  <p>₱{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₱{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        {totalAmount === 0 && <p className='no-order-message'>NO ORDER</p>}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₱{totalAmount}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₱{totalAmount === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₱{totalAmount === 0 ? 0 : totalAmount + 2}</b>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')}
            disabled={totalAmount === 0}
          >
            PROCEED TO CHECKOUT
          </button>
          {totalAmount === 0 && <p className='checkout-warning'>Please add items to your cart before proceeding to checkout.</p>}
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo-code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
