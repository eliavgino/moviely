import { useFormik } from "formik";
import moviesimage from "../picturs/mainmovies.webp";
import { NavLink } from "react-router-dom";

const Addmovie = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      genre: "",
      rating: "",
    },
  });

  return (
    <form
      onSubmit={(ev) => props.onsubmitadding(ev, formik.values)}
      style={{ backgroundImage: `url(${moviesimage})` }}
    >
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Movie name:
        </span>
        <input
          required
          autoFocus
          type="text"
          className="form-control"
          placeholder="Movie-name"
          aria-label="Movie-name"
          aria-describedby="basic-addon1"
          name="name"
          onChange={formik.handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          required
          autoFocus
          type="number"
          placeholder="rating 1-10"
          aria-describedby="basic-addon1"
          name="rating"
          onChange={formik.handleChange}
        >
          <option selected disabled>
            rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          required
          autoFocus
          type="text"
          placeholder="movie gener"
          aria-describedby="basic-addon1"
          name="genre"
          onChange={formik.handleChange}
        >
          <option selected disabled>
            choose your genre:
          </option>
          <option value="Action">Action</option>
          <option value="Commedy">Commedy</option>
          <option value="Fantesy">Fantesy</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-outline-light mt-2 mb-2 me-4 ms-4"
      >
        add movie
      </button>
      <button
        type="reset"
        className="btn btn-outline-light mt-2 mb-2 me-4 ms-4"
      >
        reset
      </button>
      <NavLink to={"/"}>
        <button className="btn btn-outline-light mt-2 mb-2 me-4 ms-4">
          back home
        </button>
      </NavLink>
    </form>
  );
};

export default Addmovie;
