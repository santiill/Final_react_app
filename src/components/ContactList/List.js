import React from "react";
import Header from "../Header/Header";
import { FaSortAlphaDown, FaSortAlphaUpAlt, FaHeart } from "react-icons/fa";
import "./List.css";
import { useEffect } from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  fetchData,
  searchContact,
  sortByAlphabeticalAsc,
  sortByAlphabeticalDesc,
} from "../redux/contactActions";

const List = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fav, setFav] = useState(true);

  useEffect(() => {
    const loadedData = localStorage.getItem("LocalState");
    if (!loadedData) {
      dispatch(fetchData());
    }
  }, []);

  const handleShow = () => {
    setFav(!fav);
    console.log(fav);
    if (fav) {
      const favList = localStorage.getItem("list");
      if (!favList) {
        alert("U have no fav contacts");
      }
      console.log(favList);
    }
  };

  const handleCLickAsc = () => {
    dispatch(sortByAlphabeticalAsc());
  };

  const handleCLickDesc = () => {
    dispatch(sortByAlphabeticalDesc());
  };

  const handleSearch = (event) => {
    dispatch(searchContact(event));
    console.log(state.data);
  };

  const handleBlue = () => {
    dispatch(fetchData());
  };

  const favList = JSON.parse(localStorage.getItem("list"));
  let dataList = fav ? state.data : favList;

  return state.loading ? (
    <h1>Loading...</h1>
  ) : state.error ? (
    <h1>{state.error}</h1>
  ) : (
    <div>
      <Header />
      <div className="main_container">
        <div className="search_sort">
          <input
            onBlur={(event) => handleBlue(event.target.value)}
            onChange={(event) => handleSearch(event.target.value)}
            className="search_input"
            placeholder="Type to search..."
          />
          <div>
            <FaHeart onClick={handleShow} className="heart_filter pointer" />
            <FaSortAlphaDown
              onClick={handleCLickAsc}
              className="sort_red pointer"
            />
            <FaSortAlphaUpAlt
              onClick={handleCLickDesc}
              className="sort_black pointer"
            />
          </div>
        </div>

        <div className="contacts_container">
          {dataList.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              city={item.city}
              country={item.country}
              email={item.email}
              phoneNumber={item.phoneNumber}
              website={item.website}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
