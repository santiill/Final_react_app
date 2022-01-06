import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./List.css";
import { useState } from "react";

const Contact = (item) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);
    const list = [];
    if (!toggle) {
      console.log(e);
      list.push(e);
      localStorage.setItem("list", JSON.stringify(list));
    }
    if (toggle) {
      list.shift(e);
      localStorage.setItem("list", JSON.stringify(list));
    }
  };

  return (
    <div className="contact_container">
      <img className="contact_img" alt="wrong" src={item.image} />
      <div className="cont_info_container">
        <div className="title_heart">
          <h1 className="contact_title">
            {item.firstName} {item.lastName}
          </h1>
          <FaHeart
            onClick={() => handleToggle(item)}
            className={toggle ? "red_heart" : "white_heart"}
          />
        </div>
        <Link to={`/item/${item.id}`}>
          <button className="contact_button">More</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
