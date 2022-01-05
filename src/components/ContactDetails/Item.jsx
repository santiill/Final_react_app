import React, { useState } from "react";
import Header from "../Header/Header";
import { Formm } from "./Form";
import { FaHeart } from "react-icons/fa";
import "./Form.css";
import img from "./image.png";

const Item = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <Header />
      <div className="item_container">
        <div className="image_heart">
          <img src={img} alt="wrong" />
          <FaHeart
            onClick={() => handleToggle()}
            className={toggle ? "whiteHeart" : "redHeart"}
          />
        </div>
        <Formm />
      </div>
    </>
  );
};

export default Item;
