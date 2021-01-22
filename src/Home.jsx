import React from 'react';
import Common from './Common';
import web from "../src/images/blogging.svg";
const Home = () =>{
  return(
    <>
      <Common 
      name="Growth your buisness with" 
      imgsrc={web} 
      visit="/service" 
      btname="Get Started"
      />
    </>
  ); 
};
export default Home;