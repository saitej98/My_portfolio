import React from 'react'
import style from "./right.module.css"
import emailjs from "emailjs-com" 
import { useRef } from 'react';

function Right() {

  const form = useRef();

  function sendEmail(e)
  {
    e.preventDefault();

    emailjs.sendForm('service_b7dlytq', 'template_i7cvnxs', form.current, '0_3On0mu-Xm1v9ZWn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
      <div className={style.rightbody}>
        <div className={style.wrapper}>
          <form ref={form} onSubmit={sendEmail}>
            <div>Name</div>
            <div>
              <input type="text"  name='name' placeholder='Name' />
            </div>
            {/* <div>Email</div>
            <div>
              <input type="email" name='email' placeholder='Email' />
            </div> */}
            <div>Subject</div>
            <div>
              <input type="text" name='subject'placeholder='Subject' />
            </div>
            <div>Message</div>
            <div>
              <textarea name="message" cols="40" rows="5" placeholder='Your Message'></textarea>
            </div>

            <button type='submit' className={style.button}>Send</button>
          </form>
        </div>
      </div>
    );
}

export default Right
