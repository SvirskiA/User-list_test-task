import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
  const user = useSelector((state) => state.chekedUser);

  return (
    <div className="info-wrapper">
      <p>
        <b>Profile info:</b>
      </p>
      <p>
        Selected profile: {user.firstName} {user.lastName}
      </p>
      <p>Description: {user.description}</p>
      <p>Adress: {user.adress.streetAddress}</p>
      <p>City: {user.adress.city}</p>
      <p>State: {user.adress.state}</p>
      <p>Index: {user.adress.zip}</p>
    </div>
  );
};

export default Info;
