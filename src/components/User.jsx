import React from "react";
import { useDispatch } from "react-redux";

import { checkUserAC } from "../store/store";

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkUserAC(user));
  };

  return (
    <div className="user-row" onClick={handleClick}>
      <div className="user_item user_item_s">{user.id}</div>
      <div className="user_item user_item_m">{user.firstName}</div>
      <div className="user_item user_item_m">{user.lastName}</div>
      <div className="user_item user_item_xl">{user.email}</div>
      <div className="user_item user_item_l">{user.phone}</div>
      <div className="user_item user_item_s">{user.adress.state}</div>
    </div>
  );
};

export default User;
