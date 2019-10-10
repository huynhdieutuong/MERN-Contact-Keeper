import React, { useContext, useRef, useEffect } from "react";

import ContactContext from "../../contexts/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
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
        ref={text}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactFilter;
