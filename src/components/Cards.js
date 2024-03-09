import React from "react";
import { Link } from "react-router-dom";
export const Cards = ({id, name, gender, address, user, image}) => {
  return (
    <>
      <div className="container d-flex">
        <div className="card my-2 text-center" style={{width: "18rem"}}>
          <img src={image} className="card-img-top w-25 rounded-circle mx-auto d-block" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
            gender: {gender} <br></br>
            location:{address}
            </p>
            <Link to='/profile' state={{user}} className="btn btn-outline-success">
              Read More
            </Link>
          </div>
        </div>
      </div> 
    </>
  );
};
