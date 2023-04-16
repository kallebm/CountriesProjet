import React from "react";
import "./CountryCard.css";
import { useNavigate } from "react-router";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div
      className="country_card"
      onClick={() => {
        navigate(`/country/${country.cca3}`);
      }}
    >
      <img src={country.flags.png} alt={country.flags.alt} />
      <p className="country_name">{country.name.common}</p>
      <div className="details">
        <div className="info">
          <p>
            <span>Population:</span> {country.population}
          </p>
        </div>
        <div className="info">
          <p>
            <span>Region:</span> {country.region}
          </p>
        </div>
        <div className="info">
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
