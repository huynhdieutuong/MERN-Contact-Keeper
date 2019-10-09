import React, { useState, useContext } from "react";

import ContactContext from "../../contexts/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const [text, setState] = useState("");

  const onChange = e => {
    setState(e.target.value);
    if (e.target.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Filter Contacts...'
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactFilter;
