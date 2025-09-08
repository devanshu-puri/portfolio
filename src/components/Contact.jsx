// File: src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="section-title">
        // CONTACT_PROTOCOL
      </h2>
      <p className="text-lg text-primary/70 mt-2 mb-8 max-w-lg">
        Have a project in mind or just want to say hello? Send a transmission. I'll get back to you as soon as I decrypt the message.
      </p>

      <form className="w-full max-w-lg flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="[ YOUR_ALIAS ]" 
          className="form-input" 
        />
        <input 
          type="email" 
          placeholder="[ YOUR_EMAIL_ADDRESS ]" 
          className="form-input"
        />
        <textarea 
          placeholder="[ YOUR_MESSAGE ]" 
          rows="5"
          className="form-input"
        ></textarea>
        <button type="submit" className="glitch-button">
          SEND TRANSMISSION
        </button>
      </form>
    </section>
  );
};

export default Contact;