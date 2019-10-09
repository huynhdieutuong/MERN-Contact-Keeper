import React, { useState, useContext } from "react";

import ContactContext from "../../contexts/contact/contactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 classNam='text-primary'>Add Contact</h2>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={onChange}
          value={name}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={onChange}
          value={email}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone'
          onChange={onChange}
          value={phone}
        />
        <h5>Contact Type</h5>
        <input
          type='radio'
          name='type'
          checked={type === "personal"}
          value='personal'
          onChange={onChange}
        />{" "}
        Personal{" "}
        <input
          type='radio'
          name='type'
          checked={type === "professional"}
          value='professional'
          onChange={onChange}
        />{" "}
        Professional
        <div>
          <input
            type='submit'
            value='Add Contact'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
