import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { country } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + country)
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="row">
      {countries.map((country, index) => (
        <div className="detail">
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt={"drapeau " + country.name.common} />
          <div className="infos">
            <table>
              <tbody>
                <tr>
                  <th>Capital</th>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <th>Région</th>
                  <td>{country.region}</td>
                </tr>
                <tr>
                  <th>Sous Région</th>
                  <td>{country.subregion}</td>
                </tr>
                <tr>
                  <th>Langages</th>
                  <td>{Object.values(country.languages).join(", ")}</td>
                </tr>
                <tr>
                  <th>Fuseau Horaire</th>
                  <td>{country.timezones.join(", ")}</td>
                </tr>
                <tr>
                  <th>Carte</th>
                  <td>
                    <a
                      href={`https://www.google.com/maps?q=${country.latlng}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Maps
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
