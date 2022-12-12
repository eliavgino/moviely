import React, { Component } from "react";
import Moviegener from "./moviegener";
import Movies from "./movies";
import FooterNav from "./footerNav";
import Navbar from "./navbar";
import Main from "./main";
import { BrowserRouter } from "react-router-dom";
import "./moviely.css";

class MovieeApp extends Component {
  constructor() {
    super();
    this.state.filtered = [...this.state.moviesList];
  }

  state = {
    moviesList: [
      {
        id: 1,
        name: "taken",
        rating: 5,
        genre: "Commedy",
        love: "bi bi-heart",
      },
      {
        id: 2,
        name: "dumb and dumber to",
        rating: 2.22,
        genre: "Action",
        love: "bi bi-heart",
      },
      {
        id: 3,
        name: "gosto",
        rating: 2.22,
        genre: "Drama",
        love: "bi bi-heart",
      },
      {
        id: 4,
        name: "kongfu panda",
        rating: 2.22,
        genre: "Commedy",
        love: "bi bi-heart",
      },
      {
        id: 5,
        name: "taken",
        rating: 2.22,
        genre: "Horror",
        love: "bi bi-heart",
      },
      {
        id: 6,
        name: "dumb and dumber to",
        rating: 2.22,
        genre: "Horror",
        love: "bi bi-heart",
      },
      {
        id: 7,
        name: "gosto",
        rating: 2.22,
        genre: "Drama",
        love: "bi bi-heart",
      },
      {
        id: 8,
        name: "kongfu panda",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 9,
        name: "taken",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 10,
        name: "dumb and dumber to",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 11,
        name: "gosto",
        rating: 2.22,
        genre: "Action",
        love: "bi bi-heart",
      },
      {
        id: 12,
        name: "kongfu panda",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 13,
        name: "kongfu panda",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 14,
        name: "taken",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 15,
        name: "dumb and dumber to",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
      {
        id: 16,
        name: "gosto",
        rating: 2.22,
        genre: "Action",
        love: "bi bi-heart",
      },
      {
        id: 17,
        name: "kongfu panda",
        rating: 2.22,
        genre: "Fantesy",
        love: "bi bi-heart",
      },
    ],
    filtered: [],
    activePag: 1,
    pagevied: 10,
    newId: 18,
  };

  render() {
    return (
      <React.Fragment>
        <div id="movieApp" className=" container">
          <BrowserRouter>
            <div className="row">
              <Navbar
                devied={(ev) => this.devied(ev)}
                showall={this.checkgener}
              />
            </div>

            <div className="row">
              <Moviegener
                checkgener={this.checkgener}
                moviesList={this.state.moviesList}
              />
            </div>

            <div className="row">
              <Main
                onsubmitadding={this.onsubmitadding}
                moviesList={this.state.moviesList}
                mymovies={this.state.filtered.slice(
                  this.state.activePag * this.state.pagevied -
                    this.state.pagevied,
                  this.state.activePag * this.state.pagevied
                )}
                mydelete={(id) => this.handleDelete(id)}
                mylove={(id) => this.loveit(id)}
                activePag={this.state.activePag}
                vied={this.state.vied}
                newId={this.state.newId}
              />
            </div>
          </BrowserRouter>
          <div className="row footerNav">
            <FooterNav
              vied={this.state.pagevied}
              active={this.state.activePag}
              activeChange={this.activeChange}
              mymovies={this.state.filtered}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  onsubmitadding = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.moviesList.push({
      id: this.state.newId,
      name: Formik.name,
      rating: Formik.rating,
      genre: Formik.genre,
      love: "bi bi-heart",
    });
    this.state.newId++;
    this.setState({ newId: this.state.newId });
    event.target.reset();
  };
  // currentpage=(activePag,vied)=>
  // {
  //     console.log(this.state.filtered.slice((activePag*vied)-(vied),(activePag)*(vied)));
  //  return this.state.filtered.slice((activePag*vied)-(vied),(activePag)*(vied))
  // }

  devied = (ev) => {
    if (ev.key == "Enter" && ev.target.value > 0) {
      this.setState({ pagevied: ev.target.value });
    }
  };

  activeChange = (num) => {
    this.setState({ activePag: num });
  };

  checkgener = (genre) => {
    switch (genre) {
      case "All categories":
        this.state.filtered = [...this.state.moviesList];
        this.setState({ filtered: this.state.filtered });
        break;

      case "Action":
        {
          const filtered = [
            ...this.state.moviesList.filter((m) => m.genre == genre),
          ];
          this.setState({ filtered });
        }
        break;
      case "Commedy":
        {
          const filtered = [
            ...this.state.moviesList.filter((m) => m.genre == genre),
          ];
          this.setState({ filtered });
        }
        break;
      case "Fantesy":
        {
          const filtered = [
            ...this.state.moviesList.filter((m) => m.genre == genre),
          ];
          this.setState({ filtered });
        }
        break;
      case "Horror":
        {
          const filtered = [
            ...this.state.moviesList.filter((m) => m.genre == genre),
          ];
          this.setState({ filtered });
        }
        break;
      case "Drama":
        {
          const filtered = [
            ...this.state.moviesList.filter((m) => m.genre == genre),
          ];
          this.setState({ filtered });
        }
        break;
    }
  };

  loveit = (movieId) => {
    const moviesList = this.state.moviesList.map((val) => {
      if (val.id == movieId && val.love == "bi bi-heart") {
        val.love = "bi bi-suit-heart-fill";
      } else if (val.id == movieId && val.love == "bi bi-suit-heart-fill")
        val.love = "bi bi-heart";
    });
    this.setState(moviesList);
  };

  handleDelete = (movieId) => {
    const arr = this.state.moviesList.filter((val) => val.id !== movieId);
    this.setState({ moviesList: arr });
    const arr2 = this.state.filtered.filter((val) => val.id !== movieId);
    this.setState({ filtered: arr2 });

    // const maxPag = Math.ceil(this.state.filtered.length/this.state.pagevied)

    // console.log(maxPag, this.state.activePag);
  };
}

export default MovieeApp;
