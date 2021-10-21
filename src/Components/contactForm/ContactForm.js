import { useState } from "react";
import s from "./ContactForm.module.css";
// import PropTypes from "prop-types";
// import axios from "axios";
import { useDispatch } from "react-redux";
// import { addNewContact } from "../../redux/contacts/actions";
import { useSelector } from "react-redux";
import { addContactsOperation } from "../../redux/contacts/contactsOperations";
import { setError } from "../../redux/contacts/actions";
import {
  contactsContactsgSelector,
  contactsErrorSelector,
} from "../../redux/contacts/contacts-selectors";
const initialState = { name: "", number: "" };

export default function ContactForm() {
  const error = useSelector(contactsErrorSelector);
  const contacts = useSelector(contactsContactsgSelector);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const onHandleChenge = (e) => {
    if (error) dispatch(setError(""));
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isContactExist = () =>
    contacts.some(
      (contact) => contact.name.toLowerCase() === form.name.toLowerCase()
    );

  const onHandleSubmit = (e) => {
    e.preventDefault();
    !isContactExist() && dispatch(addContactsOperation({ ...form }));
    // !isContactExist()
    //   ? dispatch(addNewContact({ ...form }))
    //   : alert(`Сontact ${form.name.toUpperCase()} already exists`);
    reset();
  };

  const reset = () => {
    setForm((prev) => ({ ...prev, name: "", number: "" }));
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name:
          <input
            placeholder="Enter name"
            className={s.nameinput}
            value={form.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onHandleChenge}
          />
        </label>

        <label>
          Number:
          <input
            placeholder="Enter number"
            className={s.nameinput}
            value={form.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onHandleChenge}
          />
        </label>
        <button className={s.btncon} type="submit" disabled={isContactExist()}>
          Add contact
        </button>
      </form>
      {isContactExist() && <span>Сontact already exists</span>}
    </>
  );
}

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };
