import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db, { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const defaultUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(defaultUser);

  const getChannel = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
          };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };

  useEffect(() => {
    getChannel();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">Select any Channel or create channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
  overflow: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

const AppLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const AppLoadingContents = styled.div``;
