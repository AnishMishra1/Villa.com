import React from "react";
import Card from "./subcomponent/Card";
import Hero from "./subcomponent/Hero";
import CardDetails from "./subcomponent/CardDetails";
import Features from "./subcomponent/Features";
import Subsection from "./subcomponent/Subsection/Subsection";

const Home = () => {
  return (
    <div>
       <Hero/> 
       <Features/>
      <Card />
      <CardDetails/>
      <Subsection/>
    </div>
  );
};

export default Home;
