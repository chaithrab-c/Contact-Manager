import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import contactlogo from "../../assets/contact-logo.avif";

function Card1({ user }) {
  return (
    <Card className="shadow-sm" style={{ width: "100%" }}>
      <Card.Img variant="top" src={contactlogo} className="mx-auto d-block w-50 mt-3"
      />
      <Card.Body className="text-center"> <h5>{user.name}</h5>
        <p className="text-muted">{user.phone}</p>

        <div className="d-flex justify-content-center flex-wrap gap-2">
          <NavLink to={`/ViewContact/${user.id}`} className="btn btn-warning btn-sm"><i className="fa-regular fa-eye me-1" /> View </NavLink>
          <NavLink to={`/EditContact/${user.id}`} className="btn btn-info btn-sm"> <i className="fa-solid fa-pen me-1" /> Edit </NavLink>
          <NavLink to={`/DeleteContact/${user.id}`} className="btn btn-danger btn-sm"> <i className="fa-solid fa-trash me-1" /> Delete </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card1;
