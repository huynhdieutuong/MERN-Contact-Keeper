import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <TransitionGroup>
        {datas.length > 0 ? (
          datas.map(contact => (
            <CSSTransition key={contact.id} timeout={300} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        ) : (
          <h4>Not Found Contacts!</h4>
        )}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
