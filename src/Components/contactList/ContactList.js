import React from "react";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeContactOperation } from "../../redux/contacts/contactsOperations";
import {
  contactsErrorSelector,
  contactsIsLoadingSelector,
  getWisibileContacts,
} from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const error = useSelector(contactsErrorSelector);
  const isLoading = useSelector(contactsIsLoadingSelector);
  const contactsList = useSelector(getWisibileContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.menu}>
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}

      {contactsList &&
        contactsList.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={s.btn}
              type="button"
              id={contact.id}
              onClick={() => dispatch(removeContactOperation(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
