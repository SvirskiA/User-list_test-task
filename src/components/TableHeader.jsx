import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getShowingUsersAC } from "../store/store";

const Svg = () => {
  return (
    <svg height="20" width="20" className="triangle__hidden">
      <polygon points="10,0 0,10 20,10" className="triangle" />
    </svg>
  );
};

let sortCoeff = 1;

const TableHeader = ({ users }) => {
  const [lastSort, setLastSort] = useState("");

  const dispatch = useDispatch();

  const sortUsers = (e) => {
    const textNode = (
      e.target.textContent ||
      e.target.parentNode.textContent ||
      e.target.parentNode.parentNode.textContent
    ).toLowerCase();

    let param;
    if (textNode.split(" ").length > 1) {
      param =
        textNode.split(" ")[0] +
        textNode.split(" ")[1][0].toUpperCase() +
        textNode.split(" ")[1].slice(1);
    } else if (textNode === "state") {
      param = "state";
    } else {
      param = textNode;
    }

    param === lastSort ? (sortCoeff *= -1) : (sortCoeff = 1);

    const allSvg = document.querySelectorAll("svg");
    allSvg.forEach((svg) => {
      svg.classList.add("triangle__hidden");
    });

    let svg;
    if (e.target.nodeName === "svg") {
      svg = e.target;
    } else if (e.target.parentNode.nodeName === "svg") {
      svg = e.target.parentNode;
    } else if (e.target.lastChild.nodeName === "svg") {
      svg = e.target.lastChild;
    }

    svg.classList.remove("triangle__hidden");
    sortCoeff === 1
      ? svg.classList.add("triangle__rotated")
      : svg.classList.remove("triangle__rotated");

    users.sort((a, b) => {
      if (param === "state") {
        if (a.adress[param] > b.adress[param]) return sortCoeff;
        if (a.adress[param] < b.adress[param]) return -sortCoeff;
      } else {
        if (a[param] > b[param]) return sortCoeff;
        if (a[param] < b[param]) return -sortCoeff;
      }
    });
    setLastSort(param);

    dispatch(getShowingUsersAC(users));
  };

  return (
    <div className="user-row heading">
      <div className="user_item user_item_head user_item_s" onClick={sortUsers}>
        id
        <Svg />
      </div>
      <div className="user_item user_item_head user_item_m" onClick={sortUsers}>
        First name
        <Svg />
      </div>
      <div className="user_item user_item_head user_item_m" onClick={sortUsers}>
        Last name
        <Svg />
      </div>
      <div
        className="user_item user_item_head user_item_xl"
        onClick={sortUsers}
      >
        Email
        <Svg />
      </div>
      <div className="user_item user_item_head user_item_l" onClick={sortUsers}>
        Phone
        <Svg />
      </div>
      <div className="user_item user_item_head user_item_s" onClick={sortUsers}>
        State
        <Svg />
      </div>
    </div>
  );
};

export default TableHeader;
