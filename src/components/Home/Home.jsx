import React from "react";
import Card from "./subcomponent/Card";
import CardDetails from "./subcomponent/CardDetails";
import Features from "./subcomponent/Features";
import Main from "./subcomponent/main/Main";
import Slider from "../GlobalSubComponent/Carasoul/Slider"
import Subsection from "../GlobalSubComponent/Subsection/Subsection"
import Head from "../GlobalSubComponent/ProductHead/Head";




const Home = () => {
  return (
    <div>
       <Slider/>
       <Features/>
      <Card />
      <CardDetails/>
      <Head/>
      <Subsection/>
      <Main/>
    </div>
  );
};

export default Home;
