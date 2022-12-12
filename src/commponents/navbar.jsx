import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import navbarimage from "../picturs/navbarimage.jpg";

class Navbar extends Component {
  state = {};
  render() {
    const { devied, showall } = this.props;
    return (
      <div
        className="navbarr"
        style={{ backgroundImage: `url(${navbarimage})` }}
      >
        <div
          className="card text-center"
          style={{
            backgroundColor: "rgba(9, 11, 13, 0)",
            backgroundsize: "cover",
          }}
        >
          <div className="card-header">
            <h1>Moviely</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special movies for all the family</h5>
            <p className="card-text">CHOOSE THE MOVIE YOU WANT TO LIVE IN</p>
            <div className="input-group w-2">
              <div style={{ width: "5vw" }}>
                <input
                  min={1}
                  type="number"
                  onKeyPress={(ev) => devied(ev)}
                  className="form-control "
                  placeholder="Enter the number that yo want per page"
                  aria-label="Enter the number that yo want per page"
                  aria-describedby="basic-addon2"
                />
              </div>
              <span
                className="input-group-text"
                id="basic-addon2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.53)",
                  color: " rgba(197, 188, 188, 0.914)",
                }}
              >
                movies
              </span>
            </div>
            <NavLink to={"/"}>
              <button
                onClick={() => showall("all")}
                className="btn btn-outline-light mt-2 mb-2 me-4 ms-4"
              >
                moviely
              </button>
            </NavLink>
            <NavLink to={"/addmovie"}>
              <button className="btn btn-outline-light mt-2 mb-2 me-4 ms-4">
                add movie
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
