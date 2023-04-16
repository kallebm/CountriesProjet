import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import "./Home.css";
import { CountriesContext } from "../../context/countries";
import ReactLoading from "react-loading";
import Loading from "../../layout/Loading";

const Home = () => {
  const [countries, searchTerm, setSearchTerm] = useContext(CountriesContext);
  const countriesFiltered =
    countries.length > 0 &&
    countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

  return (
    <>
      {countries.length > 0 ? (
        <div className="countries_container">
          {searchTerm ? (
            countriesFiltered.length > 0 ? (
              countriesFiltered.map((country) => (
                <CountryCard key={country.cca3} country={country} />
              ))
            ) : (
              <p>There is no any country with that name.</p>
            )
          ) : (
            countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
