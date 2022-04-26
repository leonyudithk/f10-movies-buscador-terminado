import { movies } from "../../data/movies";

const getById = (id) => {
   return  movies.find(movie => movie.id === id)
};

export default getById;