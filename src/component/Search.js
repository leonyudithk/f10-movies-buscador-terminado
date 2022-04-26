import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import getByName from './GetSelectors.js/getByName';
import querystring from 'query-string'
import PintarMoviesCard from './PintarMoviesCard';


const Search = () => {

    const navigate= useNavigate()
    const location = useLocation()
    const {q=''}= querystring.parse(location.search)

    const [values, handleInputChange, reset] = useForm({
        searchT: q
    })
    const { searchT } = values;

    //---llamamos al get name
    const filterMoviesName = getByName(searchT)
    console.log(filterMoviesName)

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchT}`)
        console.log('en en handle',searchT)
        console.log(q)

        reset()
    }
    return (
        <div>
            <h1>Search  Movies</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    name="searchT"
                    autoComplete='off'
                    //value={searchT}
                    onChange={handleInputChange}

                />
            </form>
            <div className="col-6">
                <h1>Results</h1>
                {
                    filterMoviesName.map(movie=>(
                        <PintarMoviesCard key={movie.id} {...movie}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;