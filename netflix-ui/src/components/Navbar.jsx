import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from "../utils/firebase.config";  

function Navbar({ isScrolled }) {
  const links = [
    {name: "Home", link: "/"},
    {name: "TV Shows", link: "/tv"},
    {name: "Movies", link: "/movies"},
    {name: "My List", link: "/myList"},
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser){
      navigate('/login')
    }
  })

  const [showSearch,setShowSearch] = useState(false);
  const [inputHover,setInputHover] = useState(false);
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">

          <div className='brand flex a-center j-center'>
            <img src={logo} alt="logo"/> 
          </div>

          <ul className="flex links">
            {
              links.map(({name,link}) => (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </div>

          <div className="right flex a-center">

            <div className={`search ${showSearch ? "show-search": ""}`}>
              <button onClick={() => setShowSearch(true)} onBlur={ () => { if(!inputHover) setShowSearch(false) }}>
                <FaSearch/>
              </button>

              <input 
                type="text" 
                placeholder="Search" 
                onMouseEnter={() => setInputHover(true) }
                onMouseLeave={() => setInputHover(false)}
                onBlur={() => {
                  setShowSearch(false)
                  setInputHover(false)
                }}
                />
            </div>

            <button 
              onClick={() => signOut(firebaseAuth)}

            >
              <FaPowerOff/>
            </button>

          </div>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }

  nav{
    position: sticky;
    top: 0;
    height: 6rem 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 4rem;
    algin-items: center;
    transition: 0.3s all ease-in-out;

    .left{
      gap: 2rem; 
      .brand{
        img{
          height: 4rem;
          curser: pointer;
        }
      }
    .links{
      gap: 2rem;
      list-style-type: none;
      li{
        a{
          color: #fff;
          text-decoration: none;
        }
      }
    }
    }
  }

  .right{
    gap: 1rem;
    margin-left: 50px;
    button{
      background-color: transparent; 
      outline: none;
      border: none;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
      &:focus{
        outline: none;
      }
      svg{
        color: #f34242;
        font-size: 1.2rem;
      }
    }
    .search{
      display: flex;
      gap: 0.4rem;
      algin-item: center;
      justify-content: center;
      padding: 0.4rem
      button{
        background_color: transparent;
      }
      svg{
        color: #fff;
        margin-left: 8px;
      }
      input{
        width: 0;
        opacity: 0;
        visibility: hidden;
        background-color: transparent;
        transition: 0.3s ease-in-out;
        border: none;
        color: #fff;
        &:focus{
          outline: none;
        }
      }
    }


    .show-search{
      border: 1px solid #fff;
      background-color: rgba(0,0,0,0.6);
      input{
        width: 100%;
        opacity: 1;
        visibility: visible;
        padding: 0.2rem;
        padding-left: 0.5rem;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        color: #fff;
      }
    }
  }
`;

export default Navbar
