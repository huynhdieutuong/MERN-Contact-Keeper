import React, { useState, useContext, useEffect } from "react";

import ContactContext from "../../contexts/contact/contactContext";

const ContactForm = () => {
  const { addContact, current, clearCurrent, updateContact } = useContext(
    ContactContext
  );

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [clearCurrent, current]);

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className='text-primary'>
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
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
            value={current ? "Update Contact" : "Add Contact"}
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
      {current && (
        <button className='btn btn-light btn-block' onClick={clearCurrent}>
          Clear
        </button>
      )}
    </div>
  );
};

export default ContactForm;
