import React from "react";

import "./search-box.style.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
