import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { CountriesContext } from "../context/countries";
import "./Searchbar.css";

const Searchbar = () => {
  const [countries, searchTerm, setSearchTerm] = useContext(CountriesContext);

  return (
    <div className="search">
      <BiSearch />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value.trimStart());
        }}
      />
    </div>
  );
};

export default Searchbar;
