import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./CountryDetails.css";
import Loading from "../../layout/Loading";

const CountryDetails = () => {
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);

  const { id } = useParams();

  const getCountry = async (id) => {
    const url = `https://restcountries.com/v3.1/alpha/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data[0]);

    if (data[0].borders) {
      const borderPromises = data[0].borders.map(async (border) => {
        const url = `https://restcountries.com/v3.1/alpha/${border}`;
        const response = await fetch(url);
        const data = await response.json();
        return data[0];
      });
      const borderNames = await Promise.all(borderPromises);
      setBorderCountries(borderNames);
      console.log(borderNames);
    }
  };

  useEffect(() => {
    getCountry(id);
  }, [id]);
  return (
    <div className="country_details_container">
      {country ? (
        <>
          <div className="general_details">
            <img src={country.flags.png} alt="" />
            <h2>{country.name.common}</h2>
          </div>
          <div className="specific_details">
            <div className="country_details">
              <div className="left_side">
                <p>
                  <span>Official name:</span> {country.name.official}
                </p>
                <p>
                  <span>Population:</span> {country.population}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub-region:</span> {country.subregion}
                </p>
              </div>
              <div className="right_side">
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
                <p>
                  <span>Currencies:</span>{" "}
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {Object.entries(country.languages)
                    .map((l) => l[1])
                    .join(", ")}
                </p>
                <p>
                  <span>Independent:</span> {country.independent ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <h2>Borders</h2>
            {borderCountries.length > 0 ? (
              <div className="border_countries">
                {borderCountries.map((border) => (
                  <Link to={`/country/${border.cca3}`}>
                    <img src={border.flags.png} alt="" />

                    <p>{border.name.common}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border_countries">
                <p>It has no border.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CountryDetails;
