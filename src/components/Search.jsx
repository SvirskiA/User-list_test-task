import React from "react";
import { useDispatch } from "react-redux";
import { getShowingUsersAC, searchInputAC } from "../store/store";

const Search = ({ users }) => {
  const dispatch = useDispatch();

  const handleFilterInputChange = ({ target: { value } }) => {
    dispatch(searchInputAC(value.toLowerCase()));

    let filteredUsers = users.filter(
      (u) =>
        u.firstName.toLowerCase().includes(value.toLowerCase()) ||
        u.lastName.toLowerCase().includes(value.toLowerCase())
    );

    dispatch(getShowingUsersAC(filteredUsers));

    const allSvg = document.querySelectorAll("svg");
    allSvg.forEach((svg) => {
      svg.classList.add("triangle__hidden");
    });
  };

  return (
    <div className="employee-wrapper">
      <input
        className="search-input"
        placeholder="Search by name"
        type="text"
        onChange={handleFilterInputChange}
      />
    </div>
  );
};

export default Search;
