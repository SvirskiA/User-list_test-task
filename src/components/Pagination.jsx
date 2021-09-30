import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { showPageAC } from "../store/store";

const Pagination = ({ users }) => {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const dispatch = useDispatch();

  const btns = document.querySelectorAll(".btn");

  if (btns[0] && !dataIsLoaded) {
    btns[0].classList.add("btn-checked");
  }

  const handleClick = (e) => {
    let page = e.target.textContent;

    for (let btn of btns) {
      btn.classList.remove("btn-checked");
    }

    e.target.classList.add("btn-checked");
    dispatch(showPageAC(page - 1));
    setDataIsLoaded(true);
  };

  return (
    <div className="pagination-wrapper">
      {users &&
        users.map((arr, i) => (
          <button onClick={handleClick} className="btn" key={i}>
            {i + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
