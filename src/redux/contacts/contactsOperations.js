import axios from "axios";
import {
  addNewContact,
  getAllContacts,
  removeContact,
  setError,
  setLoader,
} from "./actions";

const addContactsOperation = (form) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/contacts.json`,
      form
    );

    dispatch(addNewContact({ ...form, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

const getAllContactsOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/contacts.json`
    );
    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getAllContacts(contacts));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
const removeContactOperation = (id) => async (dispatch) => {
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    dispatch(removeContact(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export {
  addContactsOperation,
  getAllContactsOperation,
  removeContactOperation,
};
