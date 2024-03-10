import React from "react";
import Component from "./Component";
import web from "./images/ujjwal.jpg";
function About() {
  return (
    <>
      <Component
        text="Welcome To "
        strongContent={<strong className="brand-name"><p></p> About Page</strong>}
        text2="Iam Ujjwal and my current age is 22yrs, also i am currently pursuing BTECH in Electrical Engg."
        imgsrc={web}
        visit="/service"
        btname="My Learnings"
        imgStyle={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
      />
    </>
  );
}

export default About;
