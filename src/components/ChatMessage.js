import React from "react";
import styled from "styled-components";

function ChatMessage({ text, user, userImage, timestamp }) {
  return (
    <Container>
      <UserAvatar>
        <img
          src={
            userImage
              ? userImage
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt=""
        />
      </UserAvatar>
      <MessageContent>
        <Name>
          {user}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  overflow: hidden;
`;
const UserAvatar = styled.div`
  min-width: 36px;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 900;
  line-height: 1.4;

  span {
    font-weight: 400;
    color: rgb(97, 96, 97);
    margin-left: 8px;
    font-size: 13px;
  }
`;
const Text = styled.span`
  font-size: 13px;
`;
