import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactContext from "../../contexts/contact/contactContext";

import ContactItem from "./ContactItem";
import ContactFilter from "./ContactFilter";

import Spinner from "../layout/Spinner";

const Contacts = () => {
  const { getContacts, contacts, filtered, loading } = useContext(
    ContactContext
  );

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  let datas;
  if (filtered !== null) {
    datas = filtered;
  } else {
    datas = contacts;
  }

  return (
    <Fragment>
      <ContactFilter />
      {loading ? (
        <Spinner />
      ) : datas.length > 0 ? (
        <TransitionGroup>
          {datas.map(contact => (
            <CSSTransition key={contact._id} timeout={300} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <h4>Not Found Contacts!</h4>
      )}
    </Fragment>
  );
};

export default Contacts;
