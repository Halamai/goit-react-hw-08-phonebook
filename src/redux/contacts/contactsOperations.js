import axios from "axios";
import {
  addNewContact,
  getAllContacts,
  removeContact,
  setError,
  // setLoader,
  setLoaderOff,
  setLoaderOn,
} from "./actions";

const addContactsOperation = (form) => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(setLoaderOn());
  try {
    const response = await axios.post(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/${localId}/contacts.json?auth=${idToken}`,
      form
    );

    dispatch(addNewContact({ ...form, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoaderOff());
  }
};

const getAllContactsOperation = () => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(setLoaderOn());
  try {
    const response = await axios.get(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/${localId}/contacts.json?auth=${idToken}`
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
    dispatch(setLoaderOff());
  }
};
const removeContactOperation = (id) => async (dispatch, getState) => {
  const localId = getState().authorization.tokens.localId;
  const idToken = getState().authorization.tokens.idToken;
  dispatch(setLoaderOn());
  try {
    await axios.delete(
      `https://homework07-e8e46-default-rtdb.firebaseio.com/${localId}/contacts/${id}.json?auth=${idToken}`
    );

    dispatch(removeContact(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoaderOff());
  }
};

export {
  addContactsOperation,
  getAllContactsOperation,
  removeContactOperation,
};
