import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { CountriesContext } from "../context/countries";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [countries, searchTerm, setSearchTerm] = useContext(CountriesContext);

  return (
    <nav id="navbar">
      <Link
        to={"/"}
        onClick={() => {
          setSearchTerm("");
        }}
      >
        <BiWorld className="logo_image" />
        <p>COUNTRIES</p>
      </Link>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
