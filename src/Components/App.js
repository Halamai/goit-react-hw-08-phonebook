import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContactsOperation } from "../redux/contacts/contactsOperations";
import Header from "./header/Header.js";
import Main from "./main/Main.js";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
export default App;
