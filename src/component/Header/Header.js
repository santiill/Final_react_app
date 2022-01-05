import React from "react";
import "./Header.css";
import phoneIcon from "./phone.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };
  return (
    <header>
      <img src={phoneIcon} alt="wrong" className="phoneIcon" />
      <h1 className="header" onClick={nav}>
        MyContacts
      </h1>
    </header>
  );
};

export default Header;