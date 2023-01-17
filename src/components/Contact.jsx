import React from "react";
import './styles/Contact.css';



function Contact() {
  return (
    <div className="form_container">
      {/* <div className="wrapper"> */}
        <form className="form__contact" action="">
          <div className="fieldset">
            <p className="paragraph">Hey, Welcome!</p>
            <p className="paragraph">
              My name is
              <input
                className="form__field field--name"
                placeholder="your name"
              ></input>
              and I'm writting tou you since I'm interested in
              <input
                className="form__field field--message"
                placeholder="your message"
                tabindex="2"
                contenteditable
              ></input>
              .
            </p>
            <p className="paragraph">
              This is my
              <input
                className="form__field field--email"
                placeholder="email address"
              ></input>
              .
            </p>
            <p className="paragraph">Hope to get in touch soon. Cheers!</p>
            <button
              type="submit"
              className="button button--xlarge"
            >
              Send message &#187;
            </button>
          </div>
        </form>
      {/* </div> */}
    </div>
  );
}

export default Contact;
