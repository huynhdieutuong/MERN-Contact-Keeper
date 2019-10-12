import React, { useContext, useEffect } from "react";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

import AuthContext from "../../contexts/auth/authContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
