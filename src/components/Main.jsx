import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAC, getShowingUsersAC } from "../store/store";

import User from "./User";
import Search from "./Search";
import Info from "./Info";
import StateFilter from "./StateFilter";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";

const URL =
  "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json";

const Main = () => {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const allUsers = useSelector((state) => state.allUsers);
  const showingUsers = useSelector((state) => state.showingUsers);
  const chekedUser = useSelector((state) => state.chekedUser);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    if (!dataIsLoaded) {
      fetch(URL)
        .then((response) => response.json())
        .then((users) => {
          dispatch(getAllUsersAC(users));
          dispatch(getShowingUsersAC(users));
          setDataIsLoaded(true);
        });
    }
  }, [state]);

  const paginatedUsers = [];
  if (showingUsers) {
    for (let i = 0; i < showingUsers.length / 20; i++) {
      paginatedUsers[i] = showingUsers.slice(i * 20, i * 20 + 20);
    }
  }

  return (
    <div className="wrapper">
      <div className="inputs-wrapper">
        <Search users={allUsers} />
        <StateFilter users={allUsers} />
      </div>
      <TableHeader users={showingUsers} />
      {paginatedUsers[page] &&
        paginatedUsers[page].map((user) => (
          <User key={user.phone} user={user} />
        ))}
      <Pagination users={paginatedUsers} />
      {chekedUser && <Info />}
    </div>
  );
};

export default Main;
