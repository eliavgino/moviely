import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

class FooterNav extends Component {
  render() {
    const { active, activeChange, vied, mymovies } = this.props;
    //math.ceil(totalMovies/movieDispLength)
    let items = [];
    for (
      let number = 1;
      number <= Math.ceil(mymovies.length / vied);
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => activeChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = (
      <div className="position-relative footerNav">
        <Pagination className="position-absolute top-50 start-50 translate-middle">
          {items}
        </Pagination>
      </div>
    );

    return <div className="position-absolute footerNav">{paginationBasic}</div>;
  }
}

export default FooterNav;
