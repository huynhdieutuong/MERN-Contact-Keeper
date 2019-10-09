import React, { Fragment, useContext } from "react";

import ContactContext from "../../contexts/contact/contactContext";

import ContactItem from "./ContactItem";
import ContactFilter from "./ContactFilter";

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  let datas;
  if (filtered !== null) {
    datas = filtered;
  } else {
    datas = contacts;
  }

  return (
    <Fragment>
      <ContactFilter />
      {datas.length > 0 ? (
        datas.map(contact => <ContactItem key={contact.id} contact={contact} />)
      ) : (
        <h4>Not Found Contacts!</h4>
      )}
    </Fragment>
  );
};

export default Contacts;
