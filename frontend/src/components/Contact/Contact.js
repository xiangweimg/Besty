import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
function ContactForm() {
  const [state, handleSubmit] = useForm("xaykgggp");
  if (state.succeeded) {
      return <p>Thanks for your interest!</p>;
  }
  return (
    <div class="form-container">
        <p>For all enquiries, feel free to contact through the following form.</p>
      <form onSubmit={handleSubmit} >
        <div className='form'>
            <label htmlFor="full-name">Full Name</label>
            <input
                id="full-name"
                type="text" 
                name="name"
                placeholder='First and last name'
                required=""
            />
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
        </div>
        <div className='form'>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                required=""
                placeholder="email@domain.tld"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
        <div className='form'>
            <label htmlFor="message">Message</label>
            <textarea
                rows="5" 
                id="message"
                name="message"
                required=""
                placeholder="Please leave your message."
            />
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

    </div>


  );
}

export default ContactForm;