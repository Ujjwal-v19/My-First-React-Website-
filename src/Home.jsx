import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/welcome.png"
import Component from "./Component";

function Home() {
  return (
    <>
   <Component
    text="Welcome To Home Page By "
    strongContent={<strong className="brand-name"><p></p> Ujjwal Varshney </strong>}
    text2="This is Homepage and this is a dummy project also my first React Website. To know more about me click below"
    imgsrc={web}
    visit="/about"
    btname="About Me"
   />
    </>
  );
}

export default Home;
