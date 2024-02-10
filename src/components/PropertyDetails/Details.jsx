import React from 'react'
import Header from '../GlobalSubComponent/Header/Header'
import Head from '../GlobalSubComponent/ProductHead/Head';
import Subsection from '../GlobalSubComponent/Subsection/Subsection';


const  content = {
    title:"HOME/SINGLE PROPERTY",
    DES:"SINGLE PROPERTY"
}
const Details = () => {
  return (
    <div>
      <Header title={content.title} des={content.DES} />
      <Head />
      <Subsection />
    </div>
  );
}

export default Details