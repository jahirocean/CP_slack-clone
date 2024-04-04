import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems } from "../data/SidebarData";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar({ rooms }) {
  const history = useHistory();
  const addChannel = () => {
    const promptname = prompt("Enter Channel name:");
    if (promptname) {
      db.collection("rooms").add({
        name: promptname,
      });
    }
  };

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };
  return (
    <Container>
      <WorkspaceContainer>
        <Name>Jahir Raihan</Name>
        <NewMessage>
          <AddButton />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChanelItems>
            {item.icon}
            {item.text}
          </MainChanelItems>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelList>
          {rooms.map((room) => (
            <Channel
              onClick={() => goToChannel(room.id)}
              id={room.id}
              key={room.id}
            >
              # {room.name}
            </Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  color: white;
  border-bottom: 1px solid #532753;
`;

// practise pourpus
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #3f0e40;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;
const AddButton = styled(AddIcon)``;

const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChanelItems = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;
const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 19px;
`;
const ChannelList = styled.div``;
const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;
