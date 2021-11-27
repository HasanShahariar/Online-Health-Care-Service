
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  console.log("on service detail");
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`/services.json`)
      .then((res) => res.json())
      .then((data) => {
        for (const service of data) {
          if (service.id === serviceId) setService(service);
        }
      });
  }, [serviceId]);
  console.log(service);

  return (
    <div className="container d-flex justify-content-center">
      {service.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="card">
          <img src={service.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p>{service.name}</p>
            <h5 className="card-title">{service.category}</h5>
            <p className="card-text">{service.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
