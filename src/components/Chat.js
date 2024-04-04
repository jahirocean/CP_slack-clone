import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "../components/ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {
  const chatRef = useRef(null);
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannelinfo = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let message = snapshot.docs.map((doc) => doc.data());
        setMessages(message);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        user: user.name,
        timestamp: firebase.firestore.Timestamp.now(),
        userImage: user.photoUrl,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    getChannelinfo();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel?.name} </ChannelName>
          <ChannelInfo>This is gdfgasfg Info</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div></div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages?.map((data, index) => (
          <ChatMessage
            text={data.text}
            timestamp={data.timestamp}
            user={data.user}
            userImage={data.userImage}
            key={index}
          />
        ))}
        <Message ref={chatRef} />
        <br />
        <br />
        <br />
        <br />
      </MessageContainer>

      <ChatInput chatRef={chatRef} sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 68px auto min-content;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(83, 38, 83, 0.13);
`;
const MessageContainer = styled.div`
  display: block;
  flex-direction: column;
  height: 75vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Channel = styled.div``;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

const ChannelName = styled.div`
  font-weight: 700;
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Message = styled.div``;
