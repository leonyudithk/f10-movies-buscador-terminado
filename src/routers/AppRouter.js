import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovies from '../component/DetailMovies';
import Hobbitcargar from '../component/Hobbitcargar';
import ListMovies from '../component/ListMovies'
import NavBar from '../component/NavBar';
import PintarMoviesCard from '../component/PintarMoviesCard';
import Search from '../component/Search';
import SeniorCargar from '../component/SeniorCargar';

const AppRouter = () => {
    return (
      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/list" element={<ListMovies/>}/>
              <Route path="/hobbit" element={<Hobbitcargar/>}/>
              <Route path="/senior" element={<SeniorCargar/>}/>
              <Route path="/pintarCard" element={<PintarMoviesCard/>}/>
              <Route path="/movie/:id" element={<DetailMovies/>}/>
              <Route path="/search" element={<Search/>}/>
              
          </Routes>
      </BrowserRouter>
    );
};

export default AppRouter;