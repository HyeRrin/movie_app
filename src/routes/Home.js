import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../routes/Home.module.css";

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
        <div className={styles.loading_main}>
          <h1 className={styles.loading}>Loading...</h1>
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>I Love Movie</h1>
            <p>누적 다운로드 횟수에 기반한</p>
            <p>장르별 Best5 영화 정보 제공 서비스</p>
          </div>
          <div className={styles.box_genre}>
            <h2 className={styles.title_genre}>Adventrue (어드벤처)</h2>
            {adventure.map((adventure) => (
              <Movie
                key={adventure.id}
                id={adventure.id}
                coverImg={adventure.medium_cover_image}
                title={adventure.title}
                year={adventure.year}
                rating={adventure.rating}
                url={adventure.url}
              />
            ))}
          </div>
          <div className={styles.box_genre}>
            <h2 className={styles.title_genre}>Animation (애니메이션)</h2>
            {animation.map((animation) => (
              <Movie
                key={animation.id}
                id={animation.id}
                coverImg={animation.medium_cover_image}
                title={animation.title}
                year={animation.year}
                rating={animation.rating}
                url={animation.url}
              />
            ))}
          </div>
          <div className={styles.box_genre}>
            <h2 className={styles.title_genre}>Crime (범죄)</h2>
            {crime.map((crime) => (
              <Movie
                key={crime.id}
                id={crime.id}
                coverImg={crime.medium_cover_image}
                title={crime.title}
                year={crime.year}
                rating={crime.rating}
                url={crime.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
