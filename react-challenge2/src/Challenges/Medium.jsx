// import React, { useEffect, useRef, useState } from 'react';
import React, { useEffect, useState, useRef } from "react";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [query, setQuery] = useState("");

  const input = useRef(null);

  const getQuery = (e) => {
    e.preventDefault();
    let newQuery = input.current.value;
    setQuery(newQuery);
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWJhMmU4YTU3M2ZmZDkzYTA4ZGM5MzFjMGVjMDk5NyIsIm5iZiI6MTczNDYxNzAzOC45MjksInN1YiI6IjY3NjQyN2NlNTgxYTNjMDUwN2FiMTdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t_mi0mddO80vZdMllWIqMYF4uujDU5iLuuPEsZJK_Ek",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovie(json.results[0]))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <>
      <form onSubmit={getQuery}>
        <h3>Search Movie:</h3>
        <input type="text" ref={input} placeholder="Shrek 2" />
      </form>

      <h1>Movie: {query}</h1>

      {!movie ? (
        <p>Enter to search</p>
      ) : (
        <div className="card">
          <div className="cardImg">
            <img
              src={
                "https://media.themoviedb.org/t/p/w440_and_h660_face/" +
                movie.poster_path
              }
              alt={movie.title}
            />
          </div>
          <div className="cardContent">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}
