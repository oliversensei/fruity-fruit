import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
    age: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.number) {
      newErrors.number = 'Number is required.';
    } else if (!/^\d{11}$/.test(formData.number)) {
      newErrors.number = 'Number must be 11 digits.';
    }
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.age) newErrors.age = 'Age group is required.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      setSuccessMessage('Form submitted successfully!');
      
      setFormData({
        name: '',
        number: '',
        location: '',
        age: '',
        message: ''
      });
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  return (
    <div className="contact-container" id='contact'>
      <h2>Contact Us</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input
              type="number"
              id="number"
              placeholder="Enter your contact number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              id="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select your location</option>
              <option value="St.Peter 1">St. Peter 1</option>
              <option value="St. Peter 2">St. Peter 2</option>
              <option value="San Isidro Labrador 1">San Isidro Labrador 1</option>
              <option value="San Isidro Labrador 2">San Isidro Labrador 2</option>
              <option value="San Juan">San Juan</option>
              <option value="South Garden">South Garden</option>
              <option value="St. Lucia">St. Lucia</option>
              <option value="San Miguel 1">San Miguel 1</option>
              <option value="San Miguel 2">San Miguel 2</option>
              <option value="San Manuel 1">San Manuel 1</option>
              <option value="San Manuel 2">San Manuel 2</option>
            </select>
            {errors.location && <span className="error">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <select
              id="age"
              value={formData.age}
              onChange={handleChange}
            >
              <option value="">Select your age group</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46+">46+</option>
            </select>
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
