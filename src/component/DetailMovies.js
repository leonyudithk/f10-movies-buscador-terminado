import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getById from './GetSelectors.js/getById';

const DetailMovies = () => {

   const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)

    const movie = getById(id)
    console.log(movie)

    const {name, description} = movie

    const handleReturn =()=>{
        navigate(-1)
    }

    return (
        <div>
        <div>
            <img src={`../assets/movies/${id}.jpg`} alt=""/>

            </div>
            <ul>
                <li><b>Name: </b>{name}</li>
                <li><b>Description:</b>{description}</li>
               
            </ul>
            <div>
                <button onClick={handleReturn}>Atras</button>
            </div>
        </div>
    );
};

export default DetailMovies;