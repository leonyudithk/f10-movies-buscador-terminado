import React from 'react';
import getByCategory from './GetSelectors.js/getByCategory';
import PintarMoviesCard from './PintarMoviesCard';

const ListMovies = ({category}) => {

   const movies = getByCategory(category)
   console.table(movies)

    return (
        <div>
           {
               movies.map(movie => (
                   <PintarMoviesCard key={movie.id} {...movie} />
               ))}
        </div>
    );
};

export default ListMovies;