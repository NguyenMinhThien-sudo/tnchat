import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
          alt=""
        />
        <span>Vừa xong</span>
      </div>
      <div className="messageContent">
        <p>Xin chào!</p>
        {/* <img
          src="https://images.unsplash.com/photo-1702012464618-3cee08e53644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
