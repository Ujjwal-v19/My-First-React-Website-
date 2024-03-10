import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card h-100" style={{ border: "2px solid black" }}> 
        <img
          src={props.img}
          className="card-img-top border-bottom border-black"
          alt="Card"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            
          </p>
          <NavLink to={props.link} className="btn btn-primary">
            Go to website
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;



