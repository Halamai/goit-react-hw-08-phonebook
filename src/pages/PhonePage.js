import React from "react";
import ContactForm from "../Components/contactForm/ContactForm";
import ContactList from "../Components/contactList/ContactList";
import Filter from "../Components/filter/Filter";
// import App from "../Components/App";
const PhonePage = () => {
  // return <App />;
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default PhonePage;
