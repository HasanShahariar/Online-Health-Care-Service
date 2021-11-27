import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import { useHistory, useParams } from "react-router";

const Service = ({ service }) => {
  // const { detailsId } = useParams();
  const { name, category, cost, Duration, time, details, img, id } = service;
  const url = `/service/${id}`;
  return (
    <div className="service">
      <img className="size" src={img} alt="" />
      <h2>{category}</h2>
      <h3>{name}</h3>
      <h5>Price: {cost}</h5>
      <h5>Time: {Duration}</h5>
      <h5>Time: {time}</h5>
      <p className="px-3">{details}</p>
      <button className="btn btn-info mb-3">
        <Link to={url}>Get Service</Link>
      </button>
    </div>
  );
};

export default Service;
