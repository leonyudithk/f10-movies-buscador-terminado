import React from 'react';
import { Link } from 'react-router-dom';

const PintarMoviesCard = ({id, name}) => {

    return (
        <div>
           <div>
               <img src={`./assets/movies/${id}.jpg`} alt="" className='card-img'/>
           </div>
           <div>
               <h4>{name}</h4>
              <Link to={`/movie/${id}`}> Mas..</Link>
           </div>
        </div>
    );
};

export default PintarMoviesCard;