import React from 'react';

function Contact(props) {
  return (
    <p>
      <img src={`./assets/icons/${props.iconName}.png`} alt={props.iconName} />
      <p className="contact-text">{props.contactText}</p></p>
  );
}

export default Contact;
