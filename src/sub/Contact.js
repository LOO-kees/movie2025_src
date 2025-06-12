import React from 'react';
import '../css/Contact.css';
import '../css/App.css';

function Contact(props) {
  return (
    <section className="contact_wrap">
      <div className="contents_style">
        <h2 className='sub_h2_title'>Contact Us</h2>

        <form className="contact-form">
          <p>
            <label htmlFor="name">Name :</label>
            <input id="name" type="text" />
          </p>
          <p>
            <label htmlFor="email">E-Mail :</label>
            <input id="email" type="email" />
          </p>
          <p>
            <label htmlFor="subject">Subject :</label>
            <textarea id="subject" rows="8"></textarea>
          </p>
          <p className="full-row">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
