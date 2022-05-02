import React from "react";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{year}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Movie;
