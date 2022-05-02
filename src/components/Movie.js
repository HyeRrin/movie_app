import React from "react";

function Movie({ coverImg, title, year, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Movie;
