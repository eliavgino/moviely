import React, { Component } from "react";
import sidebar from "../picturs/sidebar.webp";
import { NavLink } from "react-router-dom";

class Moviegener extends Component {
  render() {
    const { checkgener, moviesList } = this.props;
    return (
      <div
        style={{ backgroundImage: `url(${sidebar})` }}
        className="moviegener"
      >
        <ul className="nav justify-content-center">
          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item ">
              <a className="nav-link disabled">category</a>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item ">
              <NavLink to={"/"}>
                {" "}
                <button
                  className="btn btn-outline-light position-relative "
                  onClick={() => checkgener("All categories")}
                >
                  All categories
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {moviesList.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </NavLink>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item ">
              <button
                className="btn btn-outline-light position-relative "
                onClick={() => checkgener("Action")}
              >
                Action
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {moviesList.filter((m) => m.genre == "Action").length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item">
              <button
                className="btn btn-outline-light position-relative"
                onClick={() => checkgener("Drama")}
              >
                Drama
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {moviesList.filter((m) => m.genre == "Drama").length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item">
              <button
                className="btn btn-outline-light position-relative"
                onClick={() => checkgener("Commedy")}
              >
                Commedy
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {moviesList.filter((m) => m.genre == "Commedy").length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item">
              <button
                className="btn btn-outline-light position-relative"
                onClick={() => checkgener("Fantesy")}
              >
                Fantasy
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {moviesList.filter((m) => m.genre == "Fantesy").length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </div>

          <div className="mt-2 mb-2 me-4 ms-4">
            <li className="nav-item">
              <button
                className="btn btn-outline-light position-relative"
                onClick={() => checkgener("Horror")}
              >
                Horror
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {moviesList.filter((m) => m.genre == "Horror").length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Moviegener;
