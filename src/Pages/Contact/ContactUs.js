import React, { useState, useEffect } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the user's input to your server or API
    // Set the success message if the submission was successful
    setSuccessMessage('Thank you for contacting us!');
  }

  useEffect(() => {
    if (successMessage !== '') {
      // Display the success message to the user
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  }, [successMessage]);

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {successMessage !== '' ? (
        <p>{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;
