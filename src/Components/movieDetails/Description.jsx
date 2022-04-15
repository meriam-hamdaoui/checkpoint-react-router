import React from "react";
import Rating from "../../Rating";
import { useParams, useNavigate } from "react-router-dom";

const Description = ({ moviesList }) => {
  const params = useParams();
  console.log(params);
  let movie = moviesList.find((film) => film.idItem === +params.idItem);
  //   console.log(moviesList);
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginLeft: "20%",
        display: "flex",
        width: "80%",
        heigth: "100%",
      }}
    >
      <div style={{ width: "30%", height: "400px" }}>
        <img
          style={{ width: "100%", height: "400px" }}
          src={movie.posterURL}
          alt={movie.title}
        />
      </div>
      <div style={{ marginLeft: "2%", marginTop: "2%", width: "60%" }}>
        <div>
          <h1
            style={{
              fontFamily: "monospace sans-serif",
              fontSize: "40px",
              textAlign: "center",
              paddingBottom: "5%",
            }}
          >
            {movie.title}{" "}
            <span
              style={{
                fontSize: "25px",
              }}
            >
              released
            </span>{" "}
            {movie.year}
          </h1>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            {movie.description}
          </p>
        </div>
        <div
          style={{
            marginTop: "25%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{
              background: "#116466",
              color: "#ffd52d",
              fontSize: "20px",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={() => navigate("/")}
          >
            <i class="fa-solid fa-caret-left"></i> GO BACK
          </button>
          <Rating rateNbr={movie.rating} />
        </div>
      </div>
    </div>
  );
};

export default Description;
