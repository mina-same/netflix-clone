import React from 'react'
import { useState } from 'react'
import backgroundImaged from '../assets/home.jpg';
import MovieLogo from "../assets/homeTitle.webp"
import Navbar from '../components/Navbar';
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';

function Netflix() {
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
    if(genresLoaded) dispatch(fetchMovies({ type: "all"}))
  },[genresLoaded]);


  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

      <div className="hero">
        <img src={backgroundImaged} alt="bg" className='background-image'/>

      <div className="container">

          <div className="logo">
            <img src={MovieLogo} alt="logo" />
          </div>

          <div className="buttons flex">
            <button className="flex a-center j-center" onClick={() => navigate('player')}>
              <FaPlay/> play
            </button>

            <button className="flex a-center j-center">
              <AiOutlineInfoCircle/> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  )
}

const Container= styled.div`
  background-color: #000;
  .hero{
    position: relative;

    .background-image{
      filter: brightness(60%);
    }
    img{
      height: 100vh;
      width: 100%;
    }
  }

  .container{
    position: absolute;
    bottom: 5rem;

    .logo{
      img{  
        width: 100%;
        height: 100%;
        margin-left: 5rem; 
      }
    }

    .buttons{
      margin: 5rem;
      gap: 2rem;
      button{
        font-size: 1.4rem;
        gap: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.3rem;
        border: none;
        background-color: #FFF3E2;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        &:focus{
          outline: none;
        }
        &:hover{
          background-color: #F6F1E9;
          opacity: 0.8;
        }
        &:nth-of-type(2){
          background-color: Rgba(109, 109, 110, 0.7);
          color: #fff;
          svg{
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;


export default Netflix
