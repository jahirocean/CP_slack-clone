import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photoUrl: result.user.photoURL,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <SlackImage src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" />
        <h1>Sign in Slack</h1>
        <LoginButton onClick={() => signIn()}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  height: 100vh;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  align-items: center;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.24);
  padding: 40px 60px;
  h1 {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 26px;
  }
`;
const SlackImage = styled.img`
  width: 100px;
`;
const LoginButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  padding: 8px;
  font-size: 13px;
  letter-spacing: 1.2px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
  }
  :focus {
    outline: none;
  }
`;
