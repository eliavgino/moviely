import { Formik } from "formik";
import React, { Component } from "react";
import Addmovie from "./addmovie";
import Movies from "./movies";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="mainmovies">
                <Movies
                  mymovies={this.props.mymovies}
                  mydelete={this.props.mydelete}
                  mylove={this.props.mylove}
                  activePag={this.props.activePag}
                  vied={this.props.vied}
                />
              </div>
            }
          ></Route>
          <Route
            path="/addmovie"
            element={
              <div className="mainaddmovie">
                <Addmovie
                  onsubmitadding={this.props.onsubmitadding}
                  moviesList={this.props.moviesList}
                />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
