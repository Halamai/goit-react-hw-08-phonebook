import React from "react";
// import s from "./Filter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/actions";
import { contactsFilterSelector } from "../../redux/contacts/contacts-selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsFilterSelector);
  return (
    <label className="">
      Find contacs by name:
      <input
        placeholder="Enter name"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
