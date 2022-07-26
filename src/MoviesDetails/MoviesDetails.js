import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from './../axinosConfing/instance';
const MoviesDetails = (props) => {
    const params = useParams();
    const [Movie, setMovie] = useState({});
    useEffect(() => {
        axiosInstance.get(`movie/${params.id}`)
        .then((res) => {
          setMovie(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
        <div>
        <h1>{Movie.title}</h1>
        <img   src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} className=" item "/>
<p>{Movie.overview}</p>
      </div>
    )
}
export default MoviesDetails;
