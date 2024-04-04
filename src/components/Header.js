import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header({ user, signOut }) {
 
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user?.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={
              user.photoUrl
                ? user.photoUrl
                : "https://img.icons8.com/officel/2x/person-male.png"
            }
            alt=""
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  background: #350d36;
  color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;
  display: flex;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
  }
  input:focus {
    outline: none;
  }
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  img {
    width: 100%;
  }
`;
