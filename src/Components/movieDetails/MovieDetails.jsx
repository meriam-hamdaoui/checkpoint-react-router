import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "2%",
        alignItems: "baseline",
      }}
    >
      <nav
        style={{
          marginLeft: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          fontFamily: "Grape Nuts cursive",
        }}
      >
        <NavLink
          style={{
            textDecoration: "none",
            color: "gold",
            fontSize: "25px",
          }}
          to="description"
        >
          Description
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "gold",
            fontSize: "30px",
          }}
          to="trailer"
        >
          Trailer
        </NavLink>
        <Outlet />
      </nav>
    </div>
  );
};

export default MovieDetails;
