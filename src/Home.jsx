import React from 'react';
import Common from './Common';
import web from "../src/images/blogging.svg";
const Home = () =>{
  console.log("skdjnfsfdnsdlkfnkdfn")
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