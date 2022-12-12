import React, { Component } from "react";
import Movie from "./movie";
import moviesimage from "../picturs/mainmovies.webp";
import "../commponents/moviely.css";

class Movies extends Component {
  state = {};

  render() {
    const { mymovies, mydelete, mylove, vied, activePag } = this.props;
    return (
      <table
        className="table"
        style={{ backgroundImage: `url(${moviesimage})` }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>rating</th>
            <th>genre</th>
            <th>Delete</th>
            <th>like</th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {mymovies.map((mv) => (
            <Movie
              loveme={mv.love}
              myid={mv.id}
              myname={mv.name}
              mygener={mv.genre}
              myrating={mv.rating}
              key={mv.id}
              deleteme={() => mydelete(mv.id)}
              love={() => mylove(mv.id)}
            ></Movie>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
