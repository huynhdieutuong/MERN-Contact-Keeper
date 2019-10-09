import React, { Fragment, useContext } from "react";
import ContactContext from "../../contexts/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <Fragment>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </Fragment>
  );
};

export default Contacts;
