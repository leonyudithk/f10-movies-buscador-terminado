import React from 'react';
import ListMovies from './ListMovies';

const SeniorCargar = () => {
    return (
        <div>
            <h1>The Lord of the Rings</h1>
            <hr/>
            <ListMovies category='senior'/>
        </div>
    );
};

export default SeniorCargar;