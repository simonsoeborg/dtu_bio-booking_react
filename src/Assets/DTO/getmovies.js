import axios from "axios";
import { useState } from "react";

const [movie, setMovie] = useState([]);
const [movies, setMovies] = useState([]);

// https://medium.com/geekculture/learn-to-use-axios-with-react-ee92829d8ed6

function getMovies() {
  axios.get(``).then((data) => {
    const movie = data.data;
    this.movies.setState({ movie });
  });

  return this.state.movies;
}

function getMovie(id) {
  axios.get(``).then((data) => {
    const movie = data.data;
    this.movie.setState({ movie });
  });

  return this.state.movie;
}

function putMovie(id, data) {
  const res = await axios.put(` WHERE Something = ${id}`, data);
  this.setState.movie({ updatedAt: res.data.updatedAt });
}

function createMovie(data) {
  const res = await axios.create(``, data);
  this.setState.movie({ updatedAt: res.data.updatedAt });
}

function deleteMovie(id) {
  const res = await axios.delete(`WHERE id = ${id}`);
  this.setState.movie({ updatedAt: res.data.updatedAt });
}
