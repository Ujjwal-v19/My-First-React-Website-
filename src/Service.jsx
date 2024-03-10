import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import CardData from "./CardData";
function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Learnings</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center">
            <div className="row gy-4">
              {CardData.map((value, index) => {
                return <Card key={index} img={value.img} title={value.title} link={value.link} />;
              })}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <NavLink to="/contact" className="btn-service">
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
