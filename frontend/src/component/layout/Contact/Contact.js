import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {

  let formRef = useRef();
  const [done, setDone] = useState(false)
  const [input, setInput] = useState()

  const handleSubmit = (e) => {
  
    
    e.preventDefault();
    emailjs
      .sendForm(
        "service_50pqokl",
        "template_phpfhp3",
        formRef.current,
        "user_gNluwOFPcAznkqTtTLZY8"
      )
      .then(
        (result) => {
          setDone(true);
          setInput("")
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="LoginSignUpContainer">
    <div className="LoginSignUpBox">
      <div>
        <div className="login_signUp_toggle">
          <p>Contact Us </p>
        </div>
      </div>
      <form className="loginForm" ref={formRef} onSubmit={handleSubmit}>
      <div className="loginPassword">
      <input
        type="text"
        placeholder="You name"
        required
        name="user_name" value={input}
      />
    </div>
    <div className="loginPassword">
          <input
            type="text"
            placeholder="Subject"
            required
            ame="user_subject" value={input}
          />
        </div>

        <div className="loginEmail">
          <MailOutlineIcon />
          <input
            type="email"
            placeholder="Email"
            required
            name="user_email" value={input}
          />
        </div>
        <div className="loginPassword">
          <textarea
          rows="4" cols="50"
            type="password"
            placeholder="Your message"
            required
            name="message" value={input}
          />
        </div>
        <input type="submit" value="Send" className="loginBtn" />

        {done &&<p className="sent">Message sent...</p>}
      </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
