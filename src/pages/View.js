import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../componements/Detail";
import Logo from "../componements/Logo";
import Navigation from "../componements/Navigation";

const View = () => {
  // const { country } = useParams();
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/name/" + country)
  //     .then((res) => setCountries(res.data));
  // }, []);
  // console.log(countries);
  return (
    <div>
      <Logo />
      <Navigation />
      <Detail />
    </div>
  );
};

export default View;
