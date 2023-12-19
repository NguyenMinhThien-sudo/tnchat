import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Tìm thành viên" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
          alt=""
        />
        <div className="userChatInfo">
          <span>Trung</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
