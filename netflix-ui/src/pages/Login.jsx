import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handelLogin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header signup />
        <div className="form-container flex column a-center j-center">
          <div className="form flex a-center j-center column">
            <div className="title">
              <h3 className="a-center j-center">Login</h3>
            </div>

            <div className="container flex column ">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button onClick={handelLogin}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .form-container {
      gap: 2rem;
      height: 85vh;

      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gao: 2rem;
        color: white;

        .title {
          h3 {
            font-size: 2rem;
            font-weight: bolder;
            padding: 1rem;
          }
        }

        .container {
          gap: 2rem;
          input {
            padding: 0.8rem 1rem;
            width: 20rem;
            border: none;
            border-radius: 0.3rem;
            &:focus{
              outline:none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: #fff;
            font-weight: bolder;
            font-size: 1.05rem;
            border-radius: 0.3rem;
          }
        }
      }
    }
  }
`;

export default Login;
