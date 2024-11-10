import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const [showReceipt, setShowReceipt] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    street: '',
    zipCode: '',
    country: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {

    const isFormValid = Object.values(userDetails).every((field) => field.trim() !== '');
  
    if (!isFormValid) {
      setErrorMessage('All fields are required');
      
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
  
      return; 
    }
  
    setShowReceipt(true);
  };
  

  const generateRefNo = () => {
    const part1 = Math.floor(1000 + Math.random() * 9000);   
    const part2 = Math.floor(100 + Math.random() * 900);     
    const part3 = Math.floor(100000 + Math.random() * 900000); 

    return `${part1} ${part2} ${part3}`;
  };
  
  const currentDate = new Date().toLocaleString();

  const subtotal = getTotalCartAmount();
  const isSubtotalZero = subtotal === 0;
  const deliveryFee = isSubtotalZero ? 0 : 2;  // Set delivery fee to 0 if subtotal is 0
  const total = subtotal + deliveryFee;

  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required/>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required/>
          </div>
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required/>
          <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required/>
          <div className="multi-fields">
            <input type="text" name="city" placeholder="City" onChange={handleChange} required/>
            <input type="text" name="street" placeholder="Street" onChange={handleChange} required/>
          </div>
          <div className="multi-fields">
            <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} required/>
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required/>
          </div>
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required/>
          {/* Validation error message */}
          {errorMessage && (
              <p className='fields-error' >
                {errorMessage}
              </p>
            )}
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₱{subtotal}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₱{deliveryFee}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₱{total.toFixed(2)}</b>
              </div>
            </div>

            {/* Button disabled if subtotal is 0 */}
            <button 
              type="button" 
              onClick={handlePlaceOrder} 
              disabled={isSubtotalZero}
            >
              PROCEED TO PAYMENT
            </button>

            {/* Error message if subtotal is 0 */}
            {isSubtotalZero && (
              <p style={{ color: 'red', fontSize: '14px' }} >
                You cannot proceed to payment with an empty cart.
              </p>
            )}

          </div>
        </div>
      </form>

      {showReceipt && (
        <div className="receipt-modal">
          <div className="receipt-content">
            <h2>GCash Receipt <br /> <span>Sent via GCash</span></h2>
            <p><b>Send to:</b> DI...E A</p>
            <p className='nambah'>+63 912 2469599</p>
            <p><b>Ref. No:</b> {generateRefNo()}</p>
            <p><b>Date & Time:</b> {currentDate}</p>
          
            <hr className='receipt--hr' />

            <div className="receipt-details-container">
              {/* Order Details Section */}
              <div className="receipt-details-left">
                <h3>Order Details</h3>
                <p><b>Full Name:</b> {userDetails.firstName} {userDetails.lastName}</p>
                <p><b>Email:</b> {userDetails.email}</p>
                <p><b>Address:</b> {userDetails.street}, {userDetails.city}, {userDetails.zipCode}, {userDetails.country}</p>
                <p><b>Phone:</b> {userDetails.phone}</p>
              </div>

              {/* Items Ordered Section */}
              <div className="receipt-details-right">
                <h3>Items Ordered</h3>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {food_list.map((item) => (
                      cartItems[item._id] > 0 && (
                        <tr key={item._id}>
                          <td>
                            <img src={item.image} alt={item.name} className="item-image" />
                          </td>
                          <td>{item.name}</td>
                          <td>{cartItems[item._id]}</td>
                          <td>₱{(item.price * cartItems[item._id]).toFixed(2)}</td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
                <hr />
                <p><b>Amount:</b> {total.toFixed(2)}</p>
                <hr />
                <p className='total-amount'><b>Total Amount Sent</b>₱ {total.toFixed(2)}</p>
              </div>
            </div>
            <div className='text-facts'>
              <FontAwesomeIcon icon={faLeaf} /> <span>131g</span> (gCO2e) <br />
              <p>By going digital, you reduce your carbon footprint from transportation, paper, and plastic.</p>
          </div>


            <button onClick={() => setShowReceipt(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
