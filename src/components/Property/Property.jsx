import React from "react";
import Header from "../GlobalSubComponent/Header/Header";
import Main from "../Home/subcomponent/main/Main";


const content = {
    title: "HOME/SINGLE PROPERTY",
    DES:"SINGLE PROPERTY"
}

const Property = () => {
  return <div>
    <Header title ={content.title} des={content.DES}/>
    <Main/>
  </div>;
};

export default Property;
