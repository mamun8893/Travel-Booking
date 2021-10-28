import React from "react";
import Achivement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="home-app">
      <Banner></Banner>
      <Services></Services>
      <Achivement></Achivement>
      <Blog></Blog>
    </div>
  );
};

export default Home;
