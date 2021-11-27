import React from "react";
import Services from "../Service/Services/Services";
import Banner from "./Banner/Banner";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
