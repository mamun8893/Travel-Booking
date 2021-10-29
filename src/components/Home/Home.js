import React from "react";
import Achivement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div className="home-app">
      <Banner></Banner>
      <Packages></Packages>
      <Achivement></Achivement>
      <Blog></Blog>
    </div>
  );
};

export default Home;
