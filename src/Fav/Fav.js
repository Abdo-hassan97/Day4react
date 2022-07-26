import React from 'react';
import { useSelector } from 'react-redux';


const Fav = () => {
    var favMovies = useSelector((state) => state.Togle.FavList);




    return (
        <>
          
    
          <div className="row g-5 mt-3 container-fluid mx-auto bg-light">
            {favMovies.map((mov) => {
              return (
                <>
                  <div className="col-md-3" key={mov.id}>
                    <div className="d text-center border">
                      
              
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                          className=" item "
                        />
                      <h4>{mov.original_title}</h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      );
}   


export default Fav;
