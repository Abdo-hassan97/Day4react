import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axiosInstance from "./../axinosConfing/instance";
import { Link } from "react-router-dom";
import toggleAction from "./../store/actions/toggle";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  var [pageStart, setpageStart] = useState(1);
  var toggle = useSelector((state) => state.Togle.FavList);
  const dispatch = useDispatch();
  const addfav = (e) => {
    debugger;
    console.log(e);
    debugger;
    var isExist =
      toggle.length === 0 ? false : toggle.find((f) => f.id === e.id);
    if (!isExist) {
      toggle.push(e);
    } else {
         var index = toggle.map((item) => item.id).indexOf(e.id);
      if (index !== -1) {
        toggle.splice(index, 1);
      }
    }

    dispatch(toggleAction(toggle));
  };


  useEffect(() => {
    axiosInstance
      .get("movie/popular", { params: { page: pageStart } })
      .then((res) => {

        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageStart]);

  function prev() {
    debugger;
    if (pageStart > 1) {
      setpageStart(--pageStart);
    }
  }
  function next() {
    debugger;
    setpageStart(++pageStart);
    //   }
  }


  return (
    <>
      <p>
        <button onClick={() => prev()}>Prev</button>
        <button onClick={() => next()}>Next</button>
        {pageStart}
      </p>
      <p>
        number of favourites movies : {toggle.length > 0 ? toggle.length : 0}{" "}
      </p>

      <div className="row g-5 mt-3 container-fluid mx-auto bg-light">
        {movies.map((mov) => {
          return (
            <>
              <div className="col-md-3" key={mov.id}>
                <div className="d text-center border">
                  <svg
                    onClick={() => addfav(mov)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    className="bi bi-star-fill"
                    style={{cursor: "pointer"}}
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <Link to={`/details/${mov.id}`} key={mov.id}>
                    {/* <li>{product.title}</li> */}
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                      className=" item "
                    />
                  </Link>
                  <h4>{mov.original_title}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
