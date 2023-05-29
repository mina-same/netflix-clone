import React from "react";
import styled from "styled-components";
import login from "../assets/login.jpg";

export default function BackgroundImage() {
  return (
    <Container >
      <img src={login} alt="Login img" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  img{
    height: 100vh;
    width: 100vw;
  }
`;
