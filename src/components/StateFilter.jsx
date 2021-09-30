import React from "react";
import { useDispatch } from "react-redux";
import { getShowingUsersAC } from "../store/store";

const StateFilter = ({ users }) => {
  const dispatch = useDispatch();

  const states = users.map((user) => {
    return user.adress.state;
  });

  const uniqStates = [...new Set(states)];

  const handleClick = (e) => {
    let filteredUsers = users.filter((u) => u.adress.state === e.target.value);

    dispatch(getShowingUsersAC(filteredUsers));

    const allSvg = document.querySelectorAll("svg");
    allSvg.forEach((svg) => {
      svg.classList.add("triangle__hidden");
    });
  };

  return (
    <select onChange={handleClick} className="select">
      {uniqStates &&
        uniqStates.map((state) => (
          <option key={Math.random() * 9999}>{state}</option>
        ))}
    </select>
  );
};

export default StateFilter;
