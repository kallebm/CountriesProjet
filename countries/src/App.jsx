import "./App.css";

import { Routes, Route } from "react-router";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import { useContext } from "react";
import { CountriesContext } from "./context/countries";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="country/:id" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
