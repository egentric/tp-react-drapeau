import React from "react";
import Countries from "../componements/Countries";
import Logo from "../componements/Logo";
import Navigation from "../componements/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
