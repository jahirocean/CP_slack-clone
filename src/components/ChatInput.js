import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ sendMessage, chatRef }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };
  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Message here..."
          />
          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 10px 20px 24px 20px;
`;
const InputContainer = styled.div`
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  form {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
      :focus {
        outline: none;
      }
    }
  }
`;

const Send = styled(SendIcon)``;

const SendButton = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  background: #007a5a;
  justify-content: center;
  color: white;
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
  .MuiSvgIcon-root {
    width: 18px;
  }
`;
