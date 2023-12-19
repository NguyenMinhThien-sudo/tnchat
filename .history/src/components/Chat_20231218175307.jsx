import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/Add.png";
import More from "../img/more.png";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Thiện</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Chat;
