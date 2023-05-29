import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, fetchMoviesByGenres, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase.config';
import { current } from '@reduxjs/toolkit';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SelectGenres from '../components/SelectGenres';

export default function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (
      window.onscroll = null
    )
  }

  const navigate = useNavigate();
  
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded );
  const genres = useSelector((state) => state.netflix.genres );
  const movies = useSelector((state) => state.netflix.movies );

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getGenres())
  },[])
  
  
  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({ type: "movie"}))
  },[genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if(currentUser) navigate("/");
  })


  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>


      <div className='data'>
        <SelectGenres genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  )
}

const Container = styled.div`

  .data{
    margin-top: 8rem;

    .not-available{
      text-align: center;
      color: white;
      margin-top: 4rem;
    }

  }

`;
