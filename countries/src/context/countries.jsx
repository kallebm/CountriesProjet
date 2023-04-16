import React, { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <CountriesContext.Provider value={[countries, searchTerm, setSearchTerm]}>
      {children}
    </CountriesContext.Provider>
  );
};
