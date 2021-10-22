import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContactsOperation } from "../redux/contacts/contactsOperations";
import Header from "./header/Header.js";
import Main from "./main/Main.js";

// import ContactForm from "./contactForm/ContactForm";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authorization.tokens);

  useEffect(() => {
    isAuth && dispatch(getAllContactsOperation());
  }, [dispatch, isAuth]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
export default App;
