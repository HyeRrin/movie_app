import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [adventure, setAdventure] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [crime, setCrime] = useState([]);
  const getAdventure = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=download_count&genre=adventure&limit=5`
      )
    ).json();
    setAdventure(json.data.movies);
    setLoading(false);
  };
  const getAnimation = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=download_count&genre=animation&limit=5`
      )
    ).json();
    setAnimation(json.data.movies);
    setLoading(false);
  };
  const getCrime = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=download_count&genre=crime&limit=5`
      )
    ).json();
    setCrime(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getAdventure();
    getAnimation();
    getCrime();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movie Ranking</h1>
          <p>Based on download count</p>
          <h2>Adventure</h2>
          {adventure.map((adventure) => (
            <Movie
              key={adventure.id}
              id={adventure.id}
              coverImg={adventure.medium_cover_image}
              title={adventure.title}
              year={adventure.year}
              rating={adventure.rating}
            />
          ))}
          <h2>Animation</h2>
          {animation.map((animation) => (
            <Movie
              key={animation.id}
              id={animation.id}
              coverImg={animation.medium_cover_image}
              title={animation.title}
              year={animation.year}
              rating={animation.rating}
            />
          ))}
          <h2>Crime</h2>
          {crime.map((crime) => (
            <Movie
              key={crime.id}
              id={crime.id}
              coverImg={crime.medium_cover_image}
              title={crime.title}
              year={crime.year}
              rating={crime.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
